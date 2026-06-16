import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/sections/Hero";
import AboutMe from "../components/sections/AboutMe";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Achievements from "../components/sections/Achievements";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import Blog from "../components/sections/Blog";
import { scrollToHashWhenReady } from "../utils/scrollToTop";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    return scrollToHashWhenReady(id);
  }, [location.pathname]);

  return (
    <>
      <div id="hero" className="section-anchor"><Hero /></div>
      <div id="about" className="section-anchor"><AboutMe /></div>
      <div id="skills" className="section-anchor"><Skills /></div>
      <div id="works" className="section-anchor"><Projects /></div>
      <div id="achievements" className="section-anchor"><Achievements /></div>
      <div id="experience" className="section-anchor"><Experience /></div>
      <div id="contact" className="section-anchor"><Contact /></div>
      <div id="blog" className="section-anchor"><Blog /></div>
    </>
  );
};

export default Home;
