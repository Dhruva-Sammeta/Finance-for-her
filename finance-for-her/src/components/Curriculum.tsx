import React from 'react'
import { motion } from 'framer-motion'
import { curriculum } from '../data/curriculum'

const Curriculum: React.FC = () => {
  return (
    <section id="curriculum" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Curriculum</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive two-session program covering everything from basic financial terms to smart borrowing strategies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Session 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${curriculum.session1.color} rounded-xl p-8 md:p-10 text-white shadow-soft hover:shadow-medium transition-all`}
          >
            <h3 className="text-2xl font-bold mb-6">{curriculum.session1.title}</h3>
            <div className="grid grid-cols-2 gap-3">
              {curriculum.session1.topics.map((topic, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/20 rounded-lg p-3 text-sm font-medium backdrop-blur-sm"
                >
                  ✓ {topic}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Session 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${curriculum.session2.color} rounded-xl p-8 md:p-10 text-navy shadow-soft hover:shadow-medium transition-all`}
          >
            <h3 className="text-2xl font-bold mb-6">{curriculum.session2.title}</h3>
            <div className="grid grid-cols-2 gap-3">
              {curriculum.session2.topics.map((topic, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/50 rounded-lg p-3 text-sm font-medium backdrop-blur-sm"
                >
                  ✓ {topic}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Curriculum
