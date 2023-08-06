import React, {useEffect} from 'react';
import {useRef} from "react";
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
            <a target="_blank" href={props.link} className="proj-text">
            {/*<div className="proj-text">*/}
                <div className="proj-titles">
                    <h1>{props.Title}
                        <svg className="learnIcon" xmlns="http://www.w3.org/2000/svg" height=".5em" viewBox="0 0 512 512">
                            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                    </h1>
                    <h5>{props.Subtitle}</h5>
                </div>
                <div className="proj-description">
                    <p>{props.desc}</p>
                    <ul className="codes gone">{props.codes.map((code) => (
                        <li>{code}</li>
                    ))}
                    </ul>
                    {/*here we create the list of what framework is being used*/}
                {/*</div>*/}
            </div>
            </a>
        </motion.div>
    );
}

export default FeaturedProject;