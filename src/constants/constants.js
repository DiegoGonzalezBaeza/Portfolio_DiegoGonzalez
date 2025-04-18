import ideaImg from '/images/ideas.svg'
import designsImg from '/images/designs.svg'
import codeImg from '/images/code.svg'
import conceptsImg from '/images/concepts.svg'
import backendImg from '/images/backend.webp'
import chatImg from '/images/chatweb.webp'

import Certf_Ing from '/images/certificates/Certificado_de_Titulo_y_Grado_Diego_González.png'
import Diplomado_Fin from '/images/certificates/Certificado de Notas Diplomado de Finanzas.png'
import Diplomado_Data1 from '/images/certificates/Diplomado_Analisis_de_Datos.png'
import Diplomado_Data2 from '/images/certificates/Diplomado_Ciencia_de_Datos.png'
import Diplomadp_FullStackPython from '/images/certificates/DIPLOMA_BOOTCAMP_Python.png'

const navLinks = [
    {
      name: "Perfil",
      link: "#myself",
    },
    {
      name: "Proyectos",
      link: "#projects",
    },
    {
      name: "Aprendizaje",
      link: "#skills",
    }
  ];

const words = [
    { text: 'Ideas', imgPath: ideaImg },
    { text: 'Análisis', imgPath: designsImg },
    { text: 'Ingenio', imgPath: conceptsImg },
    { text: 'Diseño', imgPath: codeImg }
]

const projects = [
  {
    name: "Backend REST API",
    description:
      "API RESTful de Review y Rating de peliculas (IMDb y Rotten Tomatoes), que proporciona endpoints para autenticación de usuarios, recuperación de datos y operaciones CRUD",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Sequelize",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: backendImg,
    source_code_link: "https://github.com/DiegoGonzalezBaeza/Hito_Node.js_API_Sequelize",
  },
  {
    name: "Chat con Websockets",
    description:
      "Aplicación de chat en tiempo real utilizando WebSockets, permitiendo la comunicación instantánea entre usuarios y grupos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: chatImg,
    source_code_link: "https://github.com/DiegoGonzalezBaeza/Hito6_Websocket_Patrones_Integracion_Empresarial",
  }
]

const educationData = [
      {
        title: "Ingeniero Civil Industrial",
        image: Certf_Ing,
        pdf: '/Portfolio_DiegoGonzalez/images/certificates/Certificado_de_Titulo_y_Grado_Diego_Gonz%C3%A1lez.pdf',
        modalID: "IngModal"
      },
      {
        title: "Diplomado de Finanzas",
        image: Diplomado_Fin,
        pdf: '/Portfolio_DiegoGonzalez/images/certificates/Certificado de Notas Diplomado de Finanzas.pdf',
        modalID: "FinanceModal"
      },
      {
        title: "Diplomado en Análisis de Datos",
        image: Diplomado_Data1,
        pdf: '/Portfolio_DiegoGonzalez/images/certificates/Diplomado_Analisis_de_Datos.pdf',
        modalID: "DataAnalysisModal"
      },
      {
        title: "Diplomado en Ciencia de Datos",
        image: Diplomado_Data2,
        pdf: '/Portfolio_DiegoGonzalez/images/certificates/Diplomado_Ciencia_de_Datos.pdf',
        modalID: "DataScienceModal"
      },
      {
        title: "Bootcamp Full Stack Developer Python",
        image: Diplomadp_FullStackPython,
        pdf: '/Portfolio_DiegoGonzalez/images/certificates/DIPLOMA_BOOTCAMP_Python.pdf',
        modalID: "FullStackPythonModal"
      },
    ];

export {
    navLinks,
    words,
    projects,
    educationData,
  };