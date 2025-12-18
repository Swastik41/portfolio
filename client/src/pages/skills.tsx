import { motion } from "framer-motion";
import { DATA } from "@/lib/data";

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
    <section className="section-container pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 flex items-center gap-3"
      >
        <div className="h-1 w-8 bg-primary"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Skills
        </h1>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {DATA.skills.map((skillGroup) => (
          <motion.div
            key={skillGroup.category}
            variants={itemVariants}
            className="bg-card/60 border border-gray-800 rounded-sm p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30"
          >
            <h2 className="text-lg font-bold text-white mb-4">{skillGroup.category}</h2>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-gray-900 text-gray-300 text-xs rounded font-medium border border-gray-700 hover:border-primary hover:text-primary transition-colors duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
