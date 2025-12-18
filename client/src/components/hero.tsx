import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DATA } from "@/lib/data";

export function Hero() {
  return (
    <div id="home" className="relative h-[80vh] w-full flex items-center justify-start px-4 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1600&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 max-w-2xl pt-20">
        <h2 className="text-xl md:text-2xl font-bold text-gray-300 mb-2 uppercase tracking-widest flex items-center gap-2">
           <span className="w-8 h-1 bg-primary inline-block"></span>
           Portfolio
        </h2>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 leading-none text-shadow">
          {DATA.profile.name}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed drop-shadow-md">
          {DATA.profile.role} — {DATA.profile.tagline}
        </p>

        <div className="flex items-center gap-4">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-[4px] flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="w-6 h-6 fill-black" /> 
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-[rgba(109,109,110,0.7)] text-white hover:bg-[rgba(109,109,110,0.4)] font-semibold px-8 py-6 text-lg rounded-[4px] flex items-center gap-2 backdrop-blur-sm transition-transform hover:scale-105 active:scale-95"
          >
            <Info className="w-6 h-6" />
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
