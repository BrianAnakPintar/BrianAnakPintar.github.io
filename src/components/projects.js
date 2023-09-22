import React, {useEffect, useRef} from 'react';
import Terminal from "./terminal";
import FeaturedProject from "./featured-project";
import {Grid, Spoiler} from "@mantine/core";
import Card from "./Card";
import IMAGES from "../Assets/IMAGES";
import {motion, useAnimation, useInView} from "framer-motion";

function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

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
                    >FEATURED <span className="blue">PROJECTS.</span></motion.h1>
                    <motion.p
                        ref={ref}
                        variants={{
                            hidden: { opacity: 0, y: 100},
                            visible: { opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration: 0.5, delay: 0.3}}
                    >Each project has been an exciting challenge, and I have loved every minute of it. I am always eager to take on new opportunities and push myself to the next level, and I can't wait to see what the future holds. Check out some of my most notable projects below!</motion.p>
                </div>
                <div className="projects-title-img-part gone">
                    <Terminal title={"brian's-projects: ~ 2023"}
                              input={"> (base) brian-web-app:"}
                              body={"list-projects..."}
                              skillVisibility={"none"}
                              projectVisibility={"flex"}/>
                </div>
            </div>
            <div className="list-projects">
                <FeaturedProject
                    Title="TARA"
                    Subtitle="The Amazing Rating Application"
                    desc="A web application for students to rate and review their teachers. It is designed to provide feedback for teachers regarding their teaching style and effectiveness."
                    codes={['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQLite']}
                    imageLink={IMAGES.tara}
                    link="https://github.com/BrianAnakPintar/TARA"
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
                    Title="Calculated"
                    Subtitle="Game for GMTK 2021 Game Jam"
                    desc="A game made using the Unity game engine for the GMTK 2021 game jam. This game is made in 48 hours with the theme of 'Joined Together'. It is a game about joining math equations together so that they compute the solution correctly by choosing the appropriate math operators."
                    codes={['Unity', 'C#', 'Art', 'Game Design', 'Sound Design']}
                    link="https://briananakpintar.itch.io/calculated"
                    imageLink={IMAGES.calculated}/>
            </div>

            <div className="archive">
                <h3>Here's an archive of some of my other personal projects</h3>
                <Spoiler maxHeight={260} showLabel="View More" hideLabel="Hide">
                        <Grid justify={"center"} align={"center"} gutter={""}>
                            <Grid.Col lg={4}>
                                <Card title={"VR Interview Simulator"}
                                      hasLink
                                      link={"https://devpost.com/software/virtualprep"}
                                      desc={"An interview simulator made for the NWHacks 2022 in VR. Made to allow users to practice and receive feedback from their "}/>
                                <br/>
                                <Card title={"You're Hired"}
                                      hasLink
                                      link={"https://briananakpintar.itch.io/youre-hired"}
                                      desc={"A simple game made in Unity where players play as a hiring manager and tasked with admitting and rejecting applicants based on randomly generated criterias."}/>
                                <br/>
                                <Card title={"EyeQ"}
                                      hasLink
                                      link={"https://devpost.com/software/eyeq"}
                                      desc={"By continuously tracking your eye movements, EyeQ offers a data-driven approach that empowers you to optimize your learning process and stay engaged with your coursework."}/>
                            </Grid.Col>

                            <Grid.Col lg={4}>
                                <Card title={"Heart Disease Predictor"}
                                      hasLink
                                      link={"https://github.com/BrianAnakPintar/DSCI100-HeartDisease"}
                                      desc={"Used KNN classification to identify heart disease based on given predictors."}/>

                                <br/>
                                <Card title={"Course Notifier"}
                                      desc={"Console based Python application that notifies you when a specified course has available seats."}/>
                                <br/>
                                <Card title={"BlueNav"}
                                      desc={"Webapp made with the people at UBC LaunchPad."}/>
                            </Grid.Col>

                            <Grid.Col lg={4}>
                                <Card title={"Schedule Comparer"}
                                      hasLink
                                      link={"https://github.com/BrianAnakPintar/ScheduleComparer"}
                                      desc={"Java application which allows users to compare their schedule to see overlapping free-time in their schedules."} />
                                <br/>
                                <Card title={"Function Optimizer"}
                                      hasLink
                                      link={"https://github.com/BrianAnakPintar/FunctionOptimizer"}
                                      desc={"Used the least-squares solution to find the best parameters for a linear function, for specified data points. (Ongoing Project)"}/>
                                <br/>
                                <Card title={"Custom Shell"}
                                      desc={"A custom made shell and terminal made using C++. (Ongoing project)"}/>
                            </Grid.Col>

                        </Grid>

                </Spoiler>
            </div>

        </div>
    );
}

export default Projects;