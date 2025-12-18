import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { Sparkles } from "lucide-react";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
        className="mb-16 text-center"
      >
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-1 w-8 bg-primary"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Skills & Expertise
          </h1>
          <div className="h-1 w-8 bg-primary"></div>
        </div>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiencies across the full stack.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {DATA.skills.map((skillGroup) => (
          <motion.div
            key={skillGroup.category}
            variants={itemVariants}
            className="group bg-card/40 border border-gray-800 rounded-lg p-8 hover:border-primary hover:shadow-2xl hover:shadow-red-900/50 transition-all duration-300 hover:scale-105"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {skillGroup.category}
              </h3>
            </div>

            {/* Skills Tags */}
            <div className="space-y-3">
              {skillGroup.items.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="inline-block mr-2 mb-2"
                >
                  <span className="px-4 py-2 bg-gray-900 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-default inline-block font-medium">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Progress bar for visual effect */}
            <div className="mt-8 pt-8 border-t border-gray-800">
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 font-semibold mb-2">Proficiency</p>
                  <div className="w-full bg-gray-900 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-red-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Skills Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-card/40 border border-gray-800 rounded-lg p-12 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">
          Always Learning
        </h3>
        <p className="text-gray-400 max-w-3xl mx-auto mb-8">
          I'm committed to continuous learning and staying updated with the latest technologies and best practices in web development. I actively explore new frameworks, tools, and methodologies to enhance my skills.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-gray-900/50 rounded-lg">
            <p className="text-3xl font-bold text-primary mb-2">50+</p>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-lg">
            <p className="text-3xl font-bold text-primary mb-2">3+</p>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-lg">
            <p className="text-3xl font-bold text-primary mb-2">100%</p>
            <p className="text-gray-400">Commitment</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
