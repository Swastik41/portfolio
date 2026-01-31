import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NetflixIntroProps {
  onComplete: () => void;
}

export function NetflixIntro({ onComplete }: NetflixIntroProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      {/* Netflix-style intro animation */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Main logo animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            type: "spring",
            stiffness: 100
          }}
          className="text-center z-10"
        >
          <div className="text-7xl md:text-9xl font-bold text-primary tracking-tighter">
            X
          </div>
        </motion.div>

        {/* Background scan effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeInOut"
          }}
        />

        {/* Text reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-20 left-0 right-0 text-center"
        >
          <p className="text-2xl md:text-4xl font-bold text-white mb-2">
            XVerse
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            Welcome to My World
          </p>
        </motion.div>

        {/* Sound wave effect (visual only) */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-primary rounded-full"
              initial={{ transform: "translate(-50%, -50%)", opacity: 0.6, scale: 0 }}
              animate={{ scale: [0, 2, 3], opacity: [0.6, 0.3, 0] }}
              transition={{
                duration: 1.5,
                delay: 0.3 + i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
