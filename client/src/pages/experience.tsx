import { motion } from "framer-motion";
import { Building2, Calendar, ChevronRight, GraduationCap } from "lucide-react";
import { DATA } from "@/lib/data";

// Education data (placeholder - update as needed)
const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    duration: "2020 - 2024",
    startDate: "2020",
    endDate: "2024",
    description: "Focused on software engineering, algorithms, and data structures"
  },
  {
    id: 2,
    degree: "High School Diploma",
    school: "High School Name",
    duration: "2016 - 2020",
    startDate: "2016",
    endDate: "2020",
    description: "Strong foundation in mathematics and science"
  }
];

export default function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
        className="mb-20 text-center"
      >
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-1 w-8 bg-primary"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Experience & Education
          </h1>
          <div className="h-1 w-8 bg-primary"></div>
        </div>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          My professional journey and educational background.
        </p>
      </motion.div>

      {/* Experience Section */}
      <div className="mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Professional Experience
        </motion.h2>

        {/* Experience Cards */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {DATA.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group bg-card/40 border border-gray-800 rounded-lg p-8 hover:border-primary hover:shadow-2xl hover:shadow-red-900/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-semibold mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-900/50 px-4 py-2 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">
                    {exp.startDate} - {exp.endDate}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Education Section */}
      <div className="mt-24 pt-20 border-t border-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Education
        </motion.h2>

        {/* Education Timeline */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="group relative pl-12"
            >
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div className="absolute left-3 top-14 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 border-2 border-primary group-hover:bg-primary/40 group-hover:scale-110 transition-all">
                <GraduationCap className="h-4 w-4 text-primary" />
              </div>

              {/* Card */}
              <div className="bg-card/40 border border-gray-800 rounded-lg p-8 hover:border-primary hover:shadow-2xl hover:shadow-red-900/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-semibold mt-1">{edu.school}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-900/50 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 text-center bg-card/40 border border-gray-800 rounded-lg p-12"
      >
        <h3 className="text-2xl font-bold text-white mb-4">
          Looking to hire or collaborate?
        </h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm always open to new opportunities and exciting projects. Let's work together!
        </p>
        <a
          href="/contact"
          className="inline-block bg-primary hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-sm transition-all hover:scale-105"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}
