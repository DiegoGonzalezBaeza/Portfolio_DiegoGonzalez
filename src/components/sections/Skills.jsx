import React, { useState } from 'react';

import { educationData } from '../../constants/constants.js'

const Skills = () => {
    return (
        <section className="max-w-7xl mx-auto relative z-0">
          <section id="skills" className="relative padding-x pt-20">
            <div className="hero-text">
              <h2>Aprendizaje</h2>
            </div>
    
            <div className="timeline" id="education-timeline">
              {educationData.map((edu, index) => (
                <a
                  key={index}
                  href={edu.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline-point"
                  onMouseOver={(e) => e.currentTarget.classList.add('active')}
                  onMouseOut={(e) => e.currentTarget.classList.remove('active')}
                >
                  <div className="point-content">
                    <img src={edu.image} alt={edu.title} className="certificate-image" />
                  </div>
                  <div className="point-title">{edu.title}</div>
                </a>
              ))}
            </div>
          </section>
        </section>
      );
    };
    
    export default Skills;


// import React, { useState } from 'react';
// // import Certf_Ing from '/images/certificate/Certificado de Titulo y Grado Diego González.pdf';
// // import Certf_Ing from '/images/certificate/Certificado de Notas Diplomado de Finanzas (1).pdf';
// import Certf_Ing from '/images/certificates/DIPLOMA_BOOTCAMP_Python.png';
// // import Diplomado_Data2 from '/images/certificate/Diplomado_Ciencia_de_Datos.pdf';
// // import Diplomadp_FullStackPython from '/images/certificate/DIPLOMA_BOOTCAMP_Python.pdf';

// const Skills = () => {
//   const [activeModal, setActiveModal] = useState(null);

//   const educationData = [
//     {
//       title: "Ingeniero Civil Industrial",
//       file: Certf_Ing,
//       modalID: "IngModal"
//     },
//     {
//       title: "Diplomado de Finanzas",
//       file: Diplomado_Fin,
//       modalID: "FinanceModal"
//     },
//     {
//       title: "Diplomado en Análisis de Datos",
//       file: Diplomado_Data1,
//       modalID: "DataAnalysisModal"
//     },
//     {
//       title: "Diplomado en Ciencia de Datos",
//       file: Diplomado_Data2,
//       modalID: "DataScienceModal"
//     },
//     {
//       title: "Bootcamp Full Stack Developer Python",
//       file: Diplomadp_FullStackPython,
//       modalID: "FullStackPythonModal"
//     }
//   ];

//   const openModal = (modalID) => setActiveModal(modalID);
//   const closeModal = () => setActiveModal(null);

//   return (
//     <section className="max-w-7xl mx-auto relative z-0">
//       <section id="skills" className="relative overflow-hidden padding-x">
//         <div className="hero-text" style={{ marginTop: '80px' }}>
//           <h2>Aprendizaje</h2>
//         </div>

//         <div className="timeline" id="education-timeline">
//           {educationData.map((education) => (
//             <div 
//               key={education.modalID} 
//               className="timeline-point"
//               onClick={() => openModal(education.modalID)}
//               onMouseEnter={() => {}}
//               onMouseLeave={() => {}}
//             >
//               <div className="point-content">
//                 {/* PDFs cannot be rendered in <img>, use a PDF icon instead */}
//                 <span className="pdf-icon">📄</span>
//               </div>
//               <div className="point-title">{education.title}</div>
//             </div>
//           ))}
//         </div>

//         {/* Modal for PDF Display */}
//         {activeModal && (
//           <div className="modal-education" onClick={closeModal}>
//             <div className="modal-education-content" onClick={(e) => e.stopPropagation()}>
//               <span className="close-education" onClick={closeModal}>&times;</span>
//               <iframe 
//                 src={educationData.find(edu => edu.modalID === activeModal).file} 
//                 title="PDF Viewer" 
//                 width="100%" 
//                 height="600px"
//               />
//             </div>
//           </div>
//         )}
//       </section>
//     </section>
//   );
// };

// export default Skills;