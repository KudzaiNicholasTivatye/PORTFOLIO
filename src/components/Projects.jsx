import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt,  FaSass } from "react-icons/fa"; // example tech icons
import { SiTailwindcss, SiFirebase, SiSupabase, SiTypescript, SiNextdotjs } from "react-icons/si";
import "./Projects.css";
import Navbar from "./Navbar";
import cm from "../assets/cm.jpeg";
import creative  from "../assets/creative.png";
import uncommon from "../assets/uncommon.png";

const projects = [
  {
    title: "Uncommon.org Attendance Tracker System",
    description:
      "We developed an attendance tracker for Uncommon that records student and staff check-ins and checkouts, featuring a secure distance radius system to ensure users can only sign in within designated locations.",
    image: uncommon, // screenshot of project
    technologies: [
      <SiSupabase key="supabase" />,
      <SiTypescript key="typescript" />,
      <SiTailwindcss key="tailwind" />,
      <SiNextdotjs key="iconnext" />
    
    
    ],
    liveLink: "http://attendance-tracker-frontend-eight.vercel.app/",
  },
  {
    title: "Creative Journey",
    description:
      "I developed a modern, professional website for Creative Journey, a marketing agency, ensuring their brand is accessible online. The platform highlights services, strengthens digital presence, and provides clients with a seamless, engaging experience.",
    image: creative,
    technologies: [<FaReact key="react" />, <FaCss3Alt key="Css3Alt" />],
    liveLink: "https://creative-journey-dtoz.vercel.app/",
  },
  {
    title: "CM Logistics Shipping Website",
    description:
      "We designed a professional website for CM Logistics, a shipping company in China, ensuring global online presence. The site showcases services, supports international clients, and highlights their expertise in worldwide goods transportation..",
    image: cm,
    technologies: [  <SiNextdotjs key="iconnext" /> ,<SiTypescript key="typescript" />, <FaSass key="sass" />],
    liveLink: "https://thelogisticsshippers.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">

      {/* Navbar */}
      <Navbar/>
    
     {/* Section Intro */}
      <div className="projects-intro">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">
          Here’s a selection of projects I’ve built, showcasing my skills in
          front-end and back-end development. Each project reflects creativity,
          problem-solving, and clean design principles.
        </p>
      </div>

      {/* Projects List */}
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
