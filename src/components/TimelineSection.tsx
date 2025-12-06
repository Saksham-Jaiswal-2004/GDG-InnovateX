import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users, Upload, Trophy, Presentation, Award } from "lucide-react";

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      date: "Dec 10 - 25",
      title: "Applications & Team Formation",
      description: "Register on Hack2Skill and form your dream team",
      icon: Users,
    },
    {
      date: "Jan 4",
      title: "Online Project Submission",
      description: "Submit your completed project with all requirements",
      icon: Upload,
    },
    {
      date: "Jan 5",
      title: "Top 10 Announcement",
      description: "Top 10 projects selected for the final round",
      icon: Trophy,
    },
    {
      date: "Jan 12-13",
      title: "Offline Pitching",
      description: "Top 10 teams present their solutions to judges",
      icon: Presentation,
    },
    {
      date: "Jan 15",
      title: "Winners Announced",
      description: "Top 3 winners revealed and prizes distributed",
      icon: Award,
    },
  ];

  return (
    <section id="timeline" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 blur-[100px] rounded-full" />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Event <span className="gradient-text">Timeline</span>
          </h2>
          <p className="section-subtitle">
            Mark your calendars with these important dates
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2" />

            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-center gap-8 mb-8 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 md:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="glass-card-hover p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <event.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
