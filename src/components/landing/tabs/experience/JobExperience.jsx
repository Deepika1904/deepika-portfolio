import React from "react";
import "./JobExperience.css";

export default function JobExperience({ name, title, company, duration, description }) {
  return (
    <div className="job-details">
      <p className="terminal-line">
        guest@deepika.dev ~/Experience % cat {name}
      </p>
      <div className="file-content">
        <p><strong>{title}</strong> @ {company}</p>
        <p>{duration}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
