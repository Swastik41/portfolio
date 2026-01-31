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
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
            <div className="h-1.5 w-12 bg-gradient-to-r from-primary to-red-700"></div>
            <p className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-widest">
             Developer | Tech Enthusiast | Open Source Contributor
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
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
          >
            {DATA.bio}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 rounded-lg flex items-center gap-2 transition-transform hover:scale-105"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              ▶ View Projects
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gray-600/50 text-white hover:bg-gray-600/70 font-semibold px-8 py-6 rounded-lg backdrop-blur-sm transition-transform hover:scale-105"
            >
              <a 
                href="/resume.pdf" 
                download="Resume.pdf"
                aria-label="Download resume as PDF"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.currentTarget.click();
                  }
                }}
              >
                ℹ Resume
              </a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <a href={DATA.socials.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={DATA.socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${DATA.socials.email}`} className="text-gray-400 hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Professional Image */}
        <div className="flex justify-center items-center">
          <div className="relative w-80 h-80">
            {/* Image */}
            <img
              src="/profile.jpg"
              alt={DATA.name}
              className="w-full h-full rounded-full object-cover border-4 border-primary shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

