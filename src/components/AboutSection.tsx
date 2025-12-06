import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Users, Globe, AlertTriangle } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Push the boundaries of what's possible with cutting-edge technology",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Connect with developers, mentors, and industry experts",
    },
    {
      icon: Globe,
      title: "Real Impact",
      description: "Build solutions that solve actual problems in our world",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-secondary/5 blur-[100px] rounded-full" />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About the <span className="gradient-text">Hackathon</span>
          </h2>
          <p className="section-subtitle">
            A premier innovation event bringing together the brightest minds to create impactful solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                Welcome to one of the most anticipated hackathons of the year! Our mission is to bring together 
                passionate developers, creative designers, and innovative thinkers to solve real-world challenges 
                using the power of technology.
              </p>
              <p>
                This hackathon focuses on <span className="text-foreground font-semibold">Open Innovation</span> — 
                meaning you have the freedom to build anything impactful. Whether it's a sustainability solution, 
                a healthcare innovation, an educational tool, or a creative project, if it solves a real problem 
                and uses Google technologies, we want to see it.
              </p>
              <p>
                We encourage the use of Google technologies including but not limited to: Google Cloud Platform, 
                Firebase, TensorFlow, Flutter, Android, Google AI/ML APIs, Google Maps, and more. The goal is to 
                leverage these powerful tools to create solutions that can make a real difference.
              </p>
            </div>

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-4 rounded-xl border border-accent/30 bg-accent/5"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-accent">Important Notice</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Only projects created after <span className="text-foreground font-medium">December 1st, 2024</span> are 
                    eligible for this hackathon. Pre-existing projects will not be accepted.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card-hover p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
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
