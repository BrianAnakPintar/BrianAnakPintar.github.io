import React, {useEffect, useRef} from 'react';
import Terminal from "./terminal";
import FeaturedProject from "./featured-project";
import IMAGES from "../Assets/IMAGES";
import {motion, useAnimation, useInView} from "framer-motion";
import {Modal, Table, Button} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    const [opened, { open, close }] = useDisclosure(false);

    const projects = [
        { title: 'RoomRival', link: 'https://github.com/BrianAnakPintar/RoomRival',
            tools: 'TypeScript, React, Socket.io, MappedIn, HTML, CSS',
            desc: 'A real-time indoor game where players compete to claim as many rooms as possible using QR codes.'},
        { title: 'Sushi Jam', link: 'https://youtu.be/Gcul3Cpx8Pk', tools: 'Unity, C#, MIDI Files',
            desc: 'A sushi eating rhythm game where notes are automatically generated by reading MIDI files' },
        { title: 'Function Optimizer', link: 'https://github.com/BrianAnakPintar/FunctionOptimizer', tools: 'Unity, C#, Linear Algebra',
            desc: 'A tool for to generate the best fit line given several data points purely written in C# without any libraries. (Linear and non-linear regression)' },
        { title: 'Schedule Comparer', link: 'https://github.com/BrianAnakPintar/ScheduleComparer', tools: 'Java, Java Swing, JUnit',
            desc: 'A tool used for students to visualize their schedule and find overlapping time slots with other students.' },
        { title: 'Mercury', link: 'https://github.com/BrianAnakPintar/Mercury', tools: 'Rust, Termion',
            desc: 'A text-editor project adapted from Hecto used to understand how Rust works.' },
        { title: 'Calculated', link: 'https://briananakpintar.itch.io/calculated', tools: 'Unity, C#',
            desc: 'A game where users choose appropriate operators to make valid math equations for GMTK 2021 Game Jam.' },
        { title: 'EyeQ', link: 'https://devpost.com/software/eyeq', tools: 'Python, HTML, CSS, OpenCV, Taipy, Cohere, Coackroach DB',
            desc: 'An app that monitors your eye movements to determine when you\'re not paying attention and creates summaries at those points.' },
        { title: 'Heart Disease Predictor', link: 'https://github.com/BrianAnakPintar/DSCI100-HeartDisease', tools: 'R, TidyVerse',
            desc: 'KNN classification to predict if a person has a heart disease. Term project for DSCI 100' },
        { title: 'UBC Mars Colony', link: 'https://www.ubcmarscolony.com/', tools: 'React, HTML, CSS, JavaScript',
            desc: 'Built and deployed their website using React.' },
        { title: 'Personal Terminal', tools: 'C++, ChatGPT',
            desc: 'Made a terminal with custom macros and chat bot to ask for commands.' },
        { title: 'BlueNav', tools: 'Go, React',
            desc: 'Degree navigator allowing students to plan their degree made with the people at UBC Launchpad.' },
        { title: 'Course Notifier', tools: 'Python, Selenium, Beautiful Soup',
            desc: 'A simple terminal app that just tracks for empty seats for one of my courses.' },
    ];

    const rows = projects.map((project) => (
        <tr key={project.title}>
            <td>{project.title}</td>
            <td>{project.desc}</td>
            <td>{project.tools}</td>
            <td>
                {project.link ? (
                    <a href={project.link}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 128 128">
                            <path fill="white" d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"></path>
                        </svg>
                    </a>) : (
                    ''
                )}
            </td>
        </tr>
    ));

    return (
        <div id="projects" className="projects-container">
            <div className="projects-title-container">
                <div className="projects-title-text-part">
                    <motion.h1
                        ref={ref}
                        variants={{
                            hidden: { opacity: 0, y: 100},
                            visible: { opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration: 0.5, delay: 0.1}}
                    >Featured <span className="blue">Projects.</span></motion.h1>
                    <motion.p
                        ref={ref}
                        variants={{
                            hidden: { opacity: 0, y: 100},
                            visible: { opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration: 0.5, delay: 0.3}}
                    >Here's some things that I enjoyed writing!</motion.p>
                </div>
                <div className="projects-title-img-part gone">
                    <Terminal title={"some:"}
                              input={"> (venv) brian:"}
                              body={"ls projects"}
                              skillVisibility={"none"}
                              projectVisibility={"flex"}/>
                </div>
            </div>
            <div className="list-projects">
                <FeaturedProject
                    Title="STEP - Writer"
                    Subtitle="Scuffed Text Editor Program - Writer"
                    desc="A lightweight terminal-based text editor made in C++ with Vim-like motions, as well as syntax highlighting."
                    codes={['C++', 'CMake', 'FTXUI', 'GoogleTest']}
                    imageLink={IMAGES.step}
                    link="https://github.com/BrianAnakPintar/step-writer/"
                    blogLink="Blog/posts/StepWriter"
                />
                <FeaturedProject
                    Title="Procedural Walk Animation"
                    Subtitle="Procedurally generated robot walk animation made in Unity"
                    desc="A simple procedurally generated robot walk animation made in Unity which interacts accordingly with the environment, utilizing raycasts, physics and Inverse Kinematics (IK)."
                    codes={['Unity', 'C#']}
                    imageLink={IMAGES.proceduralWalk}
                    reversed
                    link="https://github.com/BrianAnakPintar/Procedural-Animation"/>
                <FeaturedProject
                    Title="TARA"
                    Subtitle="The Amazing Rating Application"
                    desc="A web application for students to rate and review their teachers. It is designed to provide feedback for teachers regarding their teaching style and effectiveness."
                    codes={['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQLite']}
                    imageLink={IMAGES.tara}
                    link="https://github.com/BrianAnakPintar/TARA"
                />
            </div>

            <div className="archive">
                <h2>For an archive of all projects that I have worked on...</h2>
                <p>Below shows a table of most of the public projects that I have worked on excluding the three above. <br/>
                    I try to include as much as I can but not all projects can have links to them unfortunately.</p>
                <br/>
                <Modal size="70%" opened={opened} onClose={close} title="Archived Projects" centered>
                    <div>
                        <div>
                            <h4>Here is a list of some things that I made when in my spare time.</h4>
                            <p></p>
                            <Table>
                                <thead>
                                <tr>
                                    <th>Project</th>
                                    <th>Description</th>
                                    <th>Built with</th>
                                    <th>Link</th>
                                </tr>
                                </thead>
                                <tbody>{rows}</tbody>
                            </Table>
                        </div>
                    </div>
                </Modal>
                <div className="right-side-skill" onClick={open}>
                    <a onClick={opened} className="btn41-43 btn-43"
                              ref={ref}
                              variants={{
                                  hidden: { opacity: 0, y: 0},
                                  visible: { opacity: 1, y: 0},
                              }}
                              initial="hidden"
                              animate={mainControls}
                              transition={{duration: 0.5, delay:1.5}}>Archived Projects</a>
                </div>
            </div>

        </div>
    );
}

export default Projects;