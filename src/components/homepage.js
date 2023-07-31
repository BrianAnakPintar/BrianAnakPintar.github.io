import React from 'react';
import Navbar from "./navbar";
import BrianLogo from "./brian-logo";

function Homepage(props) {
    return (
        <div className="homepage-div">
            <div className="homepage-container">
                <div className="homepage-img">
                <BrianLogo animate={true}/>
                </div>
                <div className="homepage-text-part">
                    <h1>Hi<span className="blue">,</span> my name is <br className="gone"></br>
                        Brian<span style={{color:"#0087ca"}}>.</span></h1>
                    <p>I am currently an undergraduate student majoring in Computer Science and Statistics at The University of British Columbia. I am
                        interested in software development and data science as a whole.</p>
                {/*    Add buttons for social media (github, etc.) here*/}
                </div>
            </div>

        </div>
    );
}

export default Homepage;