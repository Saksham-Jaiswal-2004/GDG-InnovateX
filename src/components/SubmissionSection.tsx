import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Link, Video, Github, Code, Brain, FileEdit, AlertCircle } from "lucide-react";

const SubmissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const requirements = [
    { icon: FileText, title: "Project Deck / PPT", description: "Comprehensive presentation of your solution" },
    { icon: Link, title: "MVP Link", description: "Working prototype or demo of your project" },
    { icon: Video, title: "3-Minute Demo Video", description: "Brief walkthrough showcasing your solution" },
    { icon: Github, title: "GitHub Repository", description: "Complete source code with documentation" },
    { icon: Code, title: "Google Technologies Used", description: "List all Google technologies implemented" },
    { icon: Brain, title: "Google AI Tools Integrated", description: "Specify AI tools and how they're used" },
    { icon: FileEdit, title: "Solution Description", description: "100-word summary of your project" },
  ];

  return (
    <section id="submission" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Submission <span className="gradient-text">Requirements</span>
          </h2>
          <p className="section-subtitle">
            Make sure your submission includes all these essential components
          </p>
        </motion.div>

        {/* Requirements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
          {requirements.map((req, index) => (
            <motion.div
              key={req.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card-hover p-5 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <req.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{req.title}</h3>
              <p className="text-sm text-muted-foreground">{req.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Compliance Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-6 border-2 border-destructive/30 bg-destructive/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-destructive mb-2">
                  Strict Compliance Notice
                </h4>
                <p className="text-muted-foreground">
                  Only projects created <span className="text-foreground font-semibold">after December 1st, 2024</span> will 
                  be accepted. Pre-existing projects, regardless of modifications, will be disqualified. 
                  Ensure all submissions are original work created specifically for this hackathon.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubmissionSection;
