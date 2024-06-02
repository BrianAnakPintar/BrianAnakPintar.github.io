import React, {useState} from 'react';
import ResumeButton from "./resume-button";
import {motion} from "framer-motion";

function Navbar() {
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
            <nav>
                <motion.ul className="nav-links"
                           initial={{ opacity: 0, x:100 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ duration: .5 }}>
                    <li><a href="#projects" className="hover-underline-animation">Projects</a></li>
                    {/*<li><a href="#skills" className="hover-underline-animation">Skills</a></li>*/}
                    <li><a href="#contact" className="hover-underline-animation">Contact</a></li>
                    <li><a href="/Blog" className="hover-underline-animation">Blogs</a></li>
                </motion.ul>
            </nav>
            <ResumeButton/>
        </header>
    );
}

export default Navbar;
