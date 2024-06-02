import React from 'react';
import {motion} from "framer-motion";
import BrianLogo from "./brian-logo";

function Homepage() {
    return (
        <div className="homepage-div">
            <div className="homepage-container">
                <div className="homepage-img">
                {/*<BrianLogo animate={true}/>*/}
                </div>
                <div className="homepage-text-part">
                    <motion.h1
                        initial={{ opacity: 0, y:100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75 }}
                    >Hi<span className="blue">,</span> my name is
                        Brian<span style={{color:"#0087ca"}}>.</span></motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y:50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .75, delay: .5 }}
                    >I am an undergraduate student at the University of British Columbia majoring in Honours Computer Science.<br/>
                        I usually don't update this site. But when I do, I like to yap about some of the stuff I make.
                    </motion.p>
                {/*    Add buttons for social media (github, etc.) here*/}
                </div>
            </div>

        </div>
    );
}

export default Homepage;