import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
  <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Pavitra</span> <br/>Apprentice Trainee</span>
        <p className='introPara'>Computer Science graduate (2024) with strong programming skills, project experience,<br/> and a passion for building efficient,real-world software solutions.</p>
        <Link><button className='btn'><img src={btnImg} alt='Hire me' className='btnImg' />Hire Me</button></Link>
      </div>
      <img src={bg} alt='' className='bg' />
  </section>
  )
}

export default Intro;