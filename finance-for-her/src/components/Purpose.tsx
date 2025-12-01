import React from 'react'
import { motion } from 'framer-motion'

const Purpose: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-lavender-light/30 to-green-light/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Mission & Vision</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Breaking barriers, building futures.</p>
        </motion.div>

        {/* Mission Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-soft p-8 md:p-12 mb-12 border-l-4 border-lavender"
        >
          <blockquote className="space-y-4">
            <p className="text-lg md:text-xl text-navy font-semibold leading-relaxed">
              "The initiative addresses a long-standing perception of money management as a male-dominated domain and
              seeks to break this stigma by building women's financial confidence and independence."
            </p>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              "Our goal is to ensure every woman, regardless of her background, understands how to manage her money
              effectively."
            </p>
          </blockquote>
        </motion.div>

        {/* Three Purpose Blocks */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🔥',
              title: 'Breaking Stigma',
              description:
                'Challenging outdated perceptions about women and financial decision-making by demonstrating that women are capable money managers.',
              color: 'from-lavender',
            },
            {
              icon: '🌱',
              title: 'Building Independence',
              description:
                'Creating pathways to long-term economic independence through practical skills and financial confidence.',
              color: 'from-green-light',
            },
            {
              icon: '💪',
              title: 'Empowering Communities',
              description:
                'Reaching underserved communities and amplifying voices through peer-to-peer learning and local leadership.',
              color: 'from-blue-100',
            },
          ].map((purpose, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`bg-gradient-to-br ${purpose.color} to-transparent rounded-xl p-8 shadow-soft hover:shadow-medium transition-all`}
            >
              <div className="text-4xl mb-4">{purpose.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">{purpose.title}</h3>
              <p className="text-slate-700">{purpose.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Purpose
