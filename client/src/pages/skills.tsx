import { motion } from "framer-motion";
import { 
  Code2, 
  Database,
  Server,
  Brain,
  Package,
  Zap,
  GitBranch,
  Figma,
  Container,
  Layers
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "TypeScript",
        description: "Typed JavaScript superset",
        icon: Code2
      },
      {
        name: "React",
        description: "Modern web interfaces",
        icon: Code2
      },
      {
        name: "Vue.js",
        description: "Progressive JavaScript framework",
        icon: Code2
      },
      {
        name: "Angular",
        description: "TypeScript-based web apps",
        icon: Code2
      },
      {
        name: "Svelte",
        description: "Reactive web apps",
        icon: Code2
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework",
        icon: Code2
      },
      {
        name: "Next.js",
        description: "React framework for production",
        icon: Code2
      },
      {
        name: "Framer Motion",
        description: "Animation library for React",
        icon: Code2
      }
    ]
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        description: "Server-side JavaScript",
        icon: Server
      },
      {
        name: "Django",
        description: "Python web framework",
        icon: Zap
      },
      {
        name: "Flask",
        description: "Lightweight Python framework",
        icon: Package
      },
      {
        name: "Express.js",
        description: "Fast, unopinionated web framework",
        icon: Server
      },
      {
        name: "GraphQL",
        description: "API query language",
        icon: Server
      },
      {
        name: "REST APIs",
        description: "Representational State Transfer",
        icon: Server
      },
      {
        name: "PostgreSQL",
        description: "Relational database",
        icon: Database
      },
      {
        name: "Firebase",
        description: "Backend-as-a-Service",
        icon: Database
      },
    ]
  },
  {
    title: "AI/ML",
    skills: [
      {
        name: "TensorFlow",
        description: "Deep learning framework",
        icon: Brain
      },
      {
        name: "PyTorch",
        description: "Machine learning library",
        icon: Layers
      },
      {
        name: "scikit-learn",
        description: "Machine learning library",
        icon: Database
      }
    ]
  },
  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        description: "NoSQL database",
        icon: Database
      },
      {
        name: "MySQL",
        description: "Relational database",
        icon: Database
      },
      {
        name: "SQLite",
        description: "Lightweight database",
        icon: Database
      }
    ]
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "Container",
        description: "Containerization",
        icon: Container
      },
      {  
        name: "Kubernetes",
        description: "Container orchestration",
        icon: Container
      },
      {
        name: "AWS",
        description: "Cloud computing services",
        icon: Container
      },
      {
        name: "CI/CD",
        description: "Continuous Integration/Delivery",
        icon: Container
      },
      {
        name: "Docker",
        description: "Container platform",
        icon: Container
      }
    ]
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git & GitHub",
        description: "Version control system and code hosting platform",
        icon: GitBranch
      },
      {
        name: "Figma",
        description: "UI/UX design",
        icon: Figma
      },
      {        
        name: "VS Code",
        description: "Code editor",
        icon: Code2
      },
      {
        name: "GitHub",
        description: "Code hosting platform",
        icon: GitBranch
      },
      {
        name: "Vercel",
        description: "Frontend deployment",
        icon: Zap
      },
      {
        name: "Netlify",
        description: "Web hosting service",
        icon: Zap
      },
      {
        name: "Jenkins",
        description: "Automation server",
        icon: Zap
      },
      {
        name: "Postman",
        description: "API testing tool",
        icon: Zap
      },
      {
        name: "Webpack",
        description: "Module bundler",
        icon: Zap
      },
      {
        name: "Babel",
        description: "JavaScript compiler",
        icon: Zap
      },
      {
        name: "ESLint",
        description: "JavaScript linter",
        icon: Zap
      },
      {
        name: "Prettier",
        description: "Code formatter",
        icon: Zap
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
              className="text-2xl md:text-3xl font-bold text-white text-center mb-8"
            >
              {category.title}
            </motion.h2>

            {/* Skills Grid */}
            <div
              className={`flex flex-wrap justify-center gap-8 ${
                category.skills.length === 1
                  ? "w-full"
                  : category.skills.length === 2
                  ? "w-full"
                  : "w-full"
              }`}
            >
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.icon;
                const colSpan = 
                  category.skills.length === 1 
                    ? "w-full max-w-md" 
                    : category.skills.length === 2 
                    ? "w-full md:w-1/3"
                    : "w-full md:w-1/3";

                return (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(229, 9, 20, 0.5)"
                    }}
                    className={`${colSpan} bg-gray-900/60 border border-gray-800 rounded-lg p-8 text-center hover:border-primary transition-all duration-300 group cursor-pointer`}
                  >
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="flex justify-center mb-4"
                    >
                      <Icon className="w-10 h-10 text-primary group-hover:text-red-400 transition-colors" />
                    </motion.div>

                    {/* Name */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {skill.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
