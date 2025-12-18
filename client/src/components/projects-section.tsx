import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { DATA } from "@/lib/data";

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {DATA.projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors duration-300 hover:shadow-lg"
          >
            {project.image && (
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
                >
                  Live Demo
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm font-semibold"
                >
                  GitHub
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
