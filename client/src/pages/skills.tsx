import { motion } from "framer-motion";
import { 
  Terminal, 
  Code2, 
  Coffee, 
  Database, 
  RefreshCcwDot as ReactIcon,
  Zap,
  Server,
  GitBranch
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      {
        name: "Terminal",
        description: "ML/AI and Backend development",
        icon: Terminal
      },
      {
        name: "C++",
        description: "Object-oriented programming",
        icon: Code2
      },
      {
        name: "JavaScript",
        description: "Web development",
        icon: Coffee
      },
      {
        name: "Java",
        description: "Enterprise applications",
        icon: Database
      }
    ]
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "RefreshCcwDot",
        description: "Modern web interfaces",
        icon: ReactIcon
      }
    ]
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        description: "JavaScript runtime",
        icon: Server
      },
      {
        name: "Django",
        description: "Terminal web framework",
        icon: Zap
      },
      {
        name: "Flask",
        description: "Lightweight Terminal framework",
        icon: GitBranch
      }
    ]
  }
];

export default function Skills() {
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
          Skills
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I specialize in
        </p>
      </motion.div>

      {/* Skills Categories */}
      <motion.div
        className="space-y-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {/* Category Title */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            >
              {category.title}
            </motion.h2>

            {/* Skills Grid */}
            <div
              className={`grid gap-8 ${
                category.skills.length === 1
                  ? "grid-cols-1 max-w-lg mx-auto"
                  : category.skills.length === 3
                  ? "grid-cols-1 md:grid-cols-3"
                  : "grid-cols-2 md:grid-cols-4"
              }`}
            >
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(229, 9, 20, 0.5)"
                    }}
                    className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-primary transition-all duration-300 group cursor-pointer"
                  >
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="flex justify-center mb-6"
                    >
                      <div className="p-4 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                        <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                    </motion.div>

                    {/* Name */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {skill.description}
                    </p>

                    {/* Hover Indicator */}
                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-red-600 mx-auto group-hover:w-12 transition-all duration-300 rounded-full" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Additional Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 bg-gradient-to-r from-card/40 to-primary/5 border border-gray-800 rounded-xl p-12 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">
          & More!
        </h3>
        <p className="text-gray-300 mb-8 text-lg">
          I'm also experienced with Docker, Git, AWS, Tailwind CSS, GraphQL, REST APIs, and many other tools and technologies.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
          {["Docker", "Git", "AWS", "GraphQL", "REST"].map((tech) => (
            <div
              key={tech}
              className="px-4 py-3 bg-gray-900/60 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all cursor-default font-medium"
            >
              {tech}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
