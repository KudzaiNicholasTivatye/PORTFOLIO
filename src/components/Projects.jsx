import React from "react";
import { FaReact, FaJs, FaHtml5 } from "react-icons/fa"; // example tech icons
import {  SiTailwindcss ,SiFirebase } from "react-icons/si";
import "./projects.css";
import logo from "../assets/logo.png"; 


const projects = [
  {
    title: "InsightPress - Share Your Thoughts.",
    description:
      "InsightPress is a news platform where users can search for the latest news, log in with Google, and engage in public discussions. Users can comment on articles, reply to others, and be part of a community that values open dialogue and shared perspectives.",
    image: ["../assets/logo.png"], // screenshot of project
    technologies: [<SiFirebase />, <FaReact />, <SiTailwindcss />, <FaJs />, <FaHtml5 />],
    liveLink: "https://yourprojectlink.com",
  },
  {
    title: "Another Project",
    description:
      "This is another project with some cool features and design.",
    image: "/assets/logo.png",
    technologies: [<FaReact />, <FaJs />],
    liveLink: "https://anotherproject.com",
  },
  {
    title: "Third Project",
    description:
      "A third example project showcasing more functionality and creativity.",
    image: "/assets/logo3.png",
    technologies: [<SiTailwindcss />, <FaHtml5 />],
    liveLink: "https://thirdproject.com",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          {/* LEFT SIDE */}
          <div className="project-info">
            <div className="project-header">
              <span className="project-line"></span>
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{project.title}</h2>
            </div>

            <p>{project.description}</p>

            <h4>Technologies Used</h4>
            <div className="tech-icons">
              {project.technologies.map((icon, i) => (
                <span key={i} className="tech-icon">
                  {icon}
                </span>
              ))}
            </div>

            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-live"
            >
              View Live ↗
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="project-preview">
            <div className="preview-frame">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
