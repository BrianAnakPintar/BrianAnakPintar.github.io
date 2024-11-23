import React from 'react';
import {motion} from "framer-motion";
import LandingImg from "./brian-logo";
import SocialButton from './social-button';
import { EnvelopeOpenIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

function Homepage() {
    return (
        <div className="homepage-div">
            <div className="homepage-container">
                <div className="homepage-img">
                <LandingImg animate={true}/>
                </div>
                <div className="homepage-text-part">
                    <motion.h1
                        initial={{ opacity: 0, y:100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, delay: 0.5 }}
                    >Hi<span className="blue">,</span> my name is
                        Brian<span style={{color:"#0087ca"}}>.</span></motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y:50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .75, delay: .75 }}
                    >I am an undergrad at <a href='https://www.cs.ubc.ca/' target='_blank'>UBC</a> majoring in Honours Computer Science.<br/>
                        I usually don't update this site. But when I do, I like to yap about some of the stuff I make.
                    </motion.p>
                {/*    Add buttons for social media (github, etc.) here*/}
                <div className='social-buttons'>
                <SocialButton
                    link="mailto:brianfransis.moniaga@gmail.com"
                    icon={EnvelopeOpenIcon}
                    label="Twitter"
                />
                <SocialButton
                    link="https://www.linkedin.com/in/brian-fransis-moniaga"
                    icon={LinkedInLogoIcon}
                    label="LinkedIn"
                />
                <SocialButton
                    link="https://github.com/BrianAnakPintar"
                    icon={GitHubLogoIcon}
                    label="GitHub"
                />
                </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;