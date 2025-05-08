import React from "react";
import Terminal from "./terminal";

function AboutPage() {
  return (
    <div id="about" className="about-container">
      <div className="about-smaller-container">
        <div className="homepage-text-part">
          <div>
            <h1>
              About me<span className="blue">.</span>
            </h1>
            <p>
              I am an undergrad CS student at{" "}
              <a href="https://www.cs.ubc.ca/" target="_blank">
                UBC
              </a>
              , currently, my interests is around systems and software
              engineering. In terms of programming languages, I like C++ and Go.
              <br />
              <br />I am currently a software engineer intern at{" "}
              <a href="https://cloud.google.com/eventarc/docs" target="_blank">
                Google
              </a>
              , previously I was a data analyst intern at <a>TC Energy</a> and
              was a teaching assistant for UBC's introduction to computer
              systems course (
              <a
                href="https://vancouver.calendar.ubc.ca/course-descriptions/subject/cpscv#:~:text=CPSC_V%20213%20(4)%20Introduction%20to%20Computer%20Systems"
                target="_blank"
              >
                CPSC 213
              </a>
              ).
              <br />
              <br />I also probably spent too much time playing with my{" "}
              <a
                href="https://github.com/BrianAnakPintar/dotfiles"
                target="_blank"
              >
                dotfiles
              </a>{" "}
              .
            </p>
          </div>
        </div>
        <div>
          <Terminal title="Fun facts." input="Brian" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
