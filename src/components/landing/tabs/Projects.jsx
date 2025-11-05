import React, { useState } from "react";
import ProjectCard from "./projects/ProjectCard";
import "./Projects.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "dialecticDaily",
      title: "Dialectic Daily",
      description: "A mental health journal app for individuals with BPD (Borderline Personality Disorder) to track their emotions, keep a record of their journal entries, DBT skills, and mood patterns.",
      image: "/images/dialecticdaily.png",
      tech: ["java", "spring", "react", "postgres", "css"],
    },
    {
      name: "skillMagnet",
      title: "Skill Magnet - LMS Platform",
      description: "A centralized online learning platform for students by providing user-driven study tools through flashcards and quizzes.",
      image: "/images/skillmagnet.png",
      tech: ["java", "spring", "react", "aws"],
    }
  ];

  return (
    <div className="projects-section">
      {!selectedProject ? (
        <>
          <p className="terminal-line">
            guest@deepika.dev ~/Projects % ls
          </p>
          <ul className="project-list">
            {projects.map((proj) => (
              <li
                key={proj.name}
                className="project-file"
                onClick={() => setSelectedProject(proj)}
              >
                {proj.name}/
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <ProjectCard {...selectedProject} />
          <p
            className="back-link"
            onClick={() => setSelectedProject(null)}
          >
            guest@deepika.dev ~/Projects/{selectedProject.name} % cd ..
          </p>
        </>
      )}
    </div>
  );
}
