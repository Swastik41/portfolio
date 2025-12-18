import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DATA } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-start pt-20 px-6 md:px-12 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      <motion.div
        className="max-w-3xl w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4 flex items-center gap-2">
          <div className="h-1 w-8 bg-primary"></div>
          <p className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-widest">
            MERN Stack Developer
          </p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {DATA.name}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-md"
        >
          {DATA.bio}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 rounded-sm flex items-center gap-2 transition-transform hover:scale-105"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            ▶ View Projects
          </Button>
          <Button
            size="lg"
            className="bg-gray-600/50 text-white hover:bg-gray-600/70 font-semibold px-8 py-6 rounded-sm backdrop-blur-sm transition-transform hover:scale-105"
          >
            ℹ Resume
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-6 justify-center md:justify-start">
          <a href={DATA.socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href={DATA.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${DATA.socials.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
