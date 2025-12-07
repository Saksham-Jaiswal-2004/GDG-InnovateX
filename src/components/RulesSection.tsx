import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const RulesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const rules = [
    { text: "Projects must be created after December 1st, 2024", allowed: true },
    { text: "Mandatory use of at least one Google technology", allowed: true },
    { text: "Team size of 1-4 members allowed", allowed: true },
    { text: "All submissions must be original work", allowed: true },
    { text: "AI-assisted development is allowed, but solution must be unique", allowed: true },
    { text: "Respectful and ethical participation required", allowed: true },
    { text: "Pre-existing projects are not allowed", allowed: false },
    { text: "Late submissions will not be accepted", allowed: false },
    { text: "Plagiarism or copied projects will be disqualified", allowed: false },
  ];

  return (
    <section id="rules" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Rules & <span className="gradient-text">Guidelines</span>
          </h2>
          <p className="section-subtitle">
            Please read and follow these rules carefully to ensure a fair competition
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-6 md:p-8">
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <motion.div
                  key={rule.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`flex items-center gap-4 p-4 rounded-xl ${
                    rule.allowed ? "bg-primary/5 border border-primary/20" : "bg-destructive/5 border border-destructive/20"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      rule.allowed ? "bg-primary/20" : "bg-destructive/20"
                    }`}
                  >
                    {rule.allowed ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <X className="w-4 h-4 text-destructive" />
                    )}
                  </div>
                  <span className={rule.allowed ? "text-foreground" : "text-muted-foreground"}>
                    {rule.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
