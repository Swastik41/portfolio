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
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-8">
      <motion.div
        className="max-w-4xl w-full text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <p className="text-sm md:text-base text-muted-foreground font-medium">
            Welcome to my portfolio
          </p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {DATA.name}
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
        >
          {DATA.role} — {DATA.bio}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base text-muted-foreground mb-8 flex items-center gap-2 justify-center md:justify-start"
        >
          📍 {DATA.location}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 justify-center md:justify-start mb-12"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-muted text-foreground px-8"
          >
            Download Resume
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
