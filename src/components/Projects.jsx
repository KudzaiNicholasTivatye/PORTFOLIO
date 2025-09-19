import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="section-header">
        <h2>
          My <span>Projects</span>
        </h2>
        <p>
          A collection of my recent work, blending creativity and functionality.
          Each project showcases problem-solving, clean code, and modern design.
        </p>
      </div>

      <div className="book">
        {/* Left Page */}
        <div className="page left-page">
          {/* Coding Watermark for Left Page */}
          <div className="coding-watermark left-watermark">
            {'{ } < /> function() { return code; } class Developer { } const project = () => {}'}
          </div>
          <div className="coding-lines horizontal-lines"></div>
          
          <h3>Portfolio Website</h3>
          <p>
            A fully responsive personal portfolio built with React, CSS, and
            animations. It highlights my skills, projects, and experiences with
            a clean UI.
          </p>
          <a
            href="https://your-project-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        {/* Right Page */}
        <div className="page right-page">
          {/* Coding Watermark for Right Page */}
          <div className="coding-watermark right-watermark">
            {'console.log("Hello World"); <html> <body> <script> import React from "react"; </script>'}
          </div>
          <div className="coding-lines vertical-lines"></div>
          
          <img
            src="https://via.placeholder.com/500x300"
            alt="Project Preview"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;