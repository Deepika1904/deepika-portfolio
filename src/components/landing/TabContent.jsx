import React from 'react';
import './TabContent.css';

export default function TabContent({ tabData, activeTab }) {
  return (
    <div className="tab__container ">
      <div className="tab__content">{tabData[activeTab].component}</div>
    </div>
  );
}
