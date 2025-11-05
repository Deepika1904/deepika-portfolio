import React from "react";
import "./ProjectCard.css";
import { FaReact, FaNodeJs, FaAws, FaJava } from "react-icons/fa";
import { SiMongodb, SiSpring, SiPostgresql, SiTailwindcss } from "react-icons/si";

export default function ProjectCard({ name, title, description, image, tech }) {
  const techIcons = {
    react: <FaReact title="React" />,
    node: <FaNodeJs title="Node.js" />,
    aws: <FaAws title="AWS" />,
    mongodb: <SiMongodb title="MongoDB" />,
    spring: <SiSpring title="Spring" />,
    java: <FaJava title="Java" />,
    postgres: <SiPostgresql title="PostgreSQL" />,
    css: <SiTailwindcss title="Tailwind CSS" />,
  };

  return (
    <div className="project-card">
      <p className="terminal-line">
        guest@deepika.dev ~/Projects % cat {name}/README.md
      </p>
      <div className="project-content">
        <img src={image} alt={name} className="project-image" />
        <div className="project-info">
          <p className="project-name">{title}</p>
          <p className="project-desc">{description}</p>
          <div className="project-tech">
            {tech.map((t) => (
              <span key={t} className="tech-icon">
                {techIcons[t]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
