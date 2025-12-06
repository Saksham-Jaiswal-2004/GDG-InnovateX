import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter, Globe } from "lucide-react";

const MentorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mentors = [
    {
      name: "Sarah Chen",
      role: "Senior Developer Advocate",
      company: "Google",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Raj Patel",
      role: "Tech Lead",
      company: "GDG Mumbai",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      role: "AI/ML Engineer",
      company: "TensorFlow Team",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Alex Kim",
      role: "Cloud Architect",
      company: "Google Cloud",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Priya Sharma",
      role: "Product Manager",
      company: "Firebase",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "David Okonkwo",
      role: "Startup Founder",
      company: "TechCommunity",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    },
  ];

  return (
    <section id="mentors" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Mentors & <span className="gradient-text">Speakers</span>
          </h2>
          <p className="section-subtitle">
            Learn from industry experts and community leaders
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6 text-center group"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display font-bold text-lg">{mentor.name}</h3>
              <p className="text-primary text-sm font-medium">{mentor.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{mentor.company}</p>
              <div className="flex justify-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
