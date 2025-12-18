import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { DATA } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

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
              <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
            </div>
            <p className="text-primary font-semibold mb-1">{exp.company}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4" />
              <span>{exp.duration}</span>
            </div>
            <ul className="space-y-2">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="text-muted-foreground flex items-start gap-3">
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
