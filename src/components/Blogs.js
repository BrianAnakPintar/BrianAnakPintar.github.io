import React from 'react';
import {motion} from "framer-motion";


function Blogs() {
    return (
        <div className="skills">

        <div className="homepage-text-part">
            <motion.h1
                initial={{ opacity: 0, y:100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
            >A place of mind.</motion.h1>
            <motion.p
                initial={{ opacity: 0, y:50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .75, delay: .5 }}
            >If you would like to hear me yap about a lot of things, feel free to take a look at my blogs! <br/>
                Inside it you can find a collection of my thoughts ranging from courses, projects to my daily struggles :(
            </motion.p>
            <a href="/Blog">
                <button className="button_line">
                    <p>Visit Blogs</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                    </svg>
                </button>
            </a>
        </div>

        </div>
    );
}

export default Blogs;