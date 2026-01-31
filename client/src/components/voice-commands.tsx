import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

export function VoiceCommands() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    // Check if browser supports speech recognition
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      return;
    }

    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;
    recognitionInstance.lang = 'en-US';

    recognitionInstance.onresult = (event: any) => {
      const current = event.resultIndex;
      const transcriptResult = event.results[current][0].transcript.toLowerCase();
      setTranscript(transcriptResult);

      // Only process if it's a final result
      if (event.results[current].isFinal) {
        handleVoiceCommand(transcriptResult);
      }
    };

    recognitionInstance.onerror = (event: any) => {
      console.error('Speech recognition error', event.error);
      setIsListening(false);
    };

    recognitionInstance.onend = () => {
      setIsListening(false);
    };

    setRecognition(recognitionInstance);

    return () => {
      if (recognitionInstance) {
        recognitionInstance.stop();
      }
    };
  }, []);

  const handleVoiceCommand = (command: string) => {
    const cmd = command.toLowerCase();

    // Navigation commands
    if (cmd.includes("go to home") || cmd.includes("show home") || cmd.includes("home page")) {
      setLocation("/");
      showFeedback("Navigating to Home");
    } else if (cmd.includes("show projects") || cmd.includes("go to projects") || cmd.includes("projects page")) {
      setLocation("/projects");
      showFeedback("Opening Projects");
    } else if (cmd.includes("show skills") || cmd.includes("go to skills") || cmd.includes("skills page")) {
      setLocation("/skills");
      showFeedback("Opening Skills");
    } else if (cmd.includes("show experience") || cmd.includes("go to experience") || cmd.includes("experience page")) {
      setLocation("/experience");
      showFeedback("Opening Experience");
    } else if (cmd.includes("show contact") || cmd.includes("go to contact") || cmd.includes("contact page")) {
      setLocation("/contact");
      showFeedback("Opening Contact");
    } else if (cmd.includes("show about") || cmd.includes("go to about") || cmd.includes("about page")) {
      setLocation("/about");
      showFeedback("Opening About");
    }
    // Scroll commands
    else if (cmd.includes("scroll up") || cmd.includes("go up")) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showFeedback("Scrolling to top");
    } else if (cmd.includes("scroll down") || cmd.includes("go down")) {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      showFeedback("Scrolling down");
    }
    // Help
    else if (cmd.includes("help") || cmd.includes("what can you do")) {
      showFeedback("Try: 'Go to Projects', 'Show Skills', 'Scroll up', 'Open Chat'", 5000);
    }
  };

  const showFeedback = (message: string, duration: number = 2000) => {
    toast({
      title: "🎤 Voice Command",
      description: message,
      duration: duration,
    });
  };

  const toggleListening = () => {
    if (!recognition) {
      toast({
        title: "Not Supported",
        description: "Voice commands not supported in this browser. Try Chrome or Edge.",
        variant: "destructive"
      });
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
      setTranscript("");
    } else {
      recognition.start();
      setIsListening(true);
      toast({
        title: "🎤 Listening...",
        description: "Try: 'Go to Projects' or 'Show Skills'",
      });
    }
  };

  // Don't render if not supported
  if (!recognition) {
    return null;
  }

  return (
    <>
      {/* Voice Command Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleListening}
        className={`fixed bottom-24 right-6 z-50 ${
          isListening ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-700 hover:bg-gray-600'
        } text-white rounded-full p-4 shadow-2xl border-2 border-white/20 transition-colors`}
        aria-label="Toggle voice commands"
      >
        {isListening ? (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Mic className="w-6 h-6" />
          </motion.div>
        ) : (
          <MicOff className="w-6 h-6" />
        )}
      </motion.button>

      {/* Listening Indicator */}
      <AnimatePresence>
        {isListening && transcript && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-44 right-6 z-50 bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl max-w-xs"
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-green-500" />
              <span className="text-xs font-semibold text-green-500">Listening...</span>
            </div>
            <p className="text-sm text-gray-300">{transcript}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
