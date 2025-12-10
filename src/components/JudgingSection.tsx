import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Code, Layers, Target, TrendingUp, Presentation } from "lucide-react";

const JudgingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const criteria = [
    {
      icon: Lightbulb,
      title: "Innovation & Creativity",
      description: "Originality of the idea and creative approach to problem-solving",
      weight: "20%",
    },
    {
      icon: Code,
      title: "Technical Implementation",
      description: "Code quality, architecture, and technical complexity",
      weight: "20%",
    },
    {
      icon: Layers,
      title: "Use of Google Technologies",
      description: "Effective integration and utilization of Google tech stack",
      weight: "20%",
    },
    {
      icon: Target,
      title: "Impact & Usefulness",
      description: "Real-world applicability and potential to create positive change",
      weight: "15%",
    },
    {
      icon: TrendingUp,
      title: "Feasibility & Scalability",
      description: "Practical implementation potential and growth capability",
      weight: "15%",
    },
    {
      icon: Presentation,
      title: "Presentation & Pitch",
      description: "Clarity of communication and quality of demo presentation",
      weight: "10%",
    },
  ];

  return (
    <section id="judging" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Judging <span className="gradient-text">Criteria</span>
          </h2>
          <p className="section-subtitle">
            How your project will be evaluated by our panel of expert judges
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {criteria.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card-hover p-6 relative overflow-hidden group"
            >
              {/* Weight Badge */}
              {/* <div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-primary/10 text-primary text-sm font-bold">
                {item.weight}
              </div> */}

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JudgingSection;
