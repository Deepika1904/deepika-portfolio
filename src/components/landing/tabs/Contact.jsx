import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-terminal">
        <p className="terminal-line">
          guest@deepika.dev ~/contact % connect
        </p>

        <div className="contact-links">
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/deepika-vempati/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/deepikavempati
            </a>
          </div>

          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <a
              href="https://github.com/Deepika1904"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Deepika1904
            </a>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:hello@deepika.dev">deepikavempati19@gmail.com</a>
          </div>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>(641) 451-4485</span> 
          </div>
        </div>
      </div>
    </div>
  );
}
