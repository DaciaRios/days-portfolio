import React from 'react'
import '../styles/comp.css'
import resume from '../Dacia_Rios_Resume.pdf'
//import '../styles/about.css'

const About = () => {
  return (
    <section id ="about">
    <div className='section-header'>About</div>
    <hr/>
    <div className='about-cont'>
        <p>
          Hello! My name is Dacia Monet Rios, and I'm passionate about Computer Science particularly a focus on Machine Learning and AI. I have a background in CS100 - Software Construction, CS170 - Artificial Intelligence, and CS173 - Natural Language Processing, and I'm currently pursuing Bachelors of Science in Computer Science. 
        </p>
        <p>
        In my free time, I enjoy playing video games and hanging out with friends.
         I also have a hobby in art and maintain a small personal art account where I showcase my work.
          Currently, I am keen on expanding my knowledge of Python and Rust, 
          as I believe they are relevant to my coursework and will be beneficial for my future career.
           My long-term career goal is to pursue a career as a consultant, specializing in technological solutions.
        </p>
        <p>
          Feel free to check out my resume <a href={resume} target="_blank" rel="noopener noreferrer">here</a>.
        </p>
      </div>
    </section>
  )
}

export default About