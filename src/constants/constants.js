import ideaImg from '/images/ideas.svg'
import designsImg from '/images/designs.svg'
import codeImg from '/images/code.svg'

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
    { text: 'Creatividad', imgPath: designsImg },
    { text: 'Análisis', imgPath: codeImg },
    { text: 'Ideas', imgPath: '/images/ideas.svg' },
    { text: 'Creatividad', imgPath: "/images/ideas.svg" },
    { text: 'Análisis', imgPath: '/images/ideas.svg' },
    { text: 'Ideas', imgPath: '/images/ideas.svg' },
    { text: 'Creatividad', imgPath: "/images/ideas.svg" },
]

export {
    navLinks,
    words,
  };