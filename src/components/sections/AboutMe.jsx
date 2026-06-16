import { motion } from "framer-motion";
import Wahid from "../../assets/wahid.png";
import { useSettings } from "../../context/SettingsContext";
import { highlightText } from "../../utils/highlightText";
import SectionCard from "../ui/SectionCard";
import TerminalWindow from "../ui/TerminalWindow";
import { slideInLeft, slideInRight, cardHoverLift } from "../../utils/motionVariants";

export default function AboutMe() {
  const { settings } = useSettings();

  return (
    <section className="section-padding section-alt">
      <div className="section-container">
        <SectionCard heading="About Me" label="// about" subtext="Backend engineer focused on clean APIs and scalable systems." />

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div {...slideInLeft} className="flex-shrink-0">
            <motion.div className="broken-frame p-1 terminal-card-shimmer" {...cardHoverLift}>
              <div className="w-56 h-56 md:w-64 md:h-64 overflow-hidden">
                <img src={Wahid} alt="Wahidul Islam" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="flex-1 w-full" {...slideInRight}>
            <TerminalWindow title="~/about/README.md" tabLabel="md">
              <motion.div
                className="terminal-card-body leading-relaxed whitespace-pre-line"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {highlightText(settings.about, settings.highlightText)}
              </motion.div>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
