import React from 'react'
import BentoBox from './BentoBox';
import Terminal from './terminal';

function AboutPage() {
    return (
        <div id="about" className='about-container'>
            <div className="about-smaller-container">
                <div className="homepage-text-part">
                    <div>
                        <h1>About me<span className="blue">.</span></h1>
                        <p>
                            I am an undergrad CS student at <a href='https://www.cs.ubc.ca/' target='_blank'>UBC</a>, currently, my interests is around systems and software engineering.
                            In terms of programming languages, I like C++ and Go.
                            <br/><br/>
                            I am currently a data analyst intern at <a href='https://www.tcenergy.com/' target='_blank'>TC Energy</a>, and previously a teaching assistant for UBC's introduction to computer systems course (<a href='https://vancouver.calendar.ubc.ca/course-descriptions/courses/cpscv-213-introduction-computer-systems' target='_blank'>CPSC 213</a>).
                            <br/><br/>
                            I also probably spent too much time playing with my <a href='https://github.com/BrianAnakPintar/dotfiles' target='_blank'>dotfiles</a> and writing my own plugins.
                        </p>
                    </div>
                </div>
                <div>
                    <Terminal
                        title = "Fun facts."
                        input = "Brian"
                        />
                </div>
                
            </div>
        </div>
    )
}

export default AboutPage