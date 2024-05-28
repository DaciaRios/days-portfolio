import React from 'react'
import '../styles/comp.css'
//import '../styles/edu.css'

const Education = () => {
  return (
    <section id="education">
    <div className='section-header'>Education</div>
    <hr/>
    <div className='edu-cont'>
    <ul>
      <li>
      <p><h3>California State University San Marcos</h3>  Aug 2019– May 2022</p>
      </li>
    </ul>
    <ul>
      <li>
      <p><h3>University of California, Riverside </h3>Sept 2022 – June 2024 </p>
    </li>
    </ul>
    </div>
    <hr/>
    <div className='section-header'>Skills</div>
    <hr/>
    <div className='skill-cont'>
    <ul>
        <h3 className=' skill-cont section-header'>Programming Languages</h3>
        <hr/>
        <ul>
            <li>C++</li>
            <li>Python</li>
            <li>SQL</li>
        </ul>
    </ul>
    <ul>
        <h3 className=' skill-cont section-header'>Tool/Technologies</h3>
        <hr/>
        <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>VSCode</li>
        </ul>
        </ul>
    </div>

    </section>
  )
}

export default Education