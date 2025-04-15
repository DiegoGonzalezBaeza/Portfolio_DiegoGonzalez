import React, { useState, useEffect, useRef } from "react";
import { words } from "../../constants/constants.js";
import mePhoto from '/images/Perfil_DiegoIA.webp'

const Myself = () => { 
    return (

            <div className="flex items-center justify-center gap-8 h-screen px-6">
                {/* {LEFT: HERO CONTENT} */}

                <img src={mePhoto} className="w-[45%] max-w-[450px] object-cover"/>
                
                {/* {RIGHT: 3D MODEL} */}
                  {/* Descripción */}
                    <div className="text-center md:text-left w-full md:w-1/2 max-w-xl">
                        <h2 className="text-4xl font-bold mb-4 text-white">Hola, soy Diego González</h2>
                        <p className="text-xl text-white leading-relaxed">
                        Soy un apasionado del desarrollo web con experiencia en React, Three.js y diseño interactivo.
                        Me gusta crear experiencias digitales envolventes que mezclan arte y tecnología.
                        </p>
                    </div>
            </div>

    )
    
}

export default Myself;