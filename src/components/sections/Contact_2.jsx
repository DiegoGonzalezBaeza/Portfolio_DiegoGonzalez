import React, { useState, useEffect, useRef } from "react";
import { words } from "../../constants/constants.js";
import Sketch from '../../js/app.js';

const Contact = () => { 
    const containerRef = useRef(null);
        
      // Usamos useRef para tener una referencia al contenedor de la animación
    
    
      // Inicializamos la animación cuando el componente se haya montado
      useEffect(() => {
        // Solo corre cuando el contenedor ya está montado en el DOM
        if (containerRef.current) {
          console.log('Iniciando Sketch...');
          new Sketch({ dom: containerRef.current });
    
         }
      }, []);
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">

                      {/* Este div es donde se cargará la animación */}
                        <div 
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
                        ></div>

            </div>

            <div className="hero-layout">
                {/* {LEFT: HERO CONTENT} */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>Shaping 
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span key={word.text} className="flex items-center md:gap-3 gap-1 pb2">
                                                <img 
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p2 p-1 rounded-full bg-white-50">
                                                </img>
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>

                    </div>
                </header>
                {/* {RIGHT: 3D MODEL} */}



            </div>

        </section>
    )
    
}

export default Contact;