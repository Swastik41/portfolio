import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NetflixIntro } from "@/components/netflix-intro";
import Home from "@/pages/index";
import About from "@/pages/about";
import Experience from "@/pages/experience";
import Projects from "@/pages/projects";
import Skills from "@/pages/skills";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Check if user has already seen intro
    const hasSeenIntro = sessionStorage.getItem("xverse-intro-shown");
    if (!hasSeenIntro) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("xverse-intro-shown", "true");
    setShowIntro(false);
  };

  if (showIntro) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <NetflixIntro onComplete={handleIntroComplete} />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen bg-background text-foreground">
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
