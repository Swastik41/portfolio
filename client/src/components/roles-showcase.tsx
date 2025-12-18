import { motion } from "framer-motion";

const roles = [
  {
    emoji: "👨‍💻",
    title: "Developer",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-gradient-to-br from-blue-500 to-cyan-400"
  },
  {
    emoji: "🤝",
    title: "Collaborator",
    color: "from-gray-500 to-slate-400",
    bgColor: "bg-gradient-to-br from-gray-500 to-slate-400"
  },
  {
    emoji: "⚡",
    title: "Problem Solver",
    color: "from-red-600 to-pink-500",
    bgColor: "bg-gradient-to-br from-red-600 to-pink-500"
  },
  {
    emoji: "🚀",
    title: "Innovator",
    color: "from-amber-500 to-orange-400",
    bgColor: "bg-gradient-to-br from-amber-500 to-orange-400"
  }
];

export function RolesShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      className="section-container py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={itemVariants}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Who's Watching?
        </h2>
        <p className="text-xl text-gray-400">
          Different facets of my professional identity
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {roles.map((role, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1,
              rotateY: 5,
              rotateX: -5
            }}
            className="group cursor-pointer perspective"
          >
            <div className={`w-40 h-40 md:w-48 md:h-48 ${role.bgColor} rounded-lg flex items-center justify-center relative shadow-2xl hover:shadow-xl transition-all duration-300 transform`}>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition-opacity" />
              
              {/* Emoji/Face */}
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                className="text-8xl md:text-9xl drop-shadow-lg"
              >
                {role.emoji}
              </motion.div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            </div>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="mt-6 text-center text-lg md:text-xl font-semibold text-white group-hover:text-primary transition-colors"
            >
              {role.title}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
        className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mx-auto mt-20"
      />
    </motion.section>
  );
}
