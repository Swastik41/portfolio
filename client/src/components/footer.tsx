import { Github, Linkedin, Mail, Twitter, Instagram, Globe } from "lucide-react";
import { DATA } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full bg-black/80 pt-16 pb-8 px-4 md:px-12 mt-20 border-t border-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-6 mb-8">
          <a href={DATA.profile.social.github} target="_blank" rel="noreferrer" className="text-white hover:text-gray-400 transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href={DATA.profile.social.linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-gray-400 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href={DATA.profile.social.email} className="text-white hover:text-gray-400 transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm text-gray-500">
          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">About Me</li>
            <li className="hover:underline cursor-pointer">Experience</li>
            <li className="hover:underline cursor-pointer">Projects</li>
          </ul>
          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Certifications</li>
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Blog</li>
          </ul>
          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">Terms of Use</li>
            <li className="hover:underline cursor-pointer">Cookie Preferences</li>
          </ul>
          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Help Center</li>
            <li className="hover:underline cursor-pointer">Legal Notices</li>
            <li className="hover:underline cursor-pointer">Corporate Information</li>
          </ul>
        </div>

        <div className="mb-4">
          <button className="border border-gray-500 text-gray-500 py-1 px-3 text-sm hover:text-white hover:border-white transition-colors">
            Service Code
          </button>
        </div>

        <p className="text-xs text-gray-500">
          © 2024 {DATA.profile.name} Portfolio. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
