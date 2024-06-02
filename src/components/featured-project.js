import React, {useEffect} from 'react';
import {useRef} from "react";
import { Button } from '@mantine/core';
import {motion, useAnimation, useInView} from "framer-motion";

function FeaturedProject(props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <motion.div className={`proj ${props.reversed ? "reversed" : ""}`}
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, y: 200},
                        visible: { opacity: 1, y: 0},
                    }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.25}}>
            <div className="proj-images">
                <img alt="project image" className="img-project" src={props.imageLink}/>
            </div>
            <div className="proj-text">
            {/*<div className="proj-text">*/}
                <div className="proj-titles">
                    <h1>{props.Title}</h1>
                    <h5>{props.Subtitle}</h5>
                </div>
                <div className="proj-description">
                    <p>{props.desc}</p>
                    {props.blogLink && (
                        <a href={props.blogLink} style={{ textDecoration: 'none', marginRight: '10px' }}>
                            <Button variant="outline" radius="xs">Learn more</Button>
                        </a>
                    )}
                    <a href={props.link} style={{ textDecoration: 'none', marginRight: '10px' }}>
                        <Button variant="outline" radius="xs">Visit Repository</Button>
                    </a>
                    <ul className="codes gone">{props.codes.map((code) => (
                        <li>{code}</li>
                    ))}
                    </ul>
                    {/*here we create the list of what framework is being used*/}
                {/*</div>*/}
            </div>
            </div>
        </motion.div>
    );
}

export default FeaturedProject;