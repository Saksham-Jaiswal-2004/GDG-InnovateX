import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Sparkles, Globe, Zap, Brain, Code2 } from "lucide-react";

const TrackSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const trackFeatures = [
    { icon: Rocket, text: "Build anything impactful", color: "from-primary to-cyan-400" },
    { icon: Sparkles, text: "Use at least one Google technology", color: "from-secondary to-purple-400" },
    { icon: Brain, text: "Integrate Google AI tools", color: "from-accent to-pink-400" },
    { icon: Globe, text: "Solve real-world problems", color: "from-emerald-400 to-green-500" },
  ];

  const technologies = [
    "Google Cloud", "Firebase", "TensorFlow", "Flutter", 
    "Android", "Gemini AI", "Google Maps", "BigQuery"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="track" className="py-24 md:py-40 relative overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-secondary/5 blur-[200px] rounded-full" />
        <motion.div
          style={{ rotate }}
          className="absolute top-1/4 right-10 w-40 h-40 border border-primary/10 rounded-3xl"
        />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6"
          >
            Single Track
          </motion.span>
          <h2 className="section-title">
            The <span className="gradient-text">Track</span>
          </h2>
          <p className="section-subtitle">
            One track, unlimited possibilities. Build your vision with Google technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card p-8 md:p-14 relative overflow-hidden group">
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-500" />
            <div className="absolute inset-[1px] rounded-2xl bg-card" />
            
            {/* Floating glow effects */}
            <motion.div
              animate={{ 
                x: [0, 50, 0],
                y: [0, -30, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 blur-[80px] rounded-full"
            />
            <motion.div
              animate={{ 
                x: [0, -30, 0],
                y: [0, 40, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/20 blur-[80px] rounded-full"
            />

            <div className="relative z-10">
              {/* Track Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotateZ: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-[2px]"
                >
                  <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                </motion.div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-2">
                    Open Innovation
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Your creativity, powered by Google
                  </p>
                </div>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                This is an open track where you can build any solution that addresses a real-world problem. 
                The only requirement is that your project must incorporate at least one Google technology. 
                Let your imagination run wild!
              </p>

              {/* Feature Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid sm:grid-cols-2 gap-4 mb-10"
              >
                {trackFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    variants={featureVariants}
                    whileHover={{ scale: 1.03, x: 5 }}
                    className="flex items-center gap-4 p-5 rounded-xl bg-muted/30 border border-white/5 group/item cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                    >
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                    <span className="font-medium text-lg group-hover/item:text-primary transition-colors">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Google Technologies */}
              <div className="pt-8 border-t border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="w-5 h-5 text-primary" />
                  <p className="text-muted-foreground">Recommended Google Technologies:</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -3,
                        boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.3)",
                      }}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 cursor-pointer transition-colors hover:bg-primary/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrackSection;
