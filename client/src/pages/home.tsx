import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Row } from "@/components/row";
import { Footer } from "@/components/footer";
import { DATA } from "@/lib/data";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. This is a demo form.",
      className: "bg-green-600 text-white border-none",
    });
    setEmail("");
    setMessage("");
  };

  const featuredProjects = DATA.projects.filter(p => p.featured);
  const allProjects = DATA.projects;

  return (
    <div className="min-h-screen bg-[#141414] text-white overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      
      <div className="relative z-20 -mt-24 md:-mt-32 pb-10 space-y-4 md:space-y-12">
        <Row title="Featured Projects" items={featuredProjects} type="project" id="projects" />
        <Row title="All Projects" items={allProjects} type="project" />
        <Row title="Certifications" items={DATA.certifications} type="certification" id="certifications" />
        <Row title="Experience" items={DATA.experience} type="experience" id="experience" />
        
        {/* Contact Section */}
        <div id="contact" className="max-w-2xl mx-auto px-4 py-16 text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
           <p className="text-gray-400 mb-8">
             I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
           </p>
           
           <form onSubmit={handleContact} className="space-y-4 text-left bg-[#181818] p-8 rounded-lg border border-gray-800">
             <div className="grid grid-cols-1 gap-4">
               <div className="space-y-2">
                 <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                 <Input 
                   id="email" 
                   type="email" 
                   placeholder="you@example.com" 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
                   className="bg-[#333] border-none text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-gray-400"
                 />
               </div>
               <div className="space-y-2">
                 <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                 <Textarea 
                   id="message" 
                   placeholder="Your message here..." 
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
                   required
                   className="min-h-[120px] bg-[#333] border-none text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-gray-400"
                 />
               </div>
             </div>
             <Button type="submit" className="w-full bg-primary hover:bg-red-700 text-white font-bold py-6 text-lg">
               Send Message
             </Button>
           </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
