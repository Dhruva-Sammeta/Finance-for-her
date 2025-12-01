import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryImages } from '../data/gallery'

const Gallery: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Impact in Photos</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Real moments from our workshops and community events across India.
          </p>
        </motion.div>

        {/* 3xN Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedId(image.id)}
              className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all cursor-pointer group"
            >
              {/* Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-lavender-light to-green-light flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="text-6xl opacity-40 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  📸
                </motion.div>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center text-navy font-bold text-xl"
                  >
                    +
                  </motion.div>
                </motion.div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-navy/60 to-transparent flex items-end p-4">
                <p className="text-white text-sm font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/finance_forher"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-lavender to-lavender-light text-white font-semibold shadow-soft hover:shadow-medium transition-all hover:scale-105"
          >
            Follow us on Instagram
            <span>→</span>
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute -top-10 right-0 text-white hover:text-lavender-light transition-colors"
              >
                ✕ Close
              </button>

              <div className="bg-gradient-to-br from-lavender-light to-green-light rounded-xl overflow-hidden aspect-video flex items-center justify-center text-6xl">
                📸
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
