import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";
import { RolesShowcase } from "@/components/roles-showcase";
import heroBg from '@assets/generated_images/cinematic_hero_landscape_background.png';

export default function Home() {
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
    <>
      <section 
        className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0" />

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          <motion.div variants={itemVariants} className="mb-4 flex items-center gap-2">
            <div className="h-1 w-8 bg-primary"></div>
            <p className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-widest">
              Full Stack Developer | Technical Enthusiast | Lifelong Learner
            </p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
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
            className="flex items-center gap-4 mb-12 flex-wrap"
          >
            <a href="/projects">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 rounded-sm flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer shadow-lg"
              >
                ▶ View Projects
              </Button>
            </a>
            <Button
              asChild
              size="lg"
              className="bg-gray-600/50 text-white hover:bg-gray-600/70 font-semibold px-8 py-6 rounded-sm backdrop-blur-sm transition-transform hover:scale-105 cursor-pointer shadow-lg"
            >
              <a 
                href="/Resume.pdf" 
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
            <a href={DATA.socials.github} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-primary transition-colors group">
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href={DATA.socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-primary transition-colors group">
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href={`mailto:${DATA.socials.email}`} className="text-gray-300 hover:text-primary transition-colors group">
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Modern Avatar */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative group">
            {/* Animated outer rings */}
            <motion.div 
              className="absolute -inset-8 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-75 blur-xl"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Secondary glow layer */}
            <motion.div 
              className="absolute -inset-6 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-primary opacity-60 blur-2xl"
              animate={{
                rotate: -360,
                scale: [1.05, 1, 1.05],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Avatar container with modern styling */}
            <div className="relative w-80 h-80">
              <Avatar className="w-full h-full border-4 border-white shadow-2xl transition-all duration-300 group-hover:border-primary">
                <AvatarImage 
                  src="https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg"
                  alt={DATA.name}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <AvatarFallback className="text-6xl font-bold bg-primary text-white">
                  {DATA.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>

              {/* Floating particles effect */}
              <motion.div
                className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full blur-sm"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-3 h-3 bg-purple-500 rounded-full blur-sm"
                animate={{
                  x: [0, -80, 0],
                  y: [0, -120, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div
                className="absolute top-1/2 right-0 w-2 h-2 bg-cyan-400 rounded-full blur-sm"
                animate={{
                  x: [0, -60, 0],
                  y: [0, 80, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </div>
          </div>
        </motion.div>
        </div>
      </section>

      <RolesShowcase />
    </>
  );
}
