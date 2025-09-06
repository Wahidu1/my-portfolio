import React, { useEffect, useState } from "react";
import "../../styles/Loader.css";

export default function Loader() {
  const [counter, setCounter] = useState(0);
  const targetCount = 75;

  useEffect(() => {
    let animationInterval;
    setCounter(0);

    animationInterval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= targetCount) {
          clearInterval(animationInterval);
          return targetCount;
        }
        const increment = Math.floor(Math.random() * 3) + 1;
        return Math.min(prev + increment, targetCount);
      });
    }, 80);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="loader-container">
      <div className="logo-wrapper">
        <div className="loader-logo">
          <img src="/files/logo.png" alt="Logo" className="logo-image" />
          <div className="orbiting-dots">
            <span className="dot dot-1" />
            <span className="dot dot-2" />
            <span className="dot dot-3" />
            <span className="dot dot-4" />
          </div>
        </div>
      </div>


      <div className="window-counter">
        <span className="current-count">{counter}</span>
        <span className="target-count">/{targetCount}</span>
      </div>

      <div className="loading-text">
        Loading<span className="dots"></span>
      </div>
    </div>
  );
}
