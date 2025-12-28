import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";

const SponsorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sponsors = [
    {
      name: "Give My Certificate",
      tier: "Certificate Partner",
      image: "/sponsors/givemycertificate.jpg",
      link: "https://givemycertificate.com/",
    },
    {
      name: "Keploy",
      tier: "Silver",
      image: "/sponsors/Keploy.png",
      link: "https://keploy.io/",
    },
  ];

  const partners = ["FOSS Club, IIIT Kalyani"];

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
            {/* Sponsors &  */}
            <span className="gradient-text">Partners</span>
          </h2>
          <p className="section-subtitle">
            Our amazing community partners making this possible
          </p>
        </motion.div>

        {/* Sponsors */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">
            Sponsors
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-6 max-w-7xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`glass-card-hover group relative p-4 h-48 w-48 rounded-2xl flex flex-col items-center justify-center gap-2 border
                          ${sponsor.tier === "platinum" ? "border-blue-500/40" : sponsor.tier === "gold" ? "border-amber-500/40" : "border-gray-400/30"}`}
              >
                {/* Tier Badge */}
                <span
                  className={`
            absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide
            ${
              sponsor.tier === "platinum"
                ? "bg-blue-500/20 text-blue-400"
                : sponsor.tier === "gold"
                ? "bg-amber-500/20 text-amber-400"
                : "bg-gray-500/20 text-gray-300"
            }
          `}
                >
                  {sponsor.tier}
                </span>

                {/* Logo */}
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className={`${sponsor.name=="Keploy"?"w-50":"w-20"} object-contain transition-all duration-300 rounded-lg`}
                />

                {/* Name */}
                <span className="font-display font-semibold text-xs text-center text-foreground group-hover:text-primary transition">
                  {sponsor.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">
            Community Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 max-w-5xl mx-auto">
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
          <a href="mailto:dsc.iiitkalyani@gmail.com">
            <Button variant="outline" size="lg" className="group">
              <Handshake className="w-5 h-5" />
              Become a Sponsor / Partner
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
