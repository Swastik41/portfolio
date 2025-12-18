import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { DATA } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 flex items-center gap-3"
      >
        <div className="h-1 w-8 bg-primary"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          About
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            {DATA.about}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {DATA.highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">{highlight}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
