import React from 'react'

const Extra = () => {
  return (
    <div id="extra">
    <div className='section-header'>Past Projects</div>
    <hr/>
            <ul>
                <li>For Fab-Fridays, we had a new project every semester that we work on in groups. The project for Fall 2021 we dealt with Ham Radios,
                   which uses radio frequencies to send messages around the world.</li>
                <li>Our goal was to create a program that cleans the frequency data we received from our client and create 
                  an algorithm that can determine the best frequency to communicate on at any given time and use it to send out messages.</li>
                <li>We successfully created this project using Python as well as a number of Python libraries like Pandas and matplotlib to help achieve our desired outcome.</li>
            </ul>
    </div>
  )
}

export default Extra