import React, {useState} from 'react';
import ResumeButton from "./resume-button";

function Navbar(props) {
    const [sticked, passed] = useState(false)

    function hasPassed()
    {
        var navbarr = document.getElementsByClassName("nav-header").offsetTop();
        var sticky = navbarr.offsetTop;
        if(window.scrollY >= sticky){
            passed(true)
        }
        else
        {
            passed(false)
        }
    }

    window.addEventListener("scroll", hasPassed)

    return (
        <header className={sticked? `nav-header sticked` : `nav-header`}>
            <img className="logo" src="" alt="logo"/>
            <nav>
                <ul className="nav-links">
                    <li><a href="" className="hover-underline-animation">Projects</a></li>
                    <li><a href="" className="hover-underline-animation">Skills</a></li>
                    <li><a href="" className="hover-underline-animation">Repositories</a></li>
                    <li><a href="" className="hover-underline-animation">Contact</a></li>
                </ul>
            </nav>
            <ResumeButton/>
        </header>
    );
}

export default Navbar;
