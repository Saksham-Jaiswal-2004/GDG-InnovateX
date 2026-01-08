import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users, Upload, Trophy, Presentation, Award } from "lucide-react";

const TimelineSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  const events = [
    {
      date: "Dec 10 - Jan 15",
      title: "Applications & Team Formation",
      description: "Register on Hack2Skill and form your dream team",
      icon: Users,
      color: "from-primary to-cyan-400",
    },
    {
      date: "Jan 20",
      title: "Online Project Submission",
      description: "Submit your completed project with all requirements",
      icon: Upload,
      color: "from-secondary to-purple-400",
    },
    {
      date: "Jan 21",
      title: "Top 10 Announcement",
      description: "Top 10 projects selected for the final round",
      icon: Trophy,
      color: "from-amber-400 to-orange-500",
    },
    {
      date: "Jan 23-25",
      title: "Offline Pitching",
      description: "Top 10 teams present their solutions to judges",
      icon: Presentation,
      color: "from-accent to-pink-400",
    },
    {
      date: "Jan 25",
      title: "Winners Announced",
      description: "Top 3 winners revealed and prizes distributed",
      icon: Award,
      color: "from-emerald-400 to-green-500",
    },
  ];

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: 30,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="timeline" className="py-24 md:py-40 relative overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 blur-[150px] rounded-full" />
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
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
          >
            Important Dates
          </motion.span>
          <h2 className="section-title">
            Event <span className="gradient-text">Timeline</span>
          </h2>
          <p className="section-subtitle">
            Mark your calendars with these important dates
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Animated Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/30 md:-translate-x-1/2">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-primary via-secondary to-accent"
              />
            </div>

            {events.map((event, index) => (
              <motion.div
                key={event.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 300 }}
                  className="absolute left-2 md:left-[49.1%] w-5 h-5 md:-translate-x-1/2 z-10"
                >
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${event.color} shadow-lg`}>
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${event.color}`}
                    />
                  </div>
                </motion.div>

                {/* Content Card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.03, 
                      y: -5,
                      boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.3)",
                    }}
                    className="glass-card p-6 md:p-8 group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center`}
                      >
                        <event.icon className="w-6 h-6 text-primary-foreground" />
                      </motion.div>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${event.color} text-primary-foreground text-sm font-semibold`}
                      >
                        {event.date}
                      </motion.span>
                    </div>
                    <h3 className="font-display font-bold text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">{event.description}</p>
                    
                    {/* Hover line effect */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      className={`h-0.5 bg-gradient-to-r ${event.color} mt-4 rounded-full`}
                    />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
