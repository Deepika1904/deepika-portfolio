import React, { useState } from "react";
import "./HoverAsciiImage.css";

export default function HoverAsciiImage() {
  const [maskPos, setMaskPos] = useState(null);

  const handleMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    setMaskPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleLeave = () => setMaskPos(null);

  return (
    <div className="ascii-container" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {/* Show ASCII image as base */}
      <img src="/images/me-ascii.png" alt="Me ASCII" className="base-image" />
      
      {/* Real photo revealed on hover */}
      <img
        src="/images/me.png"
        alt="Me Real"
        className="real-image"
        style={
          maskPos
            ? {
                maskImage: `radial-gradient(circle 60px at ${maskPos.x}px ${maskPos.y}px, black 100%, transparent 100%)`,
                opacity: 1,
              }
            : { opacity: 0 }
        }
      />
    </div>
  );
}
