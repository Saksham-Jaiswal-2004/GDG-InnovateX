import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Star, Gift, GraduationCap } from "lucide-react";

const PrizesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const prizes = [
    {
      position: "Winner",
      prize: "₹50,000",
      icon: Trophy,
      color: "from-yellow-400 to-amber-500",
      shadow: "shadow-yellow-500/30",
      extras: ["Google Swag Kit", "Mentorship Program", "Certificate of Excellence"],
    },
    {
      position: "1st Runner-up",
      prize: "₹30,000",
      icon: Medal,
      color: "from-gray-300 to-gray-400",
      shadow: "shadow-gray-400/30",
      extras: ["Google Swag Kit", "Career Guidance", "Certificate"],
    },
    {
      position: "2nd Runner-up",
      prize: "₹20,000",
      icon: Award,
      color: "from-amber-600 to-amber-700",
      shadow: "shadow-amber-600/30",
      extras: ["Google Swag Kit", "Certificate", "Recognition"],
    },
  ];

  const additionalPerks = [
    { icon: Gift, text: "Exclusive swag and goodies for all participants" },
    { icon: GraduationCap, text: "Certificates for all valid submissions" },
    { icon: Star, text: "Mentorship opportunities with industry experts" },
  ];

  return (
    <section id="prizes" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-yellow-500/10 via-primary/10 to-secondary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Exciting <span className="gradient-text">Prizes</span>
          </h2>
          <p className="section-subtitle">
            Win amazing prizes, recognition, and opportunities
          </p>
        </motion.div>

        {/* Prize Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.position}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative ${index === 0 ? "md:-mt-4 md:scale-105 z-10" : ""}`}
            >
              <div className={`glass-card p-6 md:p-8 text-center h-full ${index === 0 ? "border-2 border-yellow-500/30" : ""}`}>
                {/* Trophy Icon */}
                <motion.div
                  animate={isInView ? { y: [0, -5, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${prize.color} flex items-center justify-center mb-6 shadow-lg ${prize.shadow}`}
                >
                  <prize.icon className="w-10 h-10 text-primary-foreground" />
                </motion.div>

                <h3 className="font-display font-bold text-xl mb-2">{prize.position}</h3>
                <p className="text-4xl font-display font-bold gradient-text mb-6">{prize.prize}</p>

                <div className="space-y-2">
                  {prize.extras.map((extra) => (
                    <div key={extra} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{extra}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Perks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card p-6 max-w-3xl mx-auto"
        >
          <h4 className="font-display font-bold text-lg text-center mb-6">For All Participants</h4>
          <div className="grid sm:grid-cols-3 gap-4">
            {additionalPerks.map((perk, index) => (
              <div key={perk.text} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                <perk.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">{perk.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizesSection;
