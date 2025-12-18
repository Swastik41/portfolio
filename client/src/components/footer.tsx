import { DATA } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-900 bg-black/80 mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-primary text-lg mb-4">DEVFLIX</h3>
            <p className="text-sm text-gray-400">{DATA.role}</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="#about" className="block hover:text-primary transition-colors">About</a>
              <a href="#experience" className="block hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="block hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="block hover:text-primary transition-colors">Skills</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex items-center gap-4">
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
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} {DATA.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
