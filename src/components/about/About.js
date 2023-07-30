import React from 'react'
import './About.css'
import AboutImg from '../../assets/assets/Headshot.jpg';
import Info from './Info';

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section__title'>About Me</h2>
        <span className='section__subtitle'>Introduction</span>

        <div className='about__container container grid'>
            <img src={AboutImg} alt='' className='about__img' />

            <div className='about__data'>
                <Info />

                <p className='about__description'>My name is Dustin Kelley, I am a front end web developer based out of the Oklahoma City area. I use modern frameworks to build anything from single web page applications to full <br></br>E-commerce websites.  </p>

            </div>
        </div>
    </section>
  )
}

export default About;