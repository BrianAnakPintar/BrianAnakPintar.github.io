import React from 'react';
import { Carousel } from '@mantine/carousel';

const Projects = () => {
  // Sample project data
  const projects = [
    {
      title: "Frosch",
      img: "https://github.com/BrianAnakPintar/frosch/blob/main/docs/frosch_wezterm.gif?raw=true",
      description: "A terminal slideshow tool.",
      details: "A simple tool to present markdown slides all inside your terminal. With image support 🐸.",
      link: "https://github.com/BrianAnakPintar/frosch",
    },
    {
      title: "STEP - Writer",
      img: "https://github.com/BrianAnakPintar/step-writer/blob/main/Docs/ThemesStacked.png?raw=true",
      description: "A terminal text editor.",
      details: "A vim-like text editor which runs in the terminal and has features such as vim motions, syntax highlighting, etc.",
      link: "https://github.com/BrianAnakPintar/step-writer",
    },
    {
      title: "Room Rival",
      img: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/732/172/datas/gallery.jpg",
      description: "A real-time ice breaker game.",
      details: (
        <>
          A real-time indoor game where players compete to claim as many rooms as possible using QR codes.{' '}
          <a className='blue' href="https://www.mappedin.com/resources/blog/nwhacks-2024/#:~:text=RoomRival%20Project%20by%20Lily%20Zhang%2C%20Kaiser%20Chen%2C%20Jessie%20Sheng%2C%20Brian%20Moniaga" target="_blank" rel="noopener noreferrer">
            Featured on MappedIn
          </a>.
        </>
      ),
      link: "https://github.com/BrianAnakPintar/RoomRival",
    },
    {
      title: "Tales of Player One",
      img: "https://github.com/BrianAnakPintar/TalesOfPlayerOne/raw/main/Docs/gameplay.gif",
      description: "A collection of minigames.",
      details: "A series of 2D minigames such as Tetris and platformers created using a custom game engine in SFML.",
      link: "https://github.com/BrianAnakPintar/TalesOfPlayerOne",
    },
    {
      title: "TARA",
      img: "https://github.com/BrianAnakPintar/TARA/raw/main/review.gif",
      description: "The Amazing Rating Application",
      details: "A web application allowing students to rate local high school teachers. Made using Django.",
      link: "https://github.com/BrianAnakPintar/TARA",
    },
    {
      title: "Procedural Animation",
      img: "https://github.com/BrianAnakPintar/Procedural-Animation/raw/master/gifs/procedural-anim.gif",
      description: "A procedural walk animation in Unity.",
      details: "A procedurally generated walk animation which interacts accordingly with the environment.",
      link: "https://github.com/BrianAnakPintar/Procedural-Animation",
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <div className="projects-title-container">
        <h1>Here's a list of some fun stuff I've made.</h1>
      </div>

      <div className="list-projects">
        <Carousel
          height="100%"
          style={{ flex: 1 }}
          slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
          slideGap={{ base: 0, sm: 'md' }}
          loop
          align="start"
          className='carousel'
        >
          {projects.map((project, index) => (
            <Carousel.Slide key={index}>
              <div className="project-entry">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h1>{project.title}</h1>
                  <img className="project-img" src={project.img} alt={project.title} />
                </a>
                <h3>{project.description}</h3>
                <p>{project.details}</p>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;