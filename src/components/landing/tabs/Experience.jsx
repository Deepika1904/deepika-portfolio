import React, { useState } from "react";
import JobExperience from "./experience/JobExperience";
import "./Experience.css";

export default function Experience() {
  const [selectedJob, setSelectedJob] = useState(null);

  const experiences = [
    {
      name: "Internship.txt",
      title: "Student Software Engineer",
      company: "John Deere",
      duration: "March 2022 – May 2024",
      description: [
        "▪ Designed scalable REST APIs and integrated MongoDB increasing backend throughput by 30% to over 1,000 requests/hour.",  
        "▪ Built AWS Lambda functions to capture and store over 5K usage events per day in Amazon S3, enabling scalable analytics and real-time insights into dealer interaction trends.", 
        "▪ Created custom Bash scripts to automate generation of 15+ React components per sprint, saving developers 10+ hours by streamlining repetitive UI setup tasks.", 
        "▪ Built full-stack inventory management platform in Java (Spring Boot) and React for 100+ John Deere dealers, incorporating monthly dealer feedback to iteratively improve UI/UX and increase usability ratings by 96%.", 
        "▪ Integrated region-based feature toggles for 2 features in the backend platform, supporting targeted deployments across 4 regions and enabling controlled rollout of experimental features.", 
        "▪ Implemented comprehensive unit and integration tests with Mockito and React Testing Library, increasing test coverage to 90% across backend and frontend services and preventing ~15 production bugs per release through early detection in CI." ]
    }, 
    {
      name: "Research.txt",
      title: "Undergraduate Researcher",
      company: "Center for Statistics and Applications in Forensic Evidence (CSAFE)",
      duration: "August 2022 – May 2023",
      description: [
        "▪ Built and validated a random forest model to match bullets to firearms, testing it on 5,000 bullet samples and improving classification accuracy by 85% while significantly reducing false positives in forensic comparison tasks.", 
        "▪ Developed R scripts and an R Shiny dashboard to assess quality of 3D microscope scans, used by a team of 5 researchers and cutting manual review time by 50% through automated visual and statistical evaluation.",
        "▪ Tested and validated 10 distinct statistical indicators on over 10,000 forensic scans to identify the most reliable metrics for scan quality, achieving over 90% correlation across scan types.", 
        "▪ Trained and tuned a Generalized Linear Model (GLM) to flag low-quality bullet scans, improving detection accuracy from 40% to 75% and reducing false negatives in forensic QA processes." 
      ]
    }
  ];

  return (
    <div className="experience-section">
      {selectedJob ? (
        <>
          <JobExperience {...selectedJob} />
          <p
            className="back-link"
            onClick={() => setSelectedJob(null)}
          >
            guest@deepika.dev ~/Experience % cd ..
          </p>
        </>
      ) : (
        <>
          <p className="terminal-line">
            guest@deepika.dev ~/experience % ls
          </p>
          <ul className="file-list">
            {experiences.map((exp) => (
              <li
                key={exp.name}
                className="file-item"
                onClick={() => setSelectedJob(exp)}
              >
                {exp.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
