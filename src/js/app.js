import * as THREE from 'three';
import { REVISION } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import fragment from './shader/fragment.glsl';
import vertex from './shader/vertexParticles.glsl';

import simFragment from './shader/simFragment.glsl';
import simVertex from './shader/simVertex.glsl';

import GUI from 'lil-gui';
import gsap from 'gsap';

export default class Sketch {
    constructor(options) {
        this.scene = new THREE.Scene();

        this.container = options.dom;
        if (!this.container) {
            console.error('Sketch: el contenedor DOM es null o no existe.');
            return;
          }
          
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;

        // this.width = window.innerWidth;
        // this.height = window.innerHeight;

        this.renderer = new THREE.WebGLRenderer({alpha: true ,antialias: true });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0x000000, 0);

        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();

        this.container.appendChild(this.renderer.domElement);

        let aspect = this.width / this.height;
        let frustumSize = 6; // ajusta según lo que necesites ver
        
        this.camera = new THREE.OrthographicCamera(
            -frustumSize * aspect / 2,
            frustumSize * aspect / 2,
            frustumSize / 2,
            -frustumSize / 2,
            0.1,
            100
        );
        this.camera.position.set(0, 0, 4);
        this.camera.lookAt(0, 0, 0);


        // this.camera = new THREE.PerspectiveCamera(
        //     70, 
        //     this.width / this.height, 
        //     0.1, 
        //     1000
        // );

        // this.camera.position.set(0, 0, 4);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableRotate = false; // 🔒 evita rotar con el mouse
        this.controls.enablePan = false;    // 🔒 evita arrastrar con el mouse
        this.controls.enableZoom = false;   // 🔒 evita zoom con la rueda

        this.time = 0;

        const THREE_PATH = `https://unpkg.com/three@0.${REVISION}.x`
        this.dracoLoader = new DRACOLoader( new THREE.LoadingManager()).setDecoderPath( `${THREE_PATH}/examples/jsm/libs/draco/gltf/` );
        this.gltfLoader = new GLTFLoader();
        this.gltfLoader.setDRACOLoader(this.dracoLoader);

        this.isPlaying = true;
        this.setupEvents();
        this.setupFBO();
        this.addObjects();
        this.resize();
        this.render();
        this.setupResize();

    }

    setupEvents() {
        this.dummy = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100),
            new THREE.MeshBasicMaterial()
        )
        document.addEventListener('pointermove', (e) => {
            this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.pointer.y = - (e.clientY / window.innerHeight) * 2 + 1;
        
            this.raycaster.setFromCamera(this.pointer, this.camera);
            let intersects = this.raycaster.intersectObject(this.dummy);
            if (intersects.length > 0) {
                let [x,y] = intersects[0].point;
                this.fboMaterial.uniforms.uMouse.value = new THREE.Vector2(x, y);
            }
        
        })
    }

    setUpSettings() {
        this.settings = {
            progress: 0,
        };
        this.gui = new GUI();
        this.gui.add(this.settings, 'progress', 0, 1, 0.01).onChange((val) => { });
    }

    setupResize() {
        window.addEventListener('resize', this.resize.bind(this));
    }

    getRenderTarget() {
        const renderTarget = new THREE.WebGLRenderTarget(this.width, this.height, {
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBAFormat,
            type: THREE.FloatType,
        });
        return renderTarget;
    }



    setupFBO() {
        this.size = 128;
        this.fbo = this.getRenderTarget();
        this.fbo1 = this.getRenderTarget();

        this.fboScene = new THREE.Scene();
        this.fboCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
        this.fboCamera.position.set (0,0,0.5);
        this.fboCamera.lookAt(0, 0, 0);
        let geometry = new THREE.PlaneGeometry(2, 2);

        this.data = new Float32Array(this.size * this.size * 4); 

        for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
            let index = (i + j * this.size) * 4;
            let theta = Math.random() * Math.PI * 2;
            let r = 0.5 + 0.5*Math.random();
            this.data[index + 0] = r*Math.cos(theta); // r
            this.data[index + 1] = r*Math.sin(theta); // g
            this.data[index + 2] = 1.; // b
            this.data[index + 3] = 1.; // a
            }
        }

        this.fboTexture = new THREE.DataTexture(this.data, this.size, this.size, THREE.RGBAFormat, THREE.FloatType);
        this.fboTexture.magFilter = THREE.NearestFilter;
        this.fboTexture.minFilter = THREE.NearestFilter;
        this.fboTexture.needsUpdate = true;


        this.fboMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uPositions: { value: this.fboTexture },
                uInfo: { value: null },
                uMouse: { value: new THREE.Vector2(0, 0) },
                time: { value: 0 },
            },
            vertexShader: simVertex,
            fragmentShader: simFragment,
        })


        this.infoarray = new Float32Array(this.size * this.size * 4); 

        for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
            let index = (i + j * this.size) * 4;
            this.infoarray[index + 0] = 0.5 + Math.random(); // r
            this.infoarray[index + 1] = 0.5 + Math.random(); // g
            this.infoarray[index + 2] = 1.; // b
            this.infoarray[index + 3] = 1.; // a
            }
        }


        // for (let i = 0; i < this.size; i++) {
        //     for (let j = 0; j < this.size; j++) {
        //         let index = (i + j * this.size) * 4;
        //         this.infoarray[index + 0] = 0.5 + Math.random(); // r
        //         const half = (this.size * this.size) / 2;
        //         this.infoarray[index + 1] = (index / 4 < half) ? 1.0 : -1.0; // info.y = dirección de rotación
            
        //         this.infoarray[index + 2] = 1.0; // b
        //         this.infoarray[index + 3] = 1.0; // a
        //         }
        //     }

        this.info = new THREE.DataTexture(this.infoarray, this.size, this.size, THREE.RGBAFormat, THREE.FloatType);
        this.info.magFilter = THREE.NearestFilter;
        this.info.minFilter = THREE.NearestFilter;
        this.info.needsUpdate = true;
        this.fboMaterial.uniforms.uInfo.value = this.info;


        this.fboMesh = new THREE.Mesh(geometry, this.fboMaterial);
        this.fboScene.add(this.fboMesh);

        this.renderer.setRenderTarget(this.fbo);
        this.renderer.render(this.fboScene, this.fboCamera);
        this.renderer.setRenderTarget(this.fbo1);
        this.renderer.render(this.fboScene, this.fboCamera);
    }

    resize() {
        // this.width = window.innerWidth;
        // this.height = window.innerHeight;
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        // this.width = 600;
        // this.height = 600;
        this.renderer.setSize(this.width, this.height);
    
        let aspect = this.width / this.height;
        let frustumSize = 6; // usa el mismo valor que antes
    
        this.camera.left = -frustumSize * aspect / 2;
        this.camera.right = frustumSize * aspect / 2;
        this.camera.top = frustumSize / 2;
        this.camera.bottom = -frustumSize / 2;

        // if (aspect >= 1) {
        //     // Pantalla ancha → fijamos alto y escalamos ancho
        //     this.camera.left = -frustumSize * aspect / 2;
        //     this.camera.right = frustumSize * aspect / 2;
        //     this.camera.top = frustumSize / 2;
        //     this.camera.bottom = -frustumSize / 2;
        //   } else {
        //     // Pantalla alta → fijamos ancho y escalamos alto
        //     this.camera.left = -frustumSize / 2;
        //     this.camera.right = frustumSize / 2;
        //     this.camera.top = frustumSize / aspect / 2;
        //     this.camera.bottom = -frustumSize / aspect / 2;
        //   }

        this.camera.updateProjectionMatrix();
    }

    // resize() {
    //     this.width = this.container.offsetWidth;
    //     this.height = this.container.offsetHeight;
    //     this.renderer.setSize(this.width, this.height);
    //     this.camera.aspect = this.width / this.height;
    //     this.camera.updateProjectionMatrix();
    // }

    addObjects() {    
        this.material = new THREE.ShaderMaterial({
            extensions: {
                derivatives: "#extension GL_OES_standard_derivatives : enable"
            },
            side: THREE.DoubleSide,
            uniforms: {
                time: { value: 0 },
                uPositions: { value: null },
                resolution: { value: new THREE.Vector4() },
            },
            transparent: true,
            vertexShader: vertex,
            fragmentShader: fragment
        });

        this.count = this.size**2;
        let geometry = new THREE.BufferGeometry();
        let positions = new Float32Array(this.count * 3);
        let uv = new Float32Array(this.count * 2);
        for (let i=0; i < this.size; i++) {
        for (let j=0; j < this.size; j++) {
            let index = (i + j * this.size);
            positions[index * 3 + 0] = Math.random()
            positions[index * 3 + 1] = Math.random()
            positions[index * 3 + 2] = 0
            uv[index * 2 + 0] = i / this.size;
            uv[index * 2 + 1] = j / this.size;
        }}

        

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    
        // this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
        this.material.uniforms.uPositions.value = this.fboTexture;
        this.points = new THREE.Points(geometry, this.material);
        this.scene.add(this.points);
    }

    // addLights() {
    //     const light1 = new THREE.AmbientLight(0xffffff, 0.5);
    //     this.scene.add(light1);

    //     const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
    //     light2.position.set(0.5, 0, 0.866);
    //     this.scene.add(light2);
    // }

    // stop() {
    //     this.isPlaying = false;
    // }

    // play() {
    //     if (!this.isPlaying) {
    //         this.isPlaying = true;
    //         this.render();
    //     }
    // }

    render() {
        if (!this.isPlaying) return;
        this.time += 0.05;
        this.material.uniforms.time.value = this.time;
        this.fboMaterial.uniforms.time.value = this.time;
        requestAnimationFrame(this.render.bind(this));

        this.fboMaterial.uniforms.uPositions.value = this.fbo1.texture;
        this.material.uniforms.uPositions.value = this.fbo.texture;

        this.renderer.setRenderTarget(this.fbo);
        this.renderer.render(this.fboScene, this.fboCamera);
        this.renderer.setRenderTarget(null);
        this.renderer.render(this.scene, this.camera);

        // this.renderer.setRenderTarget(null);
        // this.renderer.render(this.fboScene, this.fboCamera);

        // swap render targets
        let temp = this.fbo;
        this.fbo = this.fbo1;
        this.fbo1 = temp;

      }

}

new Sketch({
    dom: document.getElementById("container")
});


// import * as THREE from 'three';
// import { REVISION } from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
// import fragment from './shader/fragment.glsl';
// import vertex from './shader/vertexParticles.glsl';

// import simFragment from './shader/simFragment.glsl';
// import simVertex from './shader/simVertex.glsl';

// import GUI from 'lil-gui';
// import gsap from 'gsap';

// export default class Sketch {
//     constructor(options) {
//         this.scene = new THREE.Scene();

//         this.container = options.dom;
//         this.width = this.container.offsetWidth;
//         this.height = this.container.offsetHeight;
//         this.renderer = new THREE.WebGLRenderer({ antialias: true });
//         this.renderer.setSize(this.width, this.height);
//         this.renderer.setClearColor(0x000000, 1);

//         this.raycaster = new THREE.Raycaster();
//         this.pointer = new THREE.Vector2();

//         this.container.appendChild(this.renderer.domElement);

//         let aspect = this.width / this.height;
//         let frustumSize = 6; // ajusta según lo que necesites ver
        
//         this.camera = new THREE.OrthographicCamera(
//             -frustumSize * aspect / 2,
//             frustumSize * aspect / 2,
//             frustumSize / 2,
//             -frustumSize / 2,
//             0.1,
//             1000
//         );
//         this.camera.position.set(0, 0, 4);
//         this.camera.lookAt(0, 0, 0);


//         // this.camera = new THREE.PerspectiveCamera(
//         //     70, 
//         //     this.width / this.height, 
//         //     0.1, 
//         //     1000
//         // );

//         // this.camera.position.set(0, 0, 4);
//         this.controls = new OrbitControls(this.camera, this.renderer.domElement);
//         this.controls.enableRotate = false; // 🔒 evita rotar con el mouse
//         this.controls.enablePan = false;    // 🔒 evita arrastrar con el mouse
//         this.controls.enableZoom = true;   // 🔒 evita zoom con la rueda

//         this.time = 0;

//         const THREE_PATH = `https://unpkg.com/three@0.${REVISION}.x`
//         this.dracoLoader = new DRACOLoader( new THREE.LoadingManager()).setDecoderPath( `${THREE_PATH}/examples/jsm/libs/draco/gltf/` );
//         this.gltfLoader = new GLTFLoader();
//         this.gltfLoader.setDRACOLoader(this.dracoLoader);

//         this.isPlaying = true;
//         this.setupEvents();
//         this.setupFBO();
//         this.addObjects();
//         this.resize();
//         this.render();
//         this.setupResize();

//     }

//     setupEvents() {
//         this.dummy = new THREE.Mesh(
//             new THREE.PlaneGeometry(100, 100),
//             new THREE.MeshBasicMaterial()
//         )
//         document.addEventListener('pointermove', (e) => {
//             this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
//             this.pointer.y = - (e.clientY / window.innerHeight) * 2 + 1;
        
//             this.raycaster.setFromCamera(this.pointer, this.camera);
//             let intersects = this.raycaster.intersectObject(this.dummy);
//             if (intersects.length > 0) {
//                 let [x,y] = intersects[0].point;
//                 this.fboMaterial.uniforms.uMouse.value = new THREE.Vector2(x, y);
//             }
        
//         })
//     }

//     setUpSettings() {
//         this.settings = {
//             progress: 0,
//         };
//         this.gui = new GUI();
//         this.gui.add(this.settings, 'progress', 0, 1, 0.01).onChange((val) => { });
//     }

//     setupResize() {
//         window.addEventListener('resize', this.resize.bind(this));
//     }

//     getRenderTarget() {
//         const renderTarget = new THREE.WebGLRenderTarget(this.width, this.height, {
//             minFilter: THREE.NearestFilter,
//             magFilter: THREE.NearestFilter,
//             format: THREE.RGBAFormat,
//             type: THREE.FloatType,
//         });
//         return renderTarget;
//     }



//     setupFBO() {
//         this.size = 256;
//         this.fbo = this.getRenderTarget();
//         this.fbo1 = this.getRenderTarget();

//         this.fboScene = new THREE.Scene();
//         this.fboCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
//         this.fboCamera.position.set (0,0,0.5);
//         this.fboCamera.lookAt(0, 0, 0);
//         let geometry = new THREE.PlaneGeometry(2, 2);

//         this.data = new Float32Array(this.size * this.size * 4); 

//         for (let i = 0; i < this.size; i++) {
//         for (let j = 0; j < this.size; j++) {
//             let index = (i + j * this.size) * 4;
//             let theta = Math.random() * Math.PI * 2;
//             let r =  0.5 + 0.5*Math.random();
//             this.data[index + 0] = r*Math.cos(theta); // r
//             this.data[index + 1] = r*Math.sin(theta); // g
//             this.data[index + 2] = 1.; // b
//             this.data[index + 3] = 1.; // a
//             }
//         }

//         this.fboTexture = new THREE.DataTexture(this.data, this.size, this.size, THREE.RGBAFormat, THREE.FloatType);
//         this.fboTexture.magFilter = THREE.NearestFilter;
//         this.fboTexture.minFilter = THREE.NearestFilter;
//         this.fboTexture.needsUpdate = true;


//         this.fboMaterial = new THREE.ShaderMaterial({
//             uniforms: {
//                 uPositions: { value: this.fboTexture },
//                 uInfo: { value: null },
//                 uMouse: { value: new THREE.Vector2(0, 0) },
//                 time: { value: 0 },
//             },
//             vertexShader: simVertex,
//             fragmentShader: simFragment,
//         })


//         this.infoarray = new Float32Array(this.size * this.size * 4); 

//         for (let i = 0; i < this.size; i++) {
//         for (let j = 0; j < this.size; j++) {
//             let index = (i + j * this.size) * 4;
//             this.infoarray[index + 0] = 0.5 + Math.random(); // r

//             // ✅ Invertir la dirección para la mitad de las partículas
//             // Aquí dividimos el total en dos grupos con direcciones opuestas
//             const half = (this.size * this.size) / 2;
//             this.infoarray[index + 1] = (index / 4 < half) ? 1.0 : -1.0; // info.y = dirección de rotación
//             this.infoarray[index + 2] = 1.; // b
//             this.infoarray[index + 3] = 1.; // a
//             }
//         }

//         this.info = new THREE.DataTexture(this.infoarray, this.size, this.size, THREE.RGBAFormat, THREE.FloatType);
//         this.info.magFilter = THREE.NearestFilter;
//         this.info.minFilter = THREE.NearestFilter;
//         this.info.needsUpdate = true;
//         this.fboMaterial.uniforms.uInfo.value = this.info;
//         // this.fboMaterial.uniforms.resolution = { value: new THREE.Vector4(window.innerWidth, window.innerHeight, 1.0, 1.0) };

//         this.fboMesh = new THREE.Mesh(geometry, this.fboMaterial);
//         this.fboScene.add(this.fboMesh);

//         this.renderer.setRenderTarget(this.fbo);
//         this.renderer.render(this.fboScene, this.fboCamera);
//         this.renderer.setRenderTarget(this.fbo1);
//         this.renderer.render(this.fboScene, this.fboCamera);
//     }

//     resize() {
//         this.width = this.container.offsetWidth;
//         this.height = this.container.offsetHeight;
//         this.renderer.setSize(this.width, this.height);
    
//         let aspect = this.width / this.height;
//         let frustumSize = 6; // usa el mismo valor que antes
    
//         this.camera.left = -frustumSize * aspect / 2;
//         this.camera.right = frustumSize * aspect / 2;
//         this.camera.top = frustumSize / 2;
//         this.camera.bottom = -frustumSize / 2;
//         this.camera.updateProjectionMatrix();
//     }

//     // resize() {
//     //     this.width = this.container.offsetWidth;
//     //     this.height = this.container.offsetHeight;
//     //     this.renderer.setSize(this.width, this.height);
//     //     this.camera.aspect = this.width / this.height;
//     //     this.camera.updateProjectionMatrix();
//     // }

//     addObjects() {    
//         this.material = new THREE.ShaderMaterial({
//             extensions: {
//                 derivatives: "#extension GL_OES_standard_derivatives : enable"
//             },
//             side: THREE.DoubleSide,
//             uniforms: {
//                 time: { value: 0 },
//                 uPositions: { value: null },
//                 resolution: { value: new THREE.Vector4() },
//             },
//             transparent: true,
//             vertexShader: vertex,
//             fragmentShader: fragment
//         });

//         this.count = this.size**2;
//         let geometry = new THREE.BufferGeometry();
//         let positions = new Float32Array(this.count * 3);
//         let uv = new Float32Array(this.count * 2);
//         for (let i=0; i < this.size; i++) {
//         for (let j=0; j < this.size; j++) {
//             let index = (i + j * this.size);
//             positions[index * 3 + 0] = Math.random()
//             positions[index * 3 + 1] = Math.random()
//             positions[index * 3 + 2] = 0
//             uv[index * 2 + 0] = i / this.size;
//             uv[index * 2 + 1] = j / this.size;
//         }}

//         geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//         geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    
//         // this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
//         this.material.uniforms.uPositions.value = this.fboTexture;
//         this.points = new THREE.Points(geometry, this.material);
//         this.scene.add(this.points);
//     }

//     // addLights() {
//     //     const light1 = new THREE.AmbientLight(0xffffff, 0.5);
//     //     this.scene.add(light1);

//     //     const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
//     //     light2.position.set(0.5, 0, 0.866);
//     //     this.scene.add(light2);
//     // }

//     // stop() {
//     //     this.isPlaying = false;
//     // }

//     // play() {
//     //     if (!this.isPlaying) {
//     //         this.isPlaying = true;
//     //         this.render();
//     //     }
//     // }

//     render() {
//         if (!this.isPlaying) return;
//         this.time += 0.05;
//         this.material.uniforms.time.value = this.time;
//         this.fboMaterial.uniforms.time.value = this.time;
//         requestAnimationFrame(this.render.bind(this));

//         this.fboMaterial.uniforms.uPositions.value = this.fbo1.texture;
//         this.material.uniforms.uPositions.value = this.fbo.texture;

//         this.renderer.setRenderTarget(this.fbo);
//         this.renderer.render(this.fboScene, this.fboCamera);
//         this.renderer.setRenderTarget(null);
//         this.renderer.render(this.scene, this.camera);

//         // this.renderer.setRenderTarget(null);
//         // this.renderer.render(this.fboScene, this.fboCamera);

//         // swap render targets
//         let temp = this.fbo;
//         this.fbo = this.fbo1;
//         this.fbo1 = temp;

//       }

// }

// new Sketch({
//     dom: document.getElementById("container")
// });









// // const width = window.innerWidth, height = window.innerHeight;

// // // init

// // const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
// // camera.position.z = 1;

// // const scene = new THREE.Scene();

// // const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
// // const material = new THREE.MeshNormalMaterial();

// // const mesh = new THREE.Mesh( geometry, material );
// // scene.add( mesh );

// // const renderer = new THREE.WebGLRenderer( { antialias: true } );
// // renderer.setSize( width, height );
// // renderer.setAnimationLoop( animate );
// // document.body.appendChild( renderer.domElement );

// // // animation

// // function animate( time ) {

// // 	mesh.rotation.x = time / 2000;
// // 	mesh.rotation.y = time / 1000;

// // 	renderer.render( scene, camera );

// // }