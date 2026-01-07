import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Sparkles, Globe, Zap, Brain, Code2, Trophy, Award, BookOpen, Download, FileText, ExternalLink } from "lucide-react";

const TrackSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const trackFeatures = [
    { icon: Rocket, text: "Build anything impactful", color: "from-primary to-cyan-400" },
    { icon: Sparkles, text: "Use at least one Google technology", color: "from-secondary to-purple-400" },
    { icon: Brain, text: "Integrate Google AI tools", color: "from-accent to-pink-400" },
    { icon: Globe, text: "Solve real-world problems", color: "from-emerald-400 to-green-500" },
  ];

  const aimlFeatures = [
    { icon: Brain, text: "Focus on AI/ML solutions", color: "from-purple-400 to-violet-500" },
    { icon: Sparkles, text: "Leverage Google AI technologies", color: "from-secondary to-purple-400" },
    { icon: Award, text: "Cash prizes for winners", color: "from-yellow-400 to-orange-500" },
    { icon: Rocket, text: "Innovative ML implementations", color: "from-primary to-cyan-400" },
  ];

  const dualityFeatures = [
    { icon: Brain, text: "Scene segmentation expertise", color: "from-teal-400 to-cyan-500" },
    { icon: Sparkles, text: "Computer vision mastery", color: "from-purple-400 to-violet-500" },
    { icon: Award, text: "Extra hackathon points", color: "from-yellow-400 to-orange-500" },
    { icon: Rocket, text: "Increased winning chances", color: "from-teal-500 to-emerald-400" },
  ];

  const technologies = [
    "Google Cloud", "Firebase", "TensorFlow", "Flutter", 
    "Android", "Gemini AI", "Google Maps", "BigQuery", "And Many More"
  ];

  const aimlTechnologies = [
    "Gemini AI", "TensorFlow", "Vertex AI", "AutoML",
    "ML Kit", "Cloud AI", "Dialogflow", "Vision AI"
  ];

  const dualityTechnologies = [
    "Semantic Segmentation", "PyTorch", "Computer Vision", "CUDA",
    "OpenCV", "Duality AI SDK", "Scene Understanding", "Deep Learning"
  ];

  const dualityResources = [
    { icon: FileText, label: "Problem Statement", description: "View challenge details", link: "https://drive.google.com/file/d/1wjSLXsupU3rHLFG4gT1fPkPt9KO7Fi3w/view?usp=sharing" },
    { icon: BookOpen, label: "Create Account Doc", description: "Setup guide", link: "https://falcon.duality.ai/auth/sign-up?utm_source=hackathon&utm_medium=instructions&utm_campaign=WinterofCode" },
    { icon: Download, label: "Dataset Download", description: "Get training data", link: "https://falcon.duality.ai/auth?destination=/secure/documentation/hackathon-segmentation-desert?utm_source=hackathon%26utm_medium=instructions%26utm_campaign=WinterofCode" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="track" className="py-24 md:py-40 relative overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-secondary/5 blur-[200px] rounded-full" />
        <motion.div
          style={{ rotate }}
          className="absolute top-1/4 right-10 w-40 h-40 border border-primary/10 rounded-3xl"
        />
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
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6"
          >
            Three Tracks
          </motion.span>
          <h2 className="section-title">
            Choose Your <span className="gradient-text">Track</span>
          </h2>
          <p className="section-subtitle">
            Compete in Open Innovation, AI/ML, or Duality AI track with exciting rewards
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* First row - Two tracks */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Open Innovation Track */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-card p-8 md:p-14 relative overflow-hidden group">
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-[1px] rounded-2xl bg-card" />
                
                {/* Floating glow effects */}
                <motion.div
                  animate={{ 
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 blur-[80px] rounded-full"
                />
                <motion.div
                  animate={{ 
                    x: [0, -30, 0],
                    y: [0, 40, 0],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/20 blur-[80px] rounded-full"
                />

                <div className="relative z-10">
                  {/* Track Header */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotateZ: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-[2px]"
                    >
                      <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                        <Zap className="w-10 h-10 text-primary" />
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="font-display text-3xl md:text-4xl font-bold mb-2">
                        Open Innovation
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        Your creativity, powered by Google
                      </p>
                    </div>
                  </div>

                  <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                    This is an open track where you can build any solution that addresses a real-world problem. 
                    The only requirement is that your project must incorporate at least one Google technology. 
                    Let your imagination run wild!
                  </p>

                  {/* Feature Grid */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid sm:grid-cols-2 gap-4 mb-10"
                  >
                    {trackFeatures.map((feature, index) => (
                      <motion.div
                        key={feature.text}
                        variants={featureVariants}
                        whileHover={{ scale: 1.03, x: 5 }}
                        className="flex items-center gap-4 p-5 rounded-xl bg-muted/30 border border-white/5 group/item cursor-pointer"
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                        >
                          <feature.icon className="w-6 h-6 text-primary-foreground" />
                        </motion.div>
                        <span className="font-medium text-lg group-hover/item:text-primary transition-colors">
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Google Technologies */}
                  <div className="pt-8 border-t border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <Code2 className="w-5 h-5 text-primary" />
                      <p className="text-muted-foreground">Recommended Google Technologies:</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.5 + index * 0.05 }}
                          whileHover={{ 
                            scale: 1.1, 
                            y: -3,
                            boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.3)",
                          }}
                          className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 cursor-pointer transition-colors hover:bg-primary/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI/ML Track */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="glass-card p-8 md:p-14 relative overflow-hidden group h-full">
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-[1px] rounded-2xl bg-card" />
                
                {/* Floating glow effects */}
                <motion.div
                  animate={{ 
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/20 blur-[80px] rounded-full"
                />
                <motion.div
                  animate={{ 
                    x: [0, -30, 0],
                    y: [0, 40, 0],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="absolute -bottom-20 -left-20 w-60 h-60 bg-violet-500/20 blur-[80px] rounded-full"
                />

                <div className="relative z-10">
                  {/* Track Header */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotateZ: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 p-[2px]"
                    >
                      <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                        <Brain className="w-10 h-10 text-purple-500" />
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="font-display text-3xl md:text-4xl font-bold mb-2">
                        AI/ML Track
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        Intelligent solutions with cash rewards
                      </p>
                    </div>
                  </div>

                  {/* Cash Prize Banner */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="mb-8 p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20"
                  >
                    <div className="flex items-center gap-3 justify-center">
                      <Trophy className="w-6 h-6 text-yellow-500" />
                      <span className="font-bold text-xl bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                        Cash Prizes for Winners!
                      </span>
                    </div>
                  </motion.div>

                  <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                    Focus on building AI/ML powered solutions using Google's cutting-edge technologies. 
                    Create intelligent applications that push the boundaries of machine learning and artificial intelligence.
                  </p>

                  {/* Feature Grid */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid sm:grid-cols-2 gap-4 mb-10"
                  >
                    {aimlFeatures.map((feature, index) => (
                      <motion.div
                        key={feature.text}
                        variants={featureVariants}
                        whileHover={{ scale: 1.03, x: 5 }}
                        className="flex items-center gap-4 p-5 rounded-xl bg-muted/30 border border-white/5 group/item cursor-pointer"
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                        >
                          <feature.icon className="w-6 h-6 text-primary-foreground" />
                        </motion.div>
                        <span className="font-medium text-lg group-hover/item:text-purple-500 transition-colors">
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* AI/ML Technologies */}
                  <div className="pt-8 border-t border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <Code2 className="w-5 h-5 text-purple-500" />
                      <p className="text-muted-foreground">AI/ML Technologies:</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {aimlTechnologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.7 + index * 0.05 }}
                          whileHover={{ 
                            scale: 1.1, 
                            y: -3,
                            boxShadow: "0 10px 30px -10px rgba(168, 85, 247, 0.3)",
                          }}
                          className="px-4 py-2 rounded-full text-sm font-medium bg-purple-500/10 text-purple-500 border border-purple-500/20 cursor-pointer transition-colors hover:bg-purple-500/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second row - Duality AI Track */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto w-full"
          >
            <div className="glass-card p-8 md:p-14 relative overflow-hidden group">
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-500" />
              <div className="absolute inset-[1px] rounded-2xl bg-card" />
              
              {/* Floating glow effects */}
              <motion.div
                animate={{ 
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-20 -right-20 w-60 h-60 bg-teal-500/20 blur-[80px] rounded-full"
              />
              <motion.div
                animate={{ 
                  x: [0, -30, 0],
                  y: [0, 40, 0],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-500/20 blur-[80px] rounded-full"
              />

              <div className="relative z-10">
                {/* Track Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotateZ: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-20 h-20 rounded-3xl bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 p-[2px]"
                  >
                    <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-teal-500" />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl font-bold mb-2">
                      Duality AI: Scene Segmentation
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Master offroad semantic scene understanding
                    </p>
                  </div>
                </div>

                {/* Rewards Banner */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="mb-8 p-6 rounded-xl bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-blue-500/20 border-2 border-teal-500/40 relative overflow-hidden"
                >
                  <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent"
                  />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Trophy className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                      </motion.div>
                      <div className="flex-1">
                        <p className="font-display text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-2">
                          🎯 MASSIVE REWARDS AWAIT!
                        </p>
                        <p className="text-base md:text-lg text-cyan-200 font-semibold">
                          Win Big with the Duality AI Track
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-teal-100 leading-relaxed">
                      Teams implementing Duality AI's Semantic Scene Segmentation don't just participate—they dominate. 
                      With exponential bonus points and guaranteed visibility to judges, your chances of winning skyrocket.
                    </p>
                  </div>
                </motion.div>

                {/* Detailed Rewards Breakdown */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                  className="mb-10 grid sm:grid-cols-2 gap-4"
                >
                  <div className="p-4 rounded-lg bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 hover:border-yellow-500/50 transition-colors">
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                      <p className="font-bold text-yellow-400 text-lg mb-1">⭐ Extra Hackathon Points</p>
                      <p className="text-sm text-muted-foreground">
                        Earn 2.5x bonus multiplier on all evaluation scores. While others compete for base points, you're accumulating exponential advantages!
                      </p>
                    </motion.div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 hover:border-green-500/50 transition-colors">
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>
                      <p className="font-bold text-green-400 text-lg mb-1">🏆 AI/ML Track Dominance</p>
                      <p className="text-sm text-muted-foreground">
                        Automatic advancement to AI/ML finals with priority judging. Your specialized expertise puts you ahead of general AI/ML submissions!
                      </p>
                    </motion.div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2.4, repeat: Infinity }}>
                      <p className="font-bold text-purple-400 text-lg mb-1">🚀 Overall Championship Edge</p>
                      <p className="text-sm text-muted-foreground">
                        Significantly increased chances to win the overall hackathon! Duality AI track winners get maximum visibility and priority consideration.
                      </p>
                    </motion.div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 hover:border-cyan-500/50 transition-colors">
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2.6, repeat: Infinity }}>
                      <p className="font-bold text-cyan-400 text-lg mb-1">💎 Premium Benefits</p>
                      <p className="text-sm text-muted-foreground">
                        Mentorship from Duality AI experts, portfolio showcase, industry recognition, and networking opportunities with top tech companies.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Why This Track Matters */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                  className="mb-10 p-5 rounded-xl bg-gradient-to-r from-teal-500/5 to-cyan-500/5 border border-teal-500/20"
                >
                  <p className="font-semibold text-teal-400 mb-3 flex items-center gap-2">
                    <span className="text-lg">💡</span> Why Winners Choose This Track
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-teal-400 font-bold">✓</span>
                      <span>Stand out from hundreds of generic submissions with specialized expertise</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400 font-bold">✓</span>
                      <span>Judges prioritize deep, focused implementations over broad shallow ones</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400 font-bold">✓</span>
                      <span>Guaranteed portfolio-worthy project with real-world impact</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400 font-bold">✓</span>
                      <span>Direct path to industry recognition and career opportunities</span>
                    </li>
                  </ul>
                </motion.div>

                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                  Dive deep into offroad semantic scene segmentation using cutting-edge computer vision techniques. 
                  Build intelligent systems that understand and segment complex outdoor environments with Duality AI's advanced tools.
                </p>

                {/* Feature Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="grid sm:grid-cols-2 gap-4 mb-10"
                >
                  {dualityFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.text}
                      variants={featureVariants}
                      whileHover={{ scale: 1.03, x: 5 }}
                      className="flex items-center gap-4 p-5 rounded-xl bg-muted/30 border border-white/5 group/item cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                      >
                        <feature.icon className="w-6 h-6 text-primary-foreground" />
                      </motion.div>
                      <span className="font-medium text-lg group-hover/item:text-teal-500 transition-colors">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Resources Section */}
                <div className="mb-10 p-6 rounded-xl bg-muted/20 border border-teal-500/10">
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    <p className="font-semibold text-lg">Essential Resources:</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {dualityResources.map((resource) => (
                      <motion.a
                        key={resource.label}
                        href={resource.link}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-teal-500/20 hover:border-teal-500/40 transition-colors cursor-pointer group/resource"
                      >
                        <resource.icon className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm group-hover/resource:text-teal-400 transition-colors">
                            {resource.label}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {resource.description}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-teal-500/50 group-hover/resource:text-teal-500 transition-colors flex-shrink-0" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="pt-8 border-t border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <Code2 className="w-5 h-5 text-teal-500" />
                    <p className="text-muted-foreground">Technologies & Tools:</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {dualityTechnologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.9 + index * 0.05 }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -3,
                          boxShadow: "0 10px 30px -10px rgba(20, 184, 166, 0.3)",
                        }}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20 cursor-pointer transition-colors hover:bg-teal-500/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrackSection;
