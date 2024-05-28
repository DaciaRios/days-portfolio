import React from 'react'
import '../styles/comp.css'
import me from '../imgs/me.jpg';



const Hero = () => {
 
  return (
  <section id="hero">
    <div className="name">Dacia Monet Rios</div>
      <div class="portal-cont">
        <div className='frame'>
        <img src={me} alt="Rotating"/>
        </div>
      </div>
    <hr/>
    <p>I am pursuing a bachelor’s degree in Computer Science and have collaborated on a variety of projects that use programming languages such as Python, C++, and a bit of JavaScript. 
          I hope to be able to use the experience I have gained to increase my work efficiency for future internships and jobs.</p>
  </section>
  );
};

export default Hero

