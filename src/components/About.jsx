import React, { useState } from "react";
import CertificateCard from "./CertificateCard"; // adjust path as needed
import "./About.css";
import Navbar from "./Navbar";
import logo from "../assets/logo.png"; // replace with your own profile image
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiSupabase } from "react-icons/si";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="about-experience">

         {/* ===== navbar SECTION ===== */}
         <Navbar /> 


      {/* ===== ABOUT SECTION ===== */}
      <div className="about">
        <div className="about-container">
          {/* Profile Image */}
          <div className="about-image">
            <img src={logo} alt="Profile" />
            <span className="image-border"></span>
          </div>

          {/* About Text */}
          <div className="about-text">
            <h2>ABOUT ME</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            {/* Buttons */}
            <div className="about-buttons">
              <button className="btn hire">HIRE ME</button>
              <button className="btn resume">RESUME</button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== EXPERIENCE SECTION ===== */}
      <div className="experience-section">
        <div className="section-label">My Journey</div>
        <h2>
          Professional <span>Experience</span>
        </h2>
        <p className="section-subtitle">
          A timeline of my career path and the valuable experiences that have
          shaped my expertise.
        </p>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={activeTab === "experience" ? "active" : ""}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
          <button
            className={activeTab === "education" ? "active" : ""}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button
            className={activeTab === "achievements" ? "active" : ""}
            onClick={() => setActiveTab("achievements")}
          >
            Achievements
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content-container">
          {activeTab === "experience" && (
            <div className="tab-content fade-in">
              {/* Timeline Item */}
              <div className="timeline-item">
                <div className="timeline-left">
                  <span className="timeline-date">Dec 2023 – Present</span>
                  <h3>Volunteering</h3>
                  <p className="company">Uncommon.org</p>
                </div>
                <div className="timeline-right">
                  <p>
                    As part of my experience at Uncommon.org, I have actively
                    participated in volunteer teaching initiatives, giving back
                    to the community by engaging with local primary schools. In
                    these sessions, I guide young students in creating
                    interactive games using Scratch, helping them develop
                    foundational skills in coding, problem-solving, and logical
                    thinking. This experience has strengthened my ability to
                    communicate complex concepts clearly, foster creativity in
                    others, and contribute meaningfully to community development
                    through technology education.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="tab-content fade-in">
              {/* Timeline Item */}
              <div className="timeline-item">
                <div className="timeline-left">
                  <span className="timeline-date">Jan 2024 – Present</span>
                  <h3>Uncommon.org</h3>
                </div>
                <div className="timeline-right">
                  <p>
                    I am currently a student at Uncommon.or, where I have
                    completed intensive crash courses in UI/UX Design, Digital
                    Marketing, and Software Development. Through this program, I
                    gained practical, hands-on experience in these disciplines,
                    with a particular focus on Software Development and
                    Cybersecurity as my areas of specialization. These courses
                    have equipped me with a strong foundation in building secure
                    and efficient software solutions, while also enhancing my
                    understanding of user-centered design and digital strategy.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="tab-content fade-in">
              <div className="certificates-grid">
                <CertificateCard />
                <CertificateCard />
                <CertificateCard />
                <CertificateCard />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ===== TECH STACK SECTION ===== */}
      <section className="tech-section">
        <h2 className="tech-heading">My Tech Stack</h2>
        <p className="tech-description">
          Here are the technologies I use to design, build, and deploy modern
          web applications. From front-end styling and frameworks to back-end
          services and deployment tools, these are the tools I rely on every
          day.
        </p>

        <div className="tech-grid">
          <div className="tech-card">
            <FaHtml5 className="icon html" /> <span>HTML</span>
          </div>
          <div className="tech-card">
            <FaCss3Alt className="icon css" /> <span>CSS</span>
          </div>
          <div className="tech-card">
            <FaSass className="icon scss" /> <span>SCSS</span>
          </div>
          <div className="tech-card">
            <SiTailwindcss className="icon tailwind" /> <span>Tailwind</span>
          </div>
          <div className="tech-card">
            <FaJs className="icon js" /> <span>JavaScript</span>
          </div>
          <div className="tech-card">
            <SiTypescript className="icon ts" /> <span>TypeScript</span>
          </div>
          <div className="tech-card">
            <FaPython className="icon python" /> <span>Python</span>
          </div>
          <div className="tech-card">
            <SiNextdotjs className="icon next" /> <span>Next.js</span>
          </div>
          <div className="tech-card">
            <FaReact className="icon react" /> <span>React.js</span>
          </div>
          <div className="tech-card">
            <FaNodeJs className="icon node" /> <span>Node.js</span>
          </div>
          <div className="tech-card">
            <SiSupabase className="icon supabase" /> <span>Supabase</span>
          </div>
          <div className="tech-card">
            <FaGithub className="icon github" /> <span>GitHub</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
