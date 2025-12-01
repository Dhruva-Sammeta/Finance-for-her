import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-soft-off-white via-lavender-light/20 to-green-light/30 py-24 md:py-32"
    >
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-10 left-5 w-72 h-72 rounded-full bg-lavender-light/30 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-green-light/30 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-soft"
              variants={itemVariants}
            >
              <img src="/logo.svg" alt="Finance For Her" className="w-8 h-8" />
              <span className="text-sm font-semibold text-navy">Finance For Her</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight"
              variants={itemVariants}
            >
              Empowering Rural & Low-Income Women Through Financial Literacy
            </motion.h1>

            <motion.p className="text-lg text-slate-700 max-w-md" variants={itemVariants}>
              Over 1,500 beneficiaries across Telangana, Andhra Pradesh, Delhi & Kolkata learning to manage their
              money with confidence.
            </motion.p>

            <motion.div className="flex gap-4" variants={itemVariants}>
              <button className="px-8 py-3 bg-navy text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-soft">
                Explore Our Work
              </button>
              <button className="px-8 py-3 bg-lavender text-navy rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-soft">
                Get Involved
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Logo */}
          <motion.div
            className="relative h-96 flex items-center justify-center"
            variants={itemVariants}
          >
            <motion.img
              src="/logo.svg"
              alt="Finance For Her Logo"
              className="w-full max-w-sm drop-shadow-lg"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-white/80 backdrop-blur p-4 rounded-lg text-center shadow-soft"
            variants={itemVariants}
          >
            <p className="text-2xl font-bold text-navy">1500+</p>
            <p className="text-sm text-slate-600">Women Empowered</p>
          </motion.div>
          <motion.div
            className="bg-white/80 backdrop-blur p-4 rounded-lg text-center shadow-soft"
            variants={itemVariants}
          >
            <p className="text-2xl font-bold text-lavender">25+</p>
            <p className="text-sm text-slate-600">Training Sessions</p>
          </motion.div>
          <motion.div
            className="bg-white/80 backdrop-blur p-4 rounded-lg text-center shadow-soft"
            variants={itemVariants}
          >
            <p className="text-2xl font-bold text-green-light">4</p>
            <p className="text-sm text-slate-600">States Reached</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
