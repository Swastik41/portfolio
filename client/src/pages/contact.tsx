import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { DATA } from "@/lib/data";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! (Demo)",
      description: "Thanks for reaching out. In a real app, this would send an email.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="section-container pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 flex items-center gap-3"
      >
        <div className="h-1 w-8 bg-primary"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Get In Touch
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
          </p>

          <div className="space-y-6">
            <a
              href={`mailto:${DATA.socials.email}`}
              className="flex items-center gap-4 p-4 bg-card/60 border border-gray-800 rounded-sm hover:border-primary hover:shadow-lg hover:shadow-red-900/30 transition-all group"
            >
              <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-white">{DATA.socials.email}</p>
              </div>
            </a>

            <a
              href={DATA.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-card/60 border border-gray-800 rounded-sm hover:border-primary hover:shadow-lg hover:shadow-red-900/30 transition-all group"
            >
              <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <p className="font-semibold text-white">github.com</p>
              </div>
            </a>

            <a
              href={DATA.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-card/60 border border-gray-800 rounded-sm hover:border-primary hover:shadow-lg hover:shadow-red-900/30 transition-all group"
            >
              <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <p className="font-semibold text-white">linkedin.com</p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 bg-card/60 border border-gray-800 rounded-sm p-6 md:p-8"
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium text-white block mb-2">
              Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-white block mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-white block mb-2">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-32 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-red-700 text-white font-semibold py-6 transition-all hover:scale-105"
          >
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
