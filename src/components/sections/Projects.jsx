import React from 'react';
import Tilt from "react-parallax-tilt";
import { projects } from '../../constants/constants.js';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion.js";
import  StarWrapper  from "../../hoc/SectionWrapper.jsx";
import github from '/images/github-mark-white.svg'

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
  }) => {
    return (
        <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Tilt
          tiltMaxAngleX={25}
          tiltMaxAngleY={25}
          transitionSpeed={450}
          scale={1}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px] group'>
  {/* Contenedor clickeable que cubre toda la imagen */}
  <div 
    onClick={() => window.open(source_code_link, "_blank")}
    className="absolute inset-0 z-10 cursor-pointer"
  ></div>
  
  <img
    src={image}
    alt='project_image'
    className='w-full h-full object-cover rounded-2xl group-hover:opacity-80 transition-opacity'
  />

  {/* Ícono de GitHub (se muestra sobre el overlay) */}
  <div className='absolute inset-0 flex justify-end m-3'>
    <div className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-20'>
      <img
        src={github}
        alt='source code'
        className='w-1/2 h-1/2 object-contain'
      />
    </div>
  </div>
</div>
  
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
  
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
  };

const Projects = () => {
    return (
        <section id="projects" className="relative overflow-hidden padding-x">
            <div className="hero-text" style={{ marginTop: '80px' }}>
                <h2>Proyectos</h2>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
                 ))}
            </div>

        </section>
    )
}

export default StarWrapper(Projects, "projects");