import { useEffect, useState } from "react";
import AnimatedLogo from "../ui/AnimatedLogo";
import "../../styles/Loader.css";

export default function Loader() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => Math.min(prev + Math.floor(Math.random() * 4) + 2, 100));
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-logo-wrap">
        <AnimatedLogo size={120} />
      </div>
      <div className="loader-status">
        <span className="prompt">&gt; </span>
        initializing
        <span className="percent">... {counter}%</span>
        <span className="loader-cursor" aria-hidden="true" />
      </div>
      <div className="loader-progress">
        <div className="loader-progress-fill" style={{ width: `${counter}%` }} />
      </div>
    </div>
  );
}
