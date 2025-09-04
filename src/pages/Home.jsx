import React from 'react';
import Hero from '../components/sections/Hero';
import AboutMe from '../components/sections/AboutMe';
import SectionSeparator from '../components/common/SectionSeparator';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Testimonials from '../components/sections/Testimonials';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import Blog from '../components/sections/Blog';
import Achievements from '../components/sections/Achievements';

const Home = () => {
    return (
        <>
            <Hero />
            <SectionSeparator color="#F9FAFB" height={60}  />
            <AboutMe />
            {/* <SectionSeparator color="#F3F4F6" height={60}  /> */}
            <Skills />
            {/* <SectionSeparator color="#F9FAFB" height={60}  /> */}
            <Projects />
            {/* <SectionSeparator color="#F3F4F6" height={60}  /> */}
            {/* <Testimonials /> */}
            <Achievements />
            <SectionSeparator color="#F9FAFB" height={60}  />
            <Experience />
            {/* <SectionSeparator color="#F3F4F6" height={60}  /> */}
            <Contact />
            <Blog />
        </>
    );
};

export default Home;
