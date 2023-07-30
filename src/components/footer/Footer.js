import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Dustin</h1>

            <ul className='footer__list'>
                <li>
                    <a href='#about'
                    className='footer__link'>About</a>
                </li>

                <li>
                    <a href='#portfolio'
                    className='footer__link'>Projects</a>
                </li>

                <li>
                    <a href='#'
                    className='footer__link'>Skills</a>
                </li>
            </ul>

            <div className='footer__social'>
                <a href='https://github.com/DustinKelley?tab=repositories'  rel="noreferrer" className='home__social-icon' target='_blank'>
                    <i className='uil uil-github-alt'></i>
                </a>

                <a href='https://www.linkedin.com/in/dustincalebkelley/'  rel="noreferrer" className='home__social-icon' target='_blank'>
                    <i class="uil uil-linkedin-alt"></i>
                </a>
            </div>

            <span className='footer__copy'>&#169; Dustin Kelley. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer;