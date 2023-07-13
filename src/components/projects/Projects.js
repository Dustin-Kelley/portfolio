import React from 'react'
import './Projects.css';
import Works from './Works';

const Projects = () => {
  return (
    <section className='work section' id='portfolio'>
        <h2 className='section__title'>Portfolio</h2>
        <span className='section__subtitle'>Most recent projects</span>

        <Works />
    </section>
  )
}

export default Projects;