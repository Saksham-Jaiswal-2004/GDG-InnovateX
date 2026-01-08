import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [prevTime, setPrevTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-20T23:59:59").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const newTime = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
        setPrevTime(timeLeft);
        setTimeLeft(newTime);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, prevValue: prevTime.days, label: "Days" },
    { value: timeLeft.hours, prevValue: prevTime.hours, label: "Hours" },
    { value: timeLeft.minutes, prevValue: prevTime.minutes, label: "Minutes" },
    { value: timeLeft.seconds, prevValue: prevTime.seconds, label: "Seconds" },
  ];

  const flipVariants = {
    initial: { rotateX: -90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    exit: { rotateX: 90, opacity: 0 },
  };

  return (
    <div className="flex gap-3 md:gap-5">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          className="relative group"
        >
          <div className="glass-card p-4 md:p-6 min-w-[80px] md:min-w-[110px] text-center relative overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-sm" />

            {/* Number with flip animation */}
            <div className="relative h-12 md:h-16 flex items-center justify-center perspective-1000">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={unit.value}
                  variants={flipVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-3xl md:text-5xl font-display font-bold gradient-text"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {String(unit.value).padStart(2, "0")}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Label */}
            <div className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
              {unit.label}
            </div>

            {/* Bottom accent line */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            />
          </div>

          {/* Separator dots */}
          {index < timeUnits.length - 1 && (
            <div className="absolute -right-2 md:-right-3 top-1/2 -translate-y-1/2 flex flex-col gap-1.5">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
