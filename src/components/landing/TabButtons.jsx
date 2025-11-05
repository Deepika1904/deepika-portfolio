import React from "react";
import "./TabButtons.css";

export default function TabButtons({ tabData, activeTab, setActiveTab }) {
  return (
    <div className="tab-buttons">
      {tabData.map((item, index) => (
        <button
          key={item.section}
          className={`tab-btn ${activeTab === index ? "active" : ""}`}
          onClick={() => setActiveTab(index)}
        >
          {item.section}
        </button>
      ))}
    </div>
  );
}
