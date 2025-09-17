import React from 'react';
import './skills.css';
import WebDevelopment from '../../assets/web development.jpg';
import Database from '../../assets/database icon.jpg';
import Github from '../../assets/github.jpg';

const Skills = () => {
  return (
    <section id='skills'>
     <span className='skillTitle'>What I do</span>
     <span className='skillDesc'>nthusiastic developer skilled in HTML, CSS, JavaScript, React, C#, ASP.NET, PL/SQL, and Java.
Committed to building efficient, scalable, and user-friendly web and software solutions.</span>
<div className='skillBars'>
  <div className='skillBar'>
 <img src={WebDevelopment} alt='web development' className='skillBarImg'/>
    <div className='skillBarText'>
      <h2> Web Development</h2>
      <p>Creating responsive, functional websites using HTML, CSS, and JavaScript.</p>
    </div>
  </div>
  <div className='skillBar'>
     <img src={Database} alt='Database' className='skillBarImg'/>
    <div className='skillBarText'>
      <h2>Database Handling</h2>
      <p>Skilled in implementing and managing databases with MySQL, including performing CRUD operations, optimizing queries, and ensuring data integrity for reliable application performance.</p>
    </div>
  </div>
  <div className='skillBar'>
     <img src={Github} alt='GitHub' className='skillBarImg'/>
    <div className='skillBarText'>
      <h2>Version Control (Git) </h2>
      <p>Experienced in using Git for efficient project collaboration, version tracking, and maintaining clean, organized repositories to streamline development workflows.</p>
    </div>
  </div>
</div>
    </section>
  )
}

export default Skills;