import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import heroBg from "@/assets/hero-bg.jpg";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const title = "InnovateX";

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
      </motion.div>

      {/* Animated Gradient Orbs */}
      <div className="particles-container">
        <motion.div
          animate={{
            x: [0, 100, 50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="orb-glow w-[600px] h-[600px] bg-primary/20 top-0 -left-40"
        />
        <motion.div
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 100, -50, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="orb-glow w-[500px] h-[500px] bg-secondary/20 top-1/4 -right-20"
        />
        <motion.div
          animate={{
            x: [0, 60, -80, 0],
            y: [0, -80, 60, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="orb-glow w-[400px] h-[400px] bg-accent/20 bottom-1/4 left-1/3"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <motion.div
        style={{ opacity, scale }}
        className="container relative z-10 px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.15 }}
          className="max-w-5xl mx-auto"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card animate-border-dance"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center justify-center"
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.span>
              <span className="text-sm font-medium text-foreground/80">
                GDG on Campus IIIT Kalyani
              </span>
            </motion.div>
          </motion.div>

          {/* Animated Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display flex flex-col text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text mb-10">{title}</span>
            {/* <br /> */}
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Build the Future with
            </motion.span>
            {/* <br /> */}
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5, type: "spring", stiffness: 200 }}
              className="gradient-text-accent inline-block text-3xl sm:text-4xl md:text-5xl lg:text-8xl h-fit"
            >
              Google Tech
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Solve real-world problems through innovation, collaboration, and
            cutting-edge technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="xl" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <a href="https://vision.hack2skill.com/event/gdgoc-25-innovatex">Register Now</a>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero-outline" size="xl" className="group">
                <Users className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <a href="#events">Join Community Events</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-sm text-muted-foreground mb-4 uppercase tracking-[0.2em]"
            >
              Project Submission Deadline - January 21st 05:30 am
            </motion.p>
            <div className="flex justify-center">
              <CountdownTimer />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="w-1.5 h-3 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default HeroSection;
