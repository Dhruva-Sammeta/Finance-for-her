import React from 'react'
import { motion } from 'framer-motion'
import { teamMembers } from '../data/team'

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-gradient-to-br from-soft-off-white to-lavender-light/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Meet Our Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Dedicated professionals and volunteers committed to empowering women through financial literacy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`${member.color} rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all`}
            >
              {/* Image Placeholder */}
              <div className="h-40 bg-gradient-to-br from-navy/10 to-navy/5 flex items-center justify-center text-5xl">
                👤
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-navy text-lg">{member.name}</h3>
                <p className="text-sm text-slate-600 font-medium mb-3">{member.role}</p>

                <blockquote className="text-sm text-slate-700 italic border-l-3 border-navy pl-3 py-2">
                  "{member.quote}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
