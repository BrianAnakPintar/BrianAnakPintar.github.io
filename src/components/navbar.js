import React, { useState, useEffect } from "react";
import ResumeButton from "./resume-button";
import { motion } from "framer-motion";

function Navbar() {
  const [sticked, setSticked] = useState(false);

  useEffect(() => {
    const hasPassed = () => {
      const navbarr = document.querySelector(".nav-header");
      if (!navbarr) return;

      const sticky = navbarr.offsetTop;
      setSticked(window.scrollY >= sticky);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", hasPassed);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", hasPassed);
    };
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <header className={sticked ? "nav-header sticked" : "nav-header"}>
      <nav>
        <motion.ul
          className="nav-links"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <li>
            <a href="#about" className="hover-underline-animation">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover-underline-animation">
              Projects
            </a>
          </li>
          <li>
            <a href="/Blog" className="hover-underline-animation">
              Blogs
            </a>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
}

export default Navbar;
