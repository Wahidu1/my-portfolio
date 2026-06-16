import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Wahid from "../../assets/wahid2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useSettings } from "../../context/SettingsContext";
import { useSettingsFiles } from "../../context/settingsFilesContext";
import AnimatedLogo from "../ui/AnimatedLogo";
import TerminalWindow from "../ui/TerminalWindow";
import TerminalTyping from "../ui/TerminalTyping";
import BlinkCursor from "../ui/BlinkCursor";
import { heroStagger, heroItem, slideInRight, cardHoverLift } from "../../utils/motionVariants";

export default function Hero() {
  const { settings } = useSettings();
  const { settingsFiles } = useSettingsFiles();

  const stackLine = settings.highlightText
    ? (Array.isArray(settings.highlightText)
        ? settings.highlightText
        : String(settings.highlightText)
            .replace(/^\[|\]$/g, "")
            .split(",")
            .map((w) => w.replace(/['"]/g, "").trim())
      ).join(" | ")
    : "Django | DRF | Python";

  return (
    <section className="section-padding min-h-[90vh] flex items-center bg-white overflow-hidden">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            variants={heroStagger}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={heroItem} className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, rotate: -8 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                <AnimatedLogo size={52} />
              </motion.div>
              <div>
                <p className="font-mono text-xs text-[var(--color-accent)]">~/wahidul-islam</p>
                <h1 className="terminal-hero-title">Wahidul Islam</h1>
              </div>
            </motion.div>

            <motion.p variants={heroItem} className="terminal-hero-role">
              Senior Backend Engineer
            </motion.p>

            <motion.div variants={heroItem}>
              <TerminalWindow title="~/portfolio/hero.tsx" tabLabel="bash">
                <div className="space-y-2.5 text-gray-600">
                  <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                    <span className="text-[var(--color-accent)]">&gt;</span> wahid --role backend
                  </motion.p>
                  <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65 }}>
                    <span className="text-[var(--color-accent)]">&gt;</span> stack:{" "}
                    <span className="text-[var(--color-syntax)]">{stackLine}</span>
                  </motion.p>
                  <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                    <span className="text-[var(--color-accent)]">&gt;</span>{" "}
                    <TerminalTyping
                      text={settings.header || "Building scalable backend systems."}
                      speed={28}
                      delay={900}
                      className="text-gray-900"
                    />
                  </motion.p>
                  <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.95 }}>
                    <span className="text-[var(--color-accent)]">&gt;</span> status: available
                    <BlinkCursor />
                  </motion.p>
                </div>
              </TerminalWindow>
            </motion.div>

            <motion.div variants={heroItem} className="flex flex-wrap gap-4">
              <motion.a
                href={settingsFiles.cv}
                download
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} /> download_cv
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                contact_me
              </motion.a>
            </motion.div>

            <motion.div variants={heroItem} className="flex gap-5 text-xl text-gray-400">
              {[
                { href: settings.github, icon: faGithub, label: "GitHub" },
                { href: settings.linkedin, icon: faLinkedinIn, label: "LinkedIn" },
                { href: settings.twitter, icon: faTwitter, label: "Twitter" },
              ].map(({ href, icon, label }, i) => (
                <motion.a
                  key={label}
                  href={href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent)] transition-colors"
                  aria-label={label}
                  whileHover={{ y: -3, color: "var(--color-accent)" }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.08 }}
                >
                  <FontAwesomeIcon icon={icon} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center order-1 lg:order-2 animate-float-subtle"
            {...slideInRight}
          >
            <motion.div
              className="broken-frame p-1 terminal-card-shimmer"
              {...cardHoverLift}
            >
              <div className="w-72 h-72 md:w-80 md:h-80 overflow-hidden">
                <img src={Wahid} alt="Wahidul Islam" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
