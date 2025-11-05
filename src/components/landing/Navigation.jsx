import React from 'react';
import './Navigation.css';
import { FaFolder } from "react-icons/fa";

export default function Navigation() {
  return (
    <nav className="navigation">
        <div className="three-dots">
              <span className="red-dot"></span>
              <span className="yellow-dot"></span>
              <span className="green-dot"></span>
        </div>
        <div className="nav-center">
        <FaFolder className="folder-icon" />
        <span className="nav-text">deepikavempati — -zsh — 80x24</span>
      </div>

      <div className="nav-right"></div>
    </nav> 
  );
};




