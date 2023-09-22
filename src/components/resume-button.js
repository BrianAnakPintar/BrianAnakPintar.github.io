import React from 'react';
import resume from "../Assets/BrianMoniagaResume.pdf";

function ResumeButton(props) {
    return (
        <a href={resume} target="_blank">
        <button className="resume-button">
            Resume
        </button>
        </a>
    );
}

export default ResumeButton;