import React from 'react'; // Usamos useRef y useEffect
// componenets - sections
import NavBar from './components/NavBar.jsx';
import Hero from './components/sections/Hero.jsx';

import Myself from './components/sections/Myself.jsx';
import Contact from './components/sections/Contact.jsx';
import Projects from './components/sections/Projects.jsx';
import Skills from './components/sections/Skills.jsx';

function App() {
 
  return (
    <>
            <NavBar />

              <section id="hero">
                
                <Hero />
              </section>
              <section id="myself">
                <Myself />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="contact">
                <Contact />
              </section>
    </>
  )
}

export default App
