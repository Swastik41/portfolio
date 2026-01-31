import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { DATA } from "@/lib/data";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Morax 👋 I can help answer questions about skills, projects, and experience. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // Projects - Dynamically fetch from DATA
    if (input.includes("project") || input.includes("work") || input.includes("built")) {
      const projectsList = DATA.projects
        .map(project => `• ${project.title}`)
        .join("\n");
      return `I've built several full-stack projects including:\n\n${projectsList}\n\nCheck out the Projects page to see them all with live demos and source code!`;
    }

    // Skills
    if (input.includes("skill") || input.includes("technology") || input.includes("tech stack") || input.includes("know")) {
      return "My core skills include:\n\n💻 Frontend: React, TypeScript, Tailwind CSS, Next.js\n🔧 Backend: Node.js, Express, MongoDB, PostgreSQL\n🛠️ Tools: Git, Docker, VS Code, Postman\n\nI'm always learning new technologies to stay current!";
    }

    // Experience - Dynamically fetch from DATA
    if (input.includes("experience") || input.includes("worked") || input.includes("job")) {
      const experienceList = DATA.experience
        .map(exp => `• ${exp.role} at ${exp.company}`)
        .join("\n");
      return `I have experience as:\n\n${experienceList}\n\nVisit the Experience page for detailed work history and accomplishments!`;
    }

    // Contact
    if (input.includes("contact") || input.includes("email") || input.includes("reach") || input.includes("hire")) {
      return "You can reach me through:\n\n📧 Email: Check the Contact page\n💼 LinkedIn: Available on my profile\n🐙 GitHub: See my repositories\n\nHead over to the Contact page to send me a message directly!";
    }

    // Availability
    if (input.includes("available") || input.includes("freelance") || input.includes("full-time")) {
      return "Yes! I'm currently available for both freelance projects and full-time opportunities. Feel free to reach out through the Contact page to discuss your project!";
    }

    // About
    if (input.includes("about") || input.includes("who are you") || input.includes("tell me")) {
      return "I'm a passionate Full Stack Developer specializing in MERN stack development. I love building modern, responsive web applications and always strive to write clean, maintainable code. Check out the About page to learn more!";
    }

    // Default
    return "I can help you with:\n\n• My projects and work\n• Technical skills\n• Work experience\n• How to contact me\n• Availability for projects\n\nWhat would you like to know?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    
    // Get bot response
    const botResponse = getBotResponse(input);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: botResponse }]);
    }, 500);
    
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-red-700 text-white rounded-full p-4 shadow-2xl border-2 border-white/20"
            aria-label="Open chat assistant"
          >
            <Bot className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-3rem)] bg-gray-900 border border-gray-800 rounded-lg shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900/95 backdrop-blur">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Morax</h3>
                  <p className="text-xs text-gray-400">Your AI Portfolio Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === "user"
                          ? "bg-primary text-white"
                          : "bg-gray-800 text-gray-200"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-gray-800 bg-gray-900/95">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about projects, skills..."
                  className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  size="icon"
                  className="bg-primary hover:bg-red-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Instant answers • No setup required</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
