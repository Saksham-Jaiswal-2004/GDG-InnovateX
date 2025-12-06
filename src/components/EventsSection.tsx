import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Video, Users, Mic, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      type: "Workshop",
      title: "Getting Started with Google Cloud",
      date: "Dec 12, 2024",
      time: "3:00 PM IST",
      icon: Video,
    },
    {
      type: "Webinar",
      title: "Introduction to Gemini AI",
      date: "Dec 15, 2024",
      time: "5:00 PM IST",
      icon: Mic,
    },
    {
      type: "Tech Talk",
      title: "Building with Firebase & Flutter",
      date: "Dec 18, 2024",
      time: "4:00 PM IST",
      icon: Users,
    },
    {
      type: "Workshop",
      title: "TensorFlow for Beginners",
      date: "Dec 22, 2024",
      time: "3:00 PM IST",
      icon: Video,
    },
    {
      type: "Speaker Session",
      title: "Innovation & Open Source",
      date: "Dec 28, 2024",
      time: "6:00 PM IST",
      icon: Mic,
    },
    {
      type: "AMA Session",
      title: "Ask Me Anything with Mentors",
      date: "Jan 2, 2025",
      time: "5:00 PM IST",
      icon: Users,
    },
  ];

  return (
    <section id="events" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full" />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Community <span className="gradient-text">Events</span>
          </h2>
          <p className="section-subtitle">
            Join our pre-hackathon workshops, webinars, and tech talks to boost your skills
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                  {event.type}
                </span>
                <event.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                <span>{event.date} • {event.time}</span>
              </div>
              <Button variant="outline" size="sm" className="w-full group/btn">
                Join Session
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
