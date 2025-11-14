import React from "react";
import Terminal from "./terminal";
import IMAGES from "../Assets/IMAGES";

function AboutPage() {
  return (
    <div id="about" className="about-container">
      <div className="about-smaller-container">
        <div className="homepage-text-part">
          <div>
            <h1>
              About me<span className="blue">.</span>
            </h1>
            <div className="about-text">
              <p>
                I am an undergrad CS student at UBC. Currently, my interest is around systems and software
                engineering. In terms of programming languages, I like C++ and
                Go.
              </p>

              <p>Previously, I interned at Google, TC Energy and was a TA for CPSC 213 at UBC.</p>

              <p>Fun facts about me:</p>

              <ul>
                <li>I like board games.</li>
                <li>Snorlax is my spirit animal.</li>
                <li>Frieren is peak.</li>
              </ul>

              <p>
                I also probably spent too much time playing with my{' '}
                <a
                  href="https://github.com/BrianAnakPintar/dotfiles"
                  target="_blank"
                  rel="noreferrer"
                >
                  dotfiles.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="about-img-wrapper">
          <img className="about-img" src={IMAGES.snorlax} alt="snorlax" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
