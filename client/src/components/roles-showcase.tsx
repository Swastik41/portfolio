import { motion } from "framer-motion";
import { Code2, Users, Zap, Rocket } from "lucide-react";

const roles = [
  {
    icon: Code2,
    title: "Developer",
    description: "Full-stack solutions"
  },
  {
    icon: Users,
    title: "Collaborator",
    description: "Team player"
  },
  {
    icon: Zap,
    title: "Problem Solver",
    description: "Creative thinker"
  },
  {
    icon: Rocket,
    title: "Innovator",
    description: "Always learning"
  }
];

export function RolesShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      className="section-container py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={itemVariants}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
          Who I Am
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Roles & Expertise
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {roles.map((role, index) => {
          const Icon = role.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card/60 border border-gray-800 rounded-lg p-6 hover:border-primary hover:shadow-2xl hover:shadow-red-900/50 transition-all duration-300 hover:scale-105 cursor-pointer text-center"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {role.title}
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {role.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
