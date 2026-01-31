import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { DATA } from "@/lib/data";

export default function Projects() {
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
    <section className="section-container pt-32 pb-20">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Projects
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Explore my latest work. Each project demonstrates my skills in full-stack development.
        </p>
      </motion.div>

      {/* Projects Grid */}
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
            whileHover={{ y: -8 }}
            className="group bg-card/40 border border-gray-800 rounded-xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/50"
          >
            {/* Project Image - Large Top Section */}
            {project.image && (
              <div className="relative h-56 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                />
                {/* Red accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
              </div>
            )}
            
            {/* Project Content */}
            <div className="p-8">
              {/* Title in Red/Primary */}
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-red-400 transition-colors">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="mb-8 pb-8 border-t border-gray-800 pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-900/60 text-gray-200 text-xs rounded-full font-medium border border-gray-700 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-6">
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-2 text-primary hover:text-red-400 transition-colors font-semibold text-sm group/link"
                  data-testid={`link-live-${project.id}`}
                >
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  Read More
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors font-semibold text-sm group/link"
                  data-testid={`link-github-${project.id}`}
                >
                  <Github className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 text-center bg-gradient-to-r from-card/40 to-primary/5 border border-gray-800 rounded-xl p-16"
      >
        <h3 className="text-3xl font-bold text-white mb-4">
          Want to see more?
        </h3>
        <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
          Check out my GitHub for additional projects, contributions, and open-source work.
        </p>
        <a
          href={DATA.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-primary hover:bg-red-700 text-white font-bold px-8 py-3 rounded-sm transition-all hover:scale-105 active:scale-95"
        >
          Visit GitHub →
        </a>
      </motion.div>
    </section>
  );
}
