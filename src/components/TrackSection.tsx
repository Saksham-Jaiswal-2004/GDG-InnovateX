import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Sparkles, Globe, Zap, Brain, Check } from "lucide-react";

const TrackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const trackFeatures = [
    { icon: Rocket, text: "Build anything impactful" },
    { icon: Sparkles, text: "Use at least one Google technology" },
    { icon: Brain, text: "Integrate Google AI tools" },
    { icon: Globe, text: "Solve real-world problems" },
  ];

  return (
    <section id="track" className="py-20 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            The <span className="gradient-text">Track</span>
          </h2>
          <p className="section-subtitle">
            One track, unlimited possibilities. Build your vision with Google technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-10" />
            
            {/* Glow Effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-float">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold">Open Innovation</h3>
                  <p className="text-muted-foreground">Your creativity, powered by Google</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                This is an open track where you can build any solution that addresses a real-world problem. 
                The only requirement is that your project must incorporate at least one Google technology. 
                Let your imagination run wild!
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {trackFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/30"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Google Technologies */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">Recommended Google Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {["Google Cloud", "Firebase", "TensorFlow", "Flutter", "Android", "Gemini AI", "Google Maps", "BigQuery"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
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
