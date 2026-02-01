import { DATA } from "@/lib/data";
import { Github, Linkedin, Mail, Award } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-900 bg-gradient-to-b from-black to-gray-950 mt-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 py-12 space-y-8">
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 rounded-lg p-4 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award className="w-5 h-5 text-primary" />
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          </div>
          <p className="text-white font-semibold">Currently Available</p>
          <p className="text-gray-400 text-sm">Open to Full Time | Remote Roles & Freelance Projects. Based in {DATA.location}</p>
          <p className="text-gray-500 text-xs mt-2">⏱️ Average response time: 24 hours</p>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {/* Left: Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="font-semibold text-white mb-3 text-sm md:text-base">Quick Links</h4>
            <div className="space-y-2 text-xs md:text-sm">
              <a href="/" className="text-gray-400 hover:text-primary transition-colors block">Home</a>
              <a href="/projects" className="text-gray-400 hover:text-primary transition-colors block">Projects</a>
              <a href="/experience" className="text-gray-400 hover:text-primary transition-colors block">Experience</a>
              <a href="/skills" className="text-gray-400 hover:text-primary transition-colors block">Skills</a>
            </div>
          </motion.div>

          {/* Center: Connect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <h4 className="font-semibold text-white mb-3 text-sm md:text-base">Connect</h4>
            <div className="flex items-center justify-center gap-4">
              <a href={DATA.socials.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={DATA.socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${DATA.socials.email}`} className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right: Professional */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-right"
          >
            <h4 className="font-semibold text-white mb-3 text-sm md:text-base">Info</h4>
            <div className="space-y-1 text-xs md:text-sm">
              <a href="/legal" className="text-gray-400 hover:text-primary transition-colors block">Privacy & Terms</a>
              <a href="/about" className="text-gray-400 hover:text-primary transition-colors block">About</a>
              <a href="/contact" className="text-gray-400 hover:text-primary transition-colors block">Contact</a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-6 text-center text-sm text-gray-500">
          <p>© {currentYear} {DATA.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
