import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import intern from '../imgs/intern.jpg';
import fab from '../imgs/fab.png';

import '../styles/comp.css';
//import '../styles/exp.css'

const Experience = () => {
  const hover1 = (
    <Tooltip id="tooltip">As a RISE (Rising Interns & Student Experiences) intern at Capgemini, individuals typically engage in various activities aimed at providing them with exposure to the professional world and hands-on experience in their field of interest.</Tooltip>
  );
  const riseimg = (
    <Tooltip id="tooltip">
      <img src={intern} alt="RISE Interns" style={{ width: '400px', height: 'auto' }} />
    </Tooltip>
  );
  const hover2 = (
    <Tooltip id="tooltip">A Business Analyst Intern works on analyzing business processes, improving them, and creating deliverables to assist in project management. Responsibilities often include researching business tools, taking notes during client meetings, and consolidating information for reports.</Tooltip>
  );
  const hover3 = (
    <Tooltip id="tooltip">As a Fab-Friday Scholar at Cal State San Marcos, we were introduced to a variety of innovative project opportunities designed to prepare us for real-world technology projects. This program provided us with hands-on experience in various aspects of technology, including software development, data analysis, and project management. </Tooltip>
  );
  const fabfriday = (
    <Tooltip id="tooltip">
      <img src={fab} alt="Me as a Fab-Friday Scholar in 2022" style={{ width: '400px', height: 'auto' }} />
    </Tooltip>
  );
 

  return (
    <section id="experience">
    <div className="section-header">Experience</div>
    <hr/>
    <div className='content'>
      <ul> 
          <li>
            <OverlayTrigger placement="top" overlay={hover1}>
              <u><b>RISE Intern</b></u>
            </OverlayTrigger>{' '}
            <OverlayTrigger placement="top" overlay={riseimg}>
              <i>- <u>Capgemini</u> - </i>
            </OverlayTrigger> (07/2022 - 07/2022)</li>
          <ul>
              <li>4-day program where we had the opportunity to meet high-ups at the company to ask
                  questions about the life of a consultant in tech.</li>
              <li>Our group was assigned a hypothetical issue in our client’s business model. We
                  collaborated with each other, as well as our mentors to organize a solution that involved
                  technology that would help increase their profits.</li>
              <li>In charge of finding potential vendors that would help supply our client with a robust AI
                  system that would assist customers with issues.</li>
          </ul>
          <hr/>
          <li><OverlayTrigger placement="top" overlay={hover2}>
            <u><b>Business Analyst Intern</b></u>
          </OverlayTrigger>{' '}
          - <i>Accenture Consulting - </i> (06/2022 - 07/2022)
            </li>
          <ul>
              <li>There I worked on a variety of deliverables, such as an onboarding deck to help familiarize
                  newcomers with a supply chain project to help speed up collaboration.</li>
              <li>Did extensive research on business processes and how to better improve them as well as
                  learning more about how business tools work to create bigger visions within companies.</li>
              <li>I also occasionally took notes on key client meetings and consolidates them with team
                  members before sending them off to our key clients.</li>
          </ul>
          <hr/>
          <li><OverlayTrigger placement="top" overlay={hover3}>
            <u><b>Fab-Friday Scholar</b></u>
          </OverlayTrigger>{' '}
          - <OverlayTrigger placement="top" overlay={fabfriday} >
            <i><u>CSUSM</u> - </i>
            </OverlayTrigger> (09/2022 - 05/2022)
            </li>
          <ul>
              <li>Part of a $10,000 scholarship I received from the S-Stem program.</li>
              <li>Every Friday for 4-semesters, where I was advised on how to apply for internships,scholarships, as well as how to prepare for technical interviews.</li>
              <li>Worked on a Hackathon in 2020, where we analyzed Plankton data given to us by our client and developed a Python program to clean, sort and visualize data so that our client could use it for their scientific studies.</li>
          </ul>
      </ul>
    </div>
    </section>
  
  )
}

export default Experience