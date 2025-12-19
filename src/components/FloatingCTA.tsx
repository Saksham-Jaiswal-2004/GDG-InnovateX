import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-primary/30 transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Register CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Button variant="hero" size="lg" className="shadow-2xl px-11">
          <a href="https://www.notion.so/InnovateX-Handbook-2c5489c63bf480b18923c28f0a944249?source=copy_link">Handbook</a>
        </Button>
      </motion.div>

      {/* Handbook */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Button variant="hero" size="lg" className="shadow-2xl animate-glow-pulse">
          <a href="https://vision.hack2skill.com/event/gdgoc-25-innovatex">Register Now</a>
        </Button>
      </motion.div>
    </div>
  );
};

export default FloatingCTA;
