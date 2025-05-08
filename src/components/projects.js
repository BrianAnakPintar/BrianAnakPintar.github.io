import React from "react";
import { Carousel } from "@mantine/carousel";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Globe } from "lucide-react";

const Projects = () => {
  // Sample project data
  const projects = [
    {
      title: "STEP - Writer",
      img: "https://github.com/BrianAnakPintar/step-writer/blob/main/Docs/ThemesStacked.png?raw=true",
      description: "A terminal text editor.",
      details:
        "A vim-like text editor which runs in the terminal and has features such as vim motions, syntax highlighting, etc.",
      link: "https://github.com/BrianAnakPintar/step-writer",
    },
  ];

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
          <img
            className="project-img"
            src="
            https://private-user-images.githubusercontent.com/116947297/432027490-979d2ca2-5f47-4e9a-b958-d94dad0b034d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY2ODIyOTUsIm5iZiI6MTc0NjY4MTk5NSwicGF0aCI6Ii8xMTY5NDcyOTcvNDMyMDI3NDkwLTk3OWQyY2EyLTVmNDctNGU5YS1iOTU4LWQ5NGRhZDBiMDM0ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUwOFQwNTI2MzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05Yjk4NjM0YmQ3OTcxZDY1OGUwZmEzZmE0MDZhZDVkN2M1Y2IyOTFlOWU2MWVhYTkxMTBmYjNhMGMyOGUyMzA2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Si7CCcjl5KH2gIq7jdrvZgFdw9fmGzkJ-1X7VBQqnqI
            "
            alt="bnuuy"
          />
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
