import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { DATA } from "@/lib/data";
import { Mail, Github, Linkedin } from "lucide-react";

export function ContactSection() {
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
    <section id="contact" className="section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
          </p>

          <div className="space-y-6">
            <a
              href={`mailto:${DATA.socials.email}`}
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
            >
              <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-foreground">{DATA.socials.email}</p>
              </div>
            </a>

            <a
              href={DATA.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
            >
              <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="font-semibold text-foreground">github.com</p>
              </div>
            </a>

            <a
              href={DATA.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
            >
              <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-semibold text-foreground">linkedin.com</p>
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
          className="space-y-4 bg-card border border-border rounded-lg p-6 md:p-8"
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
              Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-32 bg-background border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6"
          >
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
