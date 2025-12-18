import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Github, ExternalLink, Calendar, Building2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Project, Certification, Experience } from "@/lib/data";

interface RowProps {
  title: string;
  items: (Project | Certification | Experience)[];
  type: "project" | "certification" | "experience";
  id?: string;
}

export function Row({ title, items, type, id }: RowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: "left" | "right") => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div id={id} className="space-y-2 mb-8 group/row px-4 md:px-12">
      <h2 className="text-white text-lg md:text-2xl font-semibold cursor-pointer hover:text-gray-300 transition-colors duration-200">
        {title}
      </h2>
      
      <div className="group relative md:-ml-2">
        <ChevronLeft
          className={cn(
            "absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 bg-black/50 rounded-full p-1 text-white border border-gray-600 hidden md:block",
            !isMoved && "hidden"
          )}
          onClick={() => handleClick("left")}
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-2.5 overflow-x-scroll scrollbar-hide md:space-x-3.5 pb-8 pt-4 no-scrollbar"
        >
          {items.map((item) => (
            <Card key={item.id} item={item} type={type} />
          ))}
        </div>

        <ChevronRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 bg-black/50 rounded-full p-1 text-white border border-gray-600 hidden md:block"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

function Card({ item, type }: { item: any; type: "project" | "certification" | "experience" }) {
  const [isHovered, setIsHovered] = useState(false);

  // Different card widths based on type
  const widthClass = type === "project" 
    ? "min-w-[280px] md:min-w-[320px]" 
    : type === "experience" 
      ? "min-w-[300px] md:min-w-[400px]" 
      : "min-w-[200px] md:min-w-[240px]";

  return (
    <motion.div
      className={cn(
        "relative bg-[#181818] rounded-md cursor-pointer transition duration-200 ease-in-out border border-transparent hover:border-gray-700",
        widthClass,
        type === "project" ? "h-[180px]" : "h-auto py-6 px-4"
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, zIndex: 10 }}
    >
      {type === "project" && (
        <>
          <img
            src={(item as Project).image}
            alt={(item as Project).title}
            className="rounded-md object-cover md:rounded w-full h-full opacity-80 hover:opacity-100 transition-opacity"
          />
          
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/90 p-4 rounded-md flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{(item as Project).title}</h3>
                  <p className="text-xs text-gray-400 line-clamp-2 mb-2">{(item as Project).description}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {(item as Project).tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button size="icon" className="h-8 w-8 rounded-full bg-white text-black hover:bg-gray-200">
                    <Play className="h-4 w-4 fill-black" />
                  </Button>
                  <Button size="icon" variant="outline" className="h-8 w-8 rounded-full border-gray-500 text-white hover:bg-gray-800 hover:text-white">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="h-8 w-8 rounded-full border-gray-500 text-white hover:bg-gray-800 hover:text-white">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!isHovered && (
             <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent">
               <h3 className="text-white font-bold text-shadow">{(item as Project).title}</h3>
             </div>
          )}
        </>
      )}

      {type === "certification" && (
        <div className="flex flex-col h-full justify-between gap-4">
          <div>
            <div className="h-10 w-10 rounded-full bg-red-900/30 flex items-center justify-center mb-3">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-white font-bold text-lg leading-tight mb-1">{(item as Certification).title}</h3>
            <p className="text-sm text-gray-400">{(item as Certification).issuer}</p>
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-gray-500">{(item as Certification).date}</span>
            <span className="text-xs text-primary font-semibold hover:underline">View Credential</span>
          </div>
        </div>
      )}

      {type === "experience" && (
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between">
             <h3 className="text-white font-bold text-lg">{(item as Experience).role}</h3>
             <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">{(item as Experience).duration}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Building2 className="h-4 w-4" />
            <span>{(item as Experience).company}</span>
          </div>
          
          <ul className="text-xs text-gray-400 list-disc list-inside space-y-1 mt-2">
            {(item as Experience).description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
