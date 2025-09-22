import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Zenith Minds",
      description:
        "Developed ZenithMinds, an educational platform connecting students and instructors, fostering global collaboration and continuous learning.",
      features: [
        "Built with Next.js, React, and TypeScript for scalability.",
        "Styled using Tailwind CSS with animations by Motion.dev.",
        "Used Zustand for state management and Zod for validation.",
        "Integrated MongoDB and RESTful APIs with Node.js and Express.",
        "Designed a user-friendly interface for seamless interactions.",
      ],
      image: "/images/zenith-minds.png", // replace with your project screenshot
      tags: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      title: "Another Project",
      description: "A short description of another project goes here.",
      features: ["Feature one of this project.", "Feature two of this project."],
      image: "/images/another-project.png",
      tags: ["React", "Node.js"],
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        {/* LEFT SIDE (Sticky) */}
        <div className="projects-left">
          <div className="sticky-wrapper">
            <h2 className="tagline">{projects[0].title}</h2>
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="project-image"
            />
          </div>
        </div>

        {/* RIGHT SIDE (Scrollable content) */}
        <div className="projects-right">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>✨ {feature}</li>
                ))}
              </ul>
              <div className="tech-stack">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
