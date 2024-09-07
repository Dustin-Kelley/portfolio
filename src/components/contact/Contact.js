
import './Contact.css';

const Contact = () => {
  
  return (
    <section className='contact section' id='contact'>
        <h2 className='section__title'>Get in touch</h2>
        <span className='section__subtitle'>Contact Me</span>
    
    <div className='contact__container container grid'>
        <div className='contact__content'>
            <h3 className='contact__title'>Chat with me</h3>

            <div className='contact__info'>
                <div className='contact__card'>
                    <i className='bx bx-mail-send contact__card-icon'></i>

                    <h3 className='contact__card-title'>Email</h3>
                    <span className='contact__card-data'>kelleydustin2018@gmail.com</span>

                    <a href='mailto:kelleydustin2018@gmail.com' className='contact__button'>Email me{' '}
                        <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                    </a>
                </div>

                <div className='contact__card'>
                    <i className='bx bx-phone contact__card-icon'></i>

                    <h3 className='contact__card-title'>Phone</h3>
                    <span className='contact__card-data'>620.805.2290</span>

                    <a href='tel:6208052290' className='contact__button'>Give me a{' '}
                        <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                    </a>
                </div>

             
            </div>
        </div>

        
    </div>
    </section>
  )
}

export default Contact;