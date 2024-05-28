//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero.js';
import Nav from './components/Nav';

import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Extra from './components/Extra';
import Links from './components/Links';
import React, { useState, useEffect } from 'react';
import './App.css';




function App() {

  const [selection, setSelection] = useState('#hero');
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight;

      sections.forEach((section) => {
        if (
          scrollPosition > section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          //setSelection(section.id);
        const zoomFactor = Math.max(90, 90 + (scrollPosition - section.offsetTop) * 0.01);

        const parallaxImages = document.querySelectorAll(`.${section.id}-bg`);
        parallaxImages.forEach((image) => {
          image.style.backgroundSize = `${zoomFactor}%`;
        });
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="App">
      <Nav sel = {setSelection} />
      {console.log(selection)}
      <Hero />
      <div className={`parallax about-bg`}></div>
      <About/>
      <div className={`parallax education-bg`}></div>
      <Education/>
      <Experience/>
      <div className={`parallax experience-bg`}></div>
      <Extra/>
      <div className={`parallax extra-bg`}></div>
      <Links/>
    </div>
  );
}

export default App;

