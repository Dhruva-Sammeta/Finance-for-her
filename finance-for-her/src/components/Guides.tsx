import React from 'react'
import { motion } from 'framer-motion'
import { guides } from '../data/guides'

const Guides: React.FC = () => {
  return (
    <section id="guides" className="py-16 md:py-24 bg-gradient-to-br from-soft-off-white to-lavender-light/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Learning Resources</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our comprehensive guides and interactive presentations to deepen your financial knowledge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, idx) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-all overflow-hidden group"
            >
              <div className="bg-gradient-to-br from-lavender to-lavender-light h-32 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-6xl">{guide.icon}</span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-navy mb-3">{guide.title}</h3>
                <p className="text-slate-600 text-sm mb-6">{guide.description}</p>

                <a
                  href={guide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-light text-navy font-semibold hover:bg-green-light/80 transition-all text-sm"
                >
                  View Guide
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Guides
