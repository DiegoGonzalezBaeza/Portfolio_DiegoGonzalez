import React, { useState, useEffect, useRef } from "react";
import { words } from "../../constants/constants.js";
import mePhoto from '/images/Perfil_DiegoIA.webp'

const Myself = () => { 
    return (
      <section id="myself" className="relative overflow-hidden padding-x">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 h-screen px-6">
                {/* {LEFT: HERO CONTENT} */}

                <img src={mePhoto} className="w-[45%] max-w-[450px] object-cover "/>
                
                {/* {RIGHT: 3D MODEL} */}
                  {/* Descripción */}
                    <div className="text-center md:text-left w-full md:w-1/2 max-w-5xl">
                        <h2 className="text-5xl font-bold mb-4 text-white">Hola, soy Diego González</h2>
                        <p className="text-2xl text-white leading-relaxed">
                        Ingeniero Civil Industrial apasionado por el desarrollo web (Full Stack: Java, Python, JavaScript/React)
                         y la ciencia de datos, con formación en finanzas y análisis avanzado. 
                         Combino mi creatividad técnica (Three.js, diseño interactivo) y mi enfoque analítico para construir 
                         soluciones donde el arte y la funcionalidad se unen. Disciplinado, autodidacta y siempre en busca de nuevos desafíos que mezclen tecnología, datos e impacto real.
                         </p>
                         <p className="text-2xl text-white leading-relaxed"> 
                         ¡Hablemos de innovación!
                        </p>
                    <div className="flex flex-wrap justify-center gap-4 mx-auto mt-10">
                        <a href="https://www.linkedin.com/in/diegogonzalezb/" 
                            target="_blank" rel="noopener noreferrer"
                           className="contact-btn group inline-flex items-center px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors">
                            <span>LinkedIn</span>
                        </a>

                        <a href="https://github.com/DiegoGonzalezBaeza" 
                            target="_blank" rel="noopener noreferrer"
                           className="contact-btn group inline-flex items-center px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors">
                            <span>GitHub</span>
                        </a>

                        <a href="/Portfolio_DiegoGonzalez/images/CV_Diego_Gonzalez_B (1).pdf" 
                            target="_blank" rel="noopener noreferrer"
                           className="contact-btn group inline-flex items-center px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors">
                            <span>CV</span>
                        </a>



                        </div>
                    </div>
            </div>

            </section>

    )
    
}

export default Myself;