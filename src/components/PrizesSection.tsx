import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Star, Gift, GraduationCap, Sparkles } from "lucide-react";

const PrizesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const prizes = [
    {
      position: "1st Runner-up",
      prize: "₹30,000",
      icon: Medal,
      gradient: "from-gray-200 via-gray-300 to-gray-400",
      glow: "shadow-[0_0_40px_5px_rgba(156,163,175,0.3)]",
      extras: ["Google Swag Kit", "Career Guidance", "Certificate"],
      scale: false,
    },
    {
      position: "Winner",
      prize: "₹50,000",
      icon: Trophy,
      gradient: "from-yellow-300 via-amber-400 to-yellow-500",
      glow: "shadow-[0_0_60px_10px_rgba(251,191,36,0.3)]",
      extras: ["Google Swag Kit", "Mentorship Program", "Certificate of Excellence"],
      scale: true,
    },
    {
      position: "2nd Runner-up",
      prize: "₹20,000",
      icon: Award,
      gradient: "from-amber-500 via-amber-600 to-amber-700",
      glow: "shadow-[0_0_40px_5px_rgba(217,119,6,0.3)]",
      extras: ["Google Swag Kit", "Certificate", "Recognition"],
      scale: false,
    },
  ];

  const additionalPerks = [
    { icon: Gift, text: "Exclusive swag and goodies for all participants" },
    { icon: GraduationCap, text: "Certificates for all valid submissions" },
    { icon: Star, text: "Mentorship opportunities with industry experts" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="prizes" className="py-24 md:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-yellow-500/20 via-primary/10 to-secondary/10 blur-[150px] rounded-full"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%",
              y: "100%",
              opacity: 0,
            }}
            animate={{ 
              y: "-100%",
              opacity: [0, 1, 0],
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-primary/50 rounded-full"
          />
        ))}
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Amazing Rewards
          </motion.div>
          <h2 className="section-title">
            Exciting <span className="gradient-text">Prizes</span>
          </h2>
          <p className="section-subtitle">
            Win amazing prizes, recognition, and opportunities
          </p>
        </motion.div>

        {/* Prize Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16"
        >
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.position}
              variants={cardVariants}
              className={`relative ${prize.scale ? "md:-mt-6 md:scale-110 z-10" : ""}`}
            >
              <motion.div
                whileHover={{ 
                  y: -15,
                  scale: 1.03,
                }}
                transition={{ duration: 0.4 }}
                className={`glass-card p-8 md:p-10 text-center h-full relative overflow-hidden group cursor-pointer ${
                  prize.scale ? "border-2 border-yellow-500/40" : ""
                } ${prize.glow}`}
              >
                {/* Animated background shimmer */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                />

                {/* Trophy Icon with animation */}
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    rotateY: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${prize.gradient} flex items-center justify-center mb-8 relative`}
                >
                  <prize.icon className="w-12 h-12 text-primary-foreground" />
                  
                  {/* Sparkle effects */}
                  {prize.scale && (
                    <>
                      <motion.div
                        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-2 -right-2"
                      >
                        <Sparkles className="w-6 h-6 text-yellow-300" />
                      </motion.div>
                      <motion.div
                        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        className="absolute -bottom-2 -left-2"
                      >
                        <Sparkles className="w-5 h-5 text-yellow-300" />
                      </motion.div>
                    </>
                  )}
                </motion.div>

                <h3 className="font-display font-bold text-2xl mb-3">{prize.position}</h3>
                <motion.p
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-5xl md:text-6xl font-display font-bold gradient-text mb-8"
                >
                  {prize.prize}
                </motion.p>

                <div className="flex justify-center items-center">
                  <div className="space-y-3 flex flex-col justify-center self-center">
                    {prize.extras.map((extra, extraIndex) => (
                      <motion.div
                        key={extra}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + extraIndex * 0.1 }}
                        className="flex items-center gap-3 text-sm text-muted-foreground justify-start"
                      >
                        <Star className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{extra}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Perks */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass-card p-8 max-w-4xl mx-auto"
          >
            <h4 className="font-display font-bold text-xl text-center mb-8">
              For All <span className="gradient-text">Participants</span>
            </h4>
            <div className="grid sm:grid-cols-3 gap-4">
              {additionalPerks.map((perk, index) => (
                <motion.div
                  key={perk.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 cursor-pointer group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <perk.icon className="w-6 h-6 text-primary flex-shrink-0 group-hover:text-secondary transition-colors" />
                  </motion.div>
                  <span className="text-sm">{perk.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizesSection;
