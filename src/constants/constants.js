import ideaImg from '/images/ideas.svg'
import designsImg from '/images/designs.svg'
import codeImg from '/images/code.svg'
import conceptsImg from '/images/concepts.svg'

const navLinks = [
    {
      name: "Perfil",
      link: "#myself",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Contacto",
      link: "#contact",
    },
  ];

const words = [
    { text: 'Ideas', imgPath: ideaImg },
    { text: 'Análisis', imgPath: designsImg },
    { text: 'Ingenio', imgPath: conceptsImg },
    { text: 'Diseño', imgPath: codeImg }
]

export {
    navLinks,
    words,
  };