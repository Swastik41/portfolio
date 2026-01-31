import { motion } from "framer-motion";
import { CheckCircle2, Zap, Code2, Lightbulb, Users, Target, Rocket, BookOpen } from "lucide-react";
import { DATA } from "@/lib/data";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const passions = [
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Tackling complex challenges with creative, scalable solutions"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices in web development"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Building cutting-edge applications that push the boundaries of web tech"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working with teams to create impactful digital experiences"
    }
  ];

  const expertise = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "RESTful APIs"],
      color: "from-red-500 to-orange-400"
    },
    {
      category: "Full Stack",
      items: ["MERN Stack", "Database Design", "API Development", "Deployment"],
      color: "from-purple-500 to-pink-400"
    }
  ];

  return (
    <section className="pt-32 pb-20">
      {/* Hero Section */}
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1.5 w-12 bg-gradient-to-r from-primary to-red-600"></div>
            <p className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-widest">Who I Am</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {DATA.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            {DATA.bio}
          </p>
        </motion.div>
      </div>

      {/* Passion Cards */}
      <div className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              My Passion
            </span>
          </h2>
          <p className="text-gray-300 text-lg">What drives me as a developer</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {passions.map((passion, index) => {
            const Icon = passion.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700 rounded-xl p-6 hover:border-primary/50 transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mb-4"
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2">{passion.title}</h3>
                <p className="text-gray-400 text-sm">{passion.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* About Content */}
      <div className="section-container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                About My Journey
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {DATA.about}
              </p>
            </div>
            
            <div className="pt-4 border-t border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Key Achievements</h3>
              <div className="space-y-3">
                {[
                  "30% Performance Improvement: Optimized web applications using modern frameworks at Enlighten Infosystems",
                  "Full Stack Expert: 3+ years building responsive applications with React, Node.js, and PostgreSQL",
                  "6 Production Projects: E-commerce platforms, social dashboards, fitness trackers, and more",
                  "Cross-Functional Collaboration: Reduced project turnaround by 30% through effective team coordination",
                  "Database Optimization: Designed and optimized schemas for improved application performance",
                  "Code Quality Focus: Implemented OOP principles for maintainable and scalable applications"
                ].map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              My Expertise
            </h2>
            
            {expertise.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700 rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                  <h3 className="text-lg font-bold text-white">{exp.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.items.map((item, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-800/80 border border-gray-700 text-sm text-gray-300 rounded-full hover:border-primary/50 transition-all"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="section-container py-20">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "3+" },
            { label: "Projects Delivered", value: "10+" },
            { label: "Happy Clients", value: "15+" },
            { label: "Tech Stack", value: "20+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-800/30 rounded-xl p-6 text-center hover:border-primary/50 transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-900/30 to-red-800/20 border border-red-700/50 rounded-2xl p-12 text-center"
        >
          <Zap className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm passionate about creating exceptional web applications that solve real problems. Let's collaborate!
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-600/50 transition-all"
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
