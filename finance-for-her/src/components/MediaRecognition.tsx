import React from 'react'
import { motion } from 'framer-motion'
import { articles } from '../data/articles'

const MediaRecognition: React.FC = () => {
  return (
    <section id="media" className="py-16 md:py-24 bg-gradient-to-br from-navy to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">As Seen In</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Our impact has been recognized by leading news outlets and publications.
          </p>
        </motion.div>

        {/* Media Logo Strip */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {['Primary Finances', 'Telangana Tribune', 'Wake Up Telangana', 'The Hans India'].map((logo, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="h-20 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <span className="font-semibold text-center px-4 text-sm">{logo}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Article Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, idx) => (
            <motion.a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all group"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">📰</span>
                <span className="text-xs font-bold text-lavender-light">{article.source}</span>
              </div>

              <h3 className="font-bold mb-3 line-clamp-2 text-sm group-hover:text-lavender-light transition-colors">
                {article.title}
              </h3>

              <p className="text-xs text-slate-300 line-clamp-2 mb-4">{article.summary}</p>

              <span className="inline-flex items-center gap-2 text-xs font-semibold text-lavender-light group-hover:gap-3 transition-all">
                Read More <span>→</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaRecognition
