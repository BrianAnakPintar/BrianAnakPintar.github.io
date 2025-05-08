import React from "react";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Globe } from "lucide-react";

import IMAGES from "../Assets/IMAGES";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="homepage-text-part">
        <div className="title-for-proj">
          <h1>
            My excuses for using NeoVim<span className="blue">.</span>
          </h1>
          <p>a.k.a the projects I made when I was bored</p>
        </div>
      </div>

      <div className="project-list">
        <div className="project-item">
          <img className="project-img" alt="bnuuy" src={IMAGES.bnuuy} />
          <div className="project-detail">
            <h2>
              Bnuuy's Ship{" "}
              <a
                href="https://github.com/dayshaunlee/bnuuys-ship"
                target={"_blank"}
              >
                <GitHubLogoIcon />
              </a>{" "}
              <a
                href="https://bnuuysavers.itch.io/bnuuys-ship"
                target={"_blank"}
              >
                <GlobeIcon />
              </a>
            </h2>
            <p>
              <span style={{ fontWeight: "bold" }}>tl;dr</span>: A rogue-like
              ship building game where you save bunnies and expand your ship.
              <br />
              <br />
              It's written in C++ and OpenGL with our own game engine! <br />
              Yup, it's written from 'scratch' with our blood, sweat and tears.
            </p>
          </div>
        </div>

        <div className="project-item">
          <img
            className="project-img"
            src="https://github.com/BrianAnakPintar/step-writer/blob/main/Docs/ThemesStacked.png?raw=true"
            alt="step-writer"
          />
          <div className="project-detail">
            <h2>
              step-writer{" "}
              <a
                href="https://github.com/BrianAnakPintar/step-writer"
                target={"_blank"}
              >
                <GitHubLogoIcon />
              </a>
            </h2>
            <p>
              <span style={{ fontWeight: "bold" }}>tl;dr</span>: A text editor
              which runs in the terminal with vim motions, syntax highlighting
              and a file tree.
              <br />
              <br />I made this so I can run neovim when <code>ssh</code>-ing
              into ubc servers (I didn't know you could download nvim binaries
              and link it at the time.)
              <br />
              Some might say it's a waste of time, but eh... I found cool things
              I didn't know like gap buffers and rope.
              <br />
              <br />
              Also the project has some people contributing to it so I think
              it's cool!
            </p>
          </div>
        </div>
      </div>
      <div className="disclaimer">
        <h3>Other projects?</h3>
        <p>
          I noticed the projects I listed all use C++ lol. You can find other
          projects with varying tech stack on my{" "}
          <a href="hhttps://github.com/BrianAnakPintar" target="_blank">
            GitHub
          </a>
          . I promise I don't only code in C++.
          <br />
          Other projects include:
        </p>
        <ul>
          <li>
            <a href="https://devpost.com/software/termiknow">termiknow </a>
            (nwHacks 2025 winner) - CLI Command Search Engine w/ Vector Search
          </li>
          <li>
            <a href="https://devpost.com/software/termiknow">RoomRival </a> -
            Realtime icebreaker game!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
