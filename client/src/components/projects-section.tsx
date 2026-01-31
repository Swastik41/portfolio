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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 flex items-center gap-3"
      >
        <div className="h-1 w-8 bg-primary"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Projects
        </h2>
      </motion.div>

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
            className="group bg-card/60 border border-gray-800 rounded-sm overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/50 hover:scale-105"
          >
            {project.image && (
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                />
              </div>
            )}
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-900 text-gray-300 text-xs rounded font-medium border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-2 text-white hover:text-primary transition-colors text-sm font-semibold"
                >
                  <ExternalLink className="w-4 h-4" />
                  Read More
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm font-semibold"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
