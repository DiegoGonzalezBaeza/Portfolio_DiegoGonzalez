import Certf_Ing from '/images/certificate/Certificado de Titulo y Grado Diego González.pdf'
import Diplomado_Fin from '/images/certificate/Certificado de Notas Diplomado de Finanzas (1).pdf'
import Diplomado_Data1 from '/images/certificate/Diplomado_Analisis_de_Datos.pdf'
import Diplomado_Data2 from '/images/certificate/Diplomado_Ciencia_de_Datos.pdf'
import Diplomadp_FullStackPython from '/images/certificate/DIPLOMA_BOOTCAMP_Python.pdf'
// showCertificates.js

document.addEventListener("DOMContentLoaded", function() {
    const educationData = [
      {
        title: "Ingeniero Civil Industrial",
        image: Certf_Ing,
        modalID: "IngModal"
      },
      {
        title: "Diplomado de Finanzas",
        image: Diplomado_Fin,
        modalID: "FinanceModal"
      },
      {
        title: "Diplomado en Análisis de Datos",
        image: Diplomado_Data1,
        modalID: "DataAnalysisModal"
      },
      {
        title: "Diplomado en Ciencia de Datos",
        image: Diplomado_Data2,
        modalID: "DataScienceModal"
      },
      {
        title: "Bootcamp Full Stack Developer Python",
        image: Diplomadp_FullStackPython,
        modalID: "FullStackPythonModal"
      },
    ];
  
    // Obtén el elemento de la línea de tiempo
    const educationTimeline = document.getElementById("education-timeline");
  
    if (educationTimeline) {
      // Función para crear un punto interactivo sin el año
      function createInteractivePoint(education) {
        const interactivePoint = document.createElement("div");
        interactivePoint.className = "timeline-point";
        interactivePoint.innerHTML = `
          <div class="point-content">
            <img src="${education.image}" alt="${education.title}" class="certificate-image">
          </div>
          <div class="point-title">${education.title}</div>
        `;
  
        // Agregar evento de hover para mostrar la imagen y la línea vertical
        interactivePoint.addEventListener("mouseover", () => {
          interactivePoint.classList.add("active");
        });
  
        interactivePoint.addEventListener("mouseout", () => {
          interactivePoint.classList.remove("active");
        });
  
        interactivePoint.addEventListener("click", () => {
          const modal = document.getElementById(education.modalID);
          if (modal) {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
          }
        });
  
        return interactivePoint;
      }
  
      // Genera y agrega los puntos interactivos a la línea de tiempo
      educationData.forEach((education) => {
        educationTimeline.appendChild(createInteractivePoint(education));
      });
    } else {
      console.error("Element with ID 'education-timeline' not found.");
    }
  
    // Cerrar el modal
    const modals = document.querySelectorAll(".modal-education");
    modals.forEach(modal => {
      const closeButton = modal.querySelector(".close-education");
      if (closeButton) {
        closeButton.addEventListener("click", () => {
          modal.style.display = "none";
          document.body.style.overflow = "auto";
        });
      }
    });
  
    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.addEventListener("click", (event) => {
      modals.forEach(modal => {
        if (event.target == modal) {
          modal.style.display = "none";
          document.body.style.overflow = "auto";
        }
      });
    });
  });