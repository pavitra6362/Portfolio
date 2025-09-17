import React, { useRef } from 'react';
import './contact.css';
import Hal from '../../assets/HAL logo.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_x18mt6e', 'template_qjfy2b9', form.current, {
        publicKey: 'tEqkl-DDSiPyar8t-bObM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
   <section id='contactPage'>
    <div id='clients'>
        <h1 className='contactPageTitle'>Experience</h1>
        <p className='clientDesc'>"I had the opportunity to work with Hindustan Aeronautics Limited, Bangalore, as a Full Stack Web Development Apprenticeship Trainee."</p>
        <div className='clientImgs'>
            <img src={Hal} alt="HAL" className='clientImg'/>
        </div>
    </div>
    <div id='contact'>
      <h1 className='contactPageTitle'>Contact Me</h1>
      <span contactDesc>"Please fill out the form if you’d like me to get in touch with you."</span>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' className='name' placeholder='Your Name' name='name'/>
        <input type="email" className='email' placeholder='Your Email' name='email'/>
        <textarea className='msg' name="message" rows='5' placeholder='Your Message'></textarea>
        <button type='submit' value='send' className='submitBtn'>Submit</button>
        <div className='links'>
          <img src={FacebookIcon} alt="FacebookIcon" className='link'/>
          <img src={TwitterIcon} alt="TwitterIcon" className='link'/>
          <img src={YouTubeIcon} alt="YouTubeIcon" className='link'/>
          <img src={InstagramIcon} alt="InstagramIcon" className='link'/>
        </div>
      </form>
    </div>
   </section>
  )
}

export default Contact;