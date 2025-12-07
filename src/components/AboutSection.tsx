import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Users, Globe, AlertTriangle, ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const features = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Push the boundaries of what's possible with cutting-edge technology",
      gradient: "from-primary to-primary/50",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Connect with developers, mentors, and industry experts",
      gradient: "from-secondary to-secondary/50",
    },
    {
      icon: Globe,
      title: "Real Impact",
      description: "Build solutions that solve actual problems in our world",
      gradient: "from-accent to-accent/50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-24 md:py-40 relative overflow-hidden" ref={containerRef}>
      {/* Animated Background Elements */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full" />
      </motion.div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border border-primary/10 rounded-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-10 w-24 h-24 border border-secondary/10 rounded-full"
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
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            About Us
          </motion.span>
          <h2 className="section-title">
            About the <span className="gradient-text">Hackathon</span>
          </h2>
          <p className="section-subtitle">
            A premier innovation event bringing together the brightest minds to create impactful solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Welcome to one of the most anticipated hackathons of the year! Our mission is to bring together 
                passionate developers, creative designers, and innovative thinkers to solve real-world challenges 
                using the power of technology.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                This hackathon focuses on <span className="text-foreground font-semibold">Open Innovation</span> — 
                meaning you have the freedom to build anything impactful. Whether it's a sustainability solution, 
                a healthcare innovation, an educational tool, or a creative project.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                We encourage the use of Google technologies including but not limited to: Google Cloud Platform, 
                Firebase, TensorFlow, Flutter, Android, Google AI/ML APIs, Google Maps, and more.
              </motion.p>
            </div>

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="mt-10 p-5 rounded-2xl border border-accent/30 bg-accent/5 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="flex items-start gap-4 relative z-10">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0" />
                </motion.div>
                <div>
                  <p className="font-semibold text-accent text-lg">Important Notice</p>
                  <p className="text-muted-foreground mt-1">
                    Only projects created after <span className="text-foreground font-medium">December 1st, 2024</span> are 
                    eligible for this hackathon. Pre-existing projects will not be accepted.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-5"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03, 
                  x: 10,
                  transition: { duration: 0.3 }
                }}
                className="glass-card p-6 flex items-start gap-5 cursor-pointer group relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-5`}
                />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0`}
                >
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
