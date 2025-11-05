import HoverAsciiImage from "../HoverAsciiImage";
import React, { useState, useEffect } from "react";
import "./Home.css";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const introLines = [
    "Hey, I’m Deepika 👋",
    "I'm a software developer that enjoys building applications that make a positive difference.",
    "I love bringing small ideas to life through code and design",
    "-sometimes useful, sometimes just for fun.",
    "Welcome to my corner of the stack!"

  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    const speed = 60;
    const typing = setInterval(() => {
      if (currentLine < introLines.length) {
        const currentText =
          introLines.slice(0, currentLine).join("\n") +
          "\n" +
          introLines[currentLine].slice(0, currentChar);
        setDisplayText(currentText);
        currentChar++;
        if (currentChar > introLines[currentLine].length) {
          currentChar = 0;
          currentLine++;
        }
      } else {
        clearInterval(typing);
      }
    }, speed);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="home-tab">
      <p className="terminal-line">guest@deepika.dev ~/home % whoami</p>
      <div className="terminal-text">
        <pre className="typed-text">
          {displayText}
        </pre>
        <span className="cursor">▋</span>
      </div>
      <div className="ascii-image">
        <HoverAsciiImage />
      </div>
    </div>
  );
}
