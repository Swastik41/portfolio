import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
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
    <section className="section-container pt-32">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="h-1 w-8 bg-primary"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Projects
          </h1>
        </div>
        <p className="text-xl text-gray-400 max-w-2xl">
          Explore my latest work and side projects. Each project demonstrates my skills in full-stack development.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid lg:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {DATA.projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="group bg-card/40 border border-gray-800 rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/50"
          >
            {/* Project Image */}
            {project.image && (
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            )}
            
            {/* Project Content */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors flex-1">
                  {project.title}
                </h3>
                <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <p className="text-sm text-gray-500 font-semibold mb-3">TECHNOLOGIES</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-900 text-gray-300 text-xs rounded-full font-medium border border-gray-700 hover:border-primary hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 pt-6 border-t border-gray-800">
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-2 text-white hover:text-primary transition-colors font-semibold group/link"
                >
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors font-semibold group/link"
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
        className="mt-20 text-center"
      >
        <p className="text-gray-400 mb-6">
          Want to see more? Check out my GitHub for additional projects and contributions.
        </p>
        <a
          href={DATA.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-semibold"
        >
          Visit GitHub
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
