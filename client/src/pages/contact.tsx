import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { DATA } from "@/lib/data";
import { Mail, Github, Linkedin, MapPin, Phone, ArrowRight, HelpCircle } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqs = [
    {
      question: "What technical services do you provide?",
      answer: "I specialize in full-stack web development using the MERN stack (MongoDB, Express.js, React, Node.js). My expertise includes: scalable API design and development, responsive frontend architecture, database optimization, RESTful and GraphQL implementations, deployment automation, CI/CD pipeline configuration, and performance optimization."
    },
    {
      question: "What is your typical response time?",
      answer: "I typically respond to technical inquiries within 24 hours on business days. For time-sensitive projects or technical discussions, I'm available for priority communication. Please indicate urgency in your message."
    },
    {
      question: "Do you work on freelance and full-time engagements?",
      answer: "Yes, I'm available for both contract-based projects and permanent full-time opportunities. I'm particularly interested in roles involving MERN stack development, system architecture, and technical problem-solving. Let's discuss your requirements."
    },
    {
      question: "How do you approach project pricing and estimation?",
      answer: "Pricing is determined by project complexity, technical requirements, timeline, and scope. I provide detailed estimates after understanding your specifications. Contact me with your project brief for a comprehensive consultation and custom proposal."
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer: "Absolutely. I offer maintenance packages including bug fixes, performance monitoring, dependency updates, security patches, and feature enhancements. We can establish support SLAs based on your application's criticality."
    },
    {
      question: "What's your technology stack and expertise level?",
      answer: "Proficient in: React, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, GraphQL, REST APIs, Tailwind CSS, Framer Motion, Docker, Git, AWS, and modern DevOps practices. I stay current with industry standards and best practices."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Web3Forms - Free form backend service
      const web3formsKey = import.meta.env.VITE_WEB3FORMS_KEY || "03f03a5e-bb7b-4d43-ba9a-1d30df7d593c";
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: Message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to send message. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: DATA.socials.email,
      href: `mailto:${DATA.socials.email}`
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com",
      href: DATA.socials.github
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com",
      href: DATA.socials.linkedin
    }
  ];

  return (
    <section className="section-container pt-32">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-1 w-8 bg-primary"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Get In Touch
          </h1>
          <div className="h-1 w-8 bg-primary"></div>
        </div>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Interested in discussing your technical requirements, project scope, or collaboration opportunities? I'm here to help. Let's explore how we can build robust, scalable solutions together.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-12 mb-20">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-1 space-y-6"
        >
          <div className="bg-card/40 border border-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Info</h3>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 hover:border-primary border border-transparent transition-all group"
                  >
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">{method.label}</p>
                      <p className="text-white group-hover:text-primary transition-colors font-medium">
                        {method.value}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-primary transition-colors ml-auto" />
                  </motion.a>
                );
              })}
            </div>

            {/* Status Badge */}
            <div className="mt-8 pt-8 border-t border-gray-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-sm text-gray-400">
                  Open to freelance projects & full-time opportunities
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6 bg-card/40 border border-gray-800 rounded-lg p-8 md:p-12"
        >
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-white block mb-3">
              Full Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-600 focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-semibold text-white block mb-3">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-600 focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-semibold text-white block mb-3">
              Message / Project Details
            </label>
            <Textarea
              id="message"
              placeholder="Describe your project requirements, technical stack, timeline, and goals..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-40 bg-gray-900 border-gray-700 text-white placeholder:text-gray-600 focus:border-primary transition-colors resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-red-700 text-white font-bold py-6 text-lg rounded-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <p className="text-xs text-gray-500 text-center">
            I'll review your inquiry and respond with technical insights within 24 business hours.
          </p>
        </motion.form>
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        <div className="bg-card/40 border border-gray-800 rounded-lg p-8 text-center hover:border-primary transition-all">
          <div className="mb-4 inline-block p-3 bg-primary/20 rounded-lg">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">Email</h4>
          <p className="text-gray-400">Professional inquiries & project discussions</p>
        </div>

        <div className="bg-card/40 border border-gray-800 rounded-lg p-8 text-center hover:border-primary transition-all">
          <div className="mb-4 inline-block p-3 bg-primary/20 rounded-lg">
            <Github className="w-6 h-6 text-primary" />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">GitHub</h4>
          <p className="text-gray-400">Review my codebase and contributions</p>
        </div>

        <div className="bg-card/40 border border-gray-800 rounded-lg p-8 text-center hover:border-primary transition-all">
          <div className="mb-4 inline-block p-3 bg-primary/20 rounded-lg">
            <Linkedin className="w-6 h-6 text-primary" />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">LinkedIn</h4>
          <p className="text-gray-400">Career opportunities & networking</p>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Technical FAQs
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Quick answers to common technical and professional questions. Have additional questions? Let's connect!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/40 border border-gray-800 rounded-lg px-6 hover:border-primary/50 transition-all"
              >
                <AccordionTrigger className="text-left text-white hover:text-primary hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </section>
  );
}
