import React, { useState, useEffect, useRef } from 'react'; // Usamos useRef y useEffect
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import Sketch from './js/app.js'; // Importamos el archivo de la animación  

// componenets - sections
import NavBar from './components/NavBar.jsx';
import Hero from './components/sections/Hero.jsx';
import Contact_2 from './components/sections/Contact_2.jsx';
import Myself from './components/sections/Myself.jsx';
import Contact from './components/sections/Contact.jsx';

function App() {
  // const containerRef = useRef(null);
   const [count, setCount] = useState(0)

  // // Usamos useRef para tener una referencia al contenedor de la animación


  // // Inicializamos la animación cuando el componente se haya montado
  // useEffect(() => {
  //   // Solo corre cuando el contenedor ya está montado en el DOM
  //   if (containerRef.current) {
  //     console.log('Iniciando Sketch...');
  //     new Sketch({ dom: containerRef.current });

  //    }
  // }, []);

  return (
    <>
      {/* Este div es donde se cargará la animación */}
      {/* <div 
        ref={containerRef}
        className="background-animation" 
        style={{
          // width: '100vw',
          // height: '100vh',
          // position: 'absolute',
          // top: '0',
          // left: '0',
          // // background: '#111', // temporal para verificar
          // overflow: 'hidden',
          // zIndex: -1,


          // width: '100vw',
          // height: '100vh',
          // position: 'absolute',
          // top: 0,
          // left: 0,
          // zIndex: -1, // Pone la animación en el fondo
          // overflow: 'hidden',
        }}
      ></div> */}


              <NavBar />
              <section id="#hero">
                
                <Hero />
              </section>
              <section id="myself">
                <Myself />
              </section>
              <section id="#contact_2">
                <Contact_2 />
              </section>
              <section id="contact">
                <Contact />
              </section>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl underline">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
