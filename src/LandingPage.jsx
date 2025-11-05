import React, { useState } from "react";
import Navigation from "./components/landing/Navigation";
import TabButtons from "./components/landing/TabButtons";
import TabContent from "./components/landing/TabContent";
import "./LandingPage.css";
import Home from "./components/landing/tabs/Home";
import Experience from "./components/landing/tabs/Experience";
import Projects from "./components/landing/tabs/Projects";  
import Contact from "./components/landing/tabs/Contact";
export default function LandingPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    { section: "~/home", component: <Home />},
    { section: "~/experience", component: <Experience />},
    { section: "~/projects", component: <Projects />}, 
    { section: "~/contact", component: <Contact />},

  ];

  return (
    <div className="landing-page">
      <div className="retro-browser">
        <Navigation />

        <TabButtons
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabData={tabData}
        />

        <div className="browser-body">
          <div className="terminal-header">
          </div>
          <div className="terminal-content">
            <TabContent activeTab={activeTab} tabData={tabData} />
          </div>

        </div>
      </div>
    </div>
  );
}


