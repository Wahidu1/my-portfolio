import Contact from "../components/sections/Contact";
import AnimatedHero from "../components/common/SimpleHero";

const ContactPage = () => {
  return (
    <>
      <AnimatedHero path="/contact" title="Contact" />
      <Contact />
    </>
  );
};

export default ContactPage;
