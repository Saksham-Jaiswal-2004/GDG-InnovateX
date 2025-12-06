import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";

const SponsorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sponsors = [
    { name: "Google Developer Groups", tier: "platinum" },
    { name: "GDG Cloud", tier: "platinum" },
    { name: "Women Techmakers", tier: "gold" },
    { name: "TensorFlow User Group", tier: "gold" },
    { name: "Flutter Community", tier: "silver" },
    { name: "GDSC", tier: "silver" },
  ];

  const partners = [
    "DevCommunity",
    "Tech University",
    "StartupHub",
    "CodersGuild",
    "InnovatorsClub",
    "TechPark",
  ];

  return (
    <section id="sponsors" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent/10 blur-[100px] rounded-full" />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Sponsors & <span className="gradient-text">Partners</span>
          </h2>
          <p className="section-subtitle">
            Our amazing sponsors and community partners making this possible
          </p>
        </motion.div>

        {/* Sponsors */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`glass-card-hover p-6 flex items-center justify-center h-24 ${
                  sponsor.tier === "platinum" ? "border-yellow-500/30" :
                  sponsor.tier === "gold" ? "border-amber-500/30" : "border-gray-400/30"
                }`}
              >
                <span className="font-display font-bold text-sm text-center">{sponsor.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">Community Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card p-4 flex items-center justify-center h-16"
              >
                <span className="text-sm text-muted-foreground">{partner}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="group">
            <Handshake className="w-5 h-5" />
            Become a Sponsor / Partner
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
