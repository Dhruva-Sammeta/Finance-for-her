import React from 'react'
import { motion } from 'framer-motion'
import { timeline } from '../data/timeline'

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Journey</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">From a founding vision to national impact in just three years.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-lavender via-lavender-light to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
          />

          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}
              >
                {/* Content */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm font-bold text-lavender uppercase tracking-wider">Year {item.year}</span>
                    <h3 className="text-2xl font-bold text-navy mt-2">{item.title}</h3>
                  </motion.div>

                  <div className="space-y-3">
                    {item.highlights.map((highlight, hIdx) => (
                      <motion.div
                        key={hIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 + hIdx * 0.05 + 0.3 }}
                        viewport={{ once: true }}
                        className="flex gap-3 text-slate-700"
                      >
                        <span className="text-lavender font-bold mt-0.5">→</span>
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Image/Placeholder */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-64 rounded-xl overflow-hidden shadow-soft bg-gradient-to-br from-lavender-light/50 to-green-light/50 flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-slate-200 opacity-10" />
                  <span className="text-6xl">{idx === 0 ? '🏢' : idx === 1 ? '🤝' : '🚀'}</span>
                </motion.div>

                {/* Timeline dot */}
                <motion.div
                  className="hidden md:block absolute left-1/2 top-1/2 w-6 h-6 bg-white border-4 border-lavender rounded-full -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
