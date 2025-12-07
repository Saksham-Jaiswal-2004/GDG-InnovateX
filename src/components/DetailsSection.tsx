import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Globe, Award, CheckCircle, FileCode, GraduationCap } from "lucide-react";

const DetailsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const details = [
    { icon: Globe, label: "Registration Platform", value: "Hack2Skill" },
    { icon: Users, label: "Team Size", value: "1–4 members" },
    { icon: Award, label: "Mode", value: "Hybrid (Online + Offline)" },
    { icon: CheckCircle, label: "Mandatory Requirement", value: "Use at least one Google Tech" },
    { icon: FileCode, label: "Evaluation Stages", value: "Online → Top 10 → Offline Pitching" },
    { icon: GraduationCap, label: "Eligibility", value: "Open to all students & developers" },
  ];

  return (
    <section id="details" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/10 blur-[100px] rounded-full" />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Key <span className="gradient-text">Details</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know before you start
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {details.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                <detail.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
              <p className="font-display font-semibold text-lg">{detail.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
