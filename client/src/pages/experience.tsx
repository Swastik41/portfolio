import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { DATA } from "@/lib/data";

export default function Experience() {
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
          Experience
        </h1>
      </motion.div>

      <div className="space-y-8">
        {DATA.experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border-l-2 border-primary pl-6 py-2"
          >
            <div className="flex items-center gap-4 mb-2">
              <Building2 className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold text-white">{exp.role}</h2>
            </div>
            <p className="text-primary font-semibold mb-1">{exp.company}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Calendar className="w-4 h-4" />
              <span>{exp.duration}</span>
            </div>
            <ul className="space-y-2">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="text-gray-400 flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
