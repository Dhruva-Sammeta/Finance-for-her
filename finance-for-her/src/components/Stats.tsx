import React from 'react'
import { motion } from 'framer-motion'
import { stats } from '../data/stats'

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Impact</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Finance For Her is creating measurable change in financial literacy across India.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`${stat.color} rounded-xl p-8 shadow-soft hover:shadow-medium transition-all`}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-navy mb-2"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="font-bold text-navy mb-2">{stat.label}</div>
              <p className="text-sm text-slate-700">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
