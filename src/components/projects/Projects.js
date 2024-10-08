import React from 'react'
import './Projects.css';
import Works from './Works';

const Projects = () => {
  return (
    <section className='work section' id='portfolio'>
        <h2 className='section__title'>Projects</h2>
        <span className='section__subtitle'>Things I've built!</span>
        <Works />
    </section>
  )
}

export default Projects;