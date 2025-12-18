import { motion } from "framer-motion";
import { Building2, Calendar, ChevronRight } from "lucide-react";
import { DATA } from "@/lib/data";

export default function Experience() {
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
            Experience
          </h1>
        </div>
        <p className="text-xl text-gray-400 max-w-2xl">
          My professional journey and key achievements in full-stack development.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {DATA.experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
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
