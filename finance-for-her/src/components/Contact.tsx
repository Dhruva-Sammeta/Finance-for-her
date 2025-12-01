import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-navy to-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Have questions about our programs? Want to partner with us or volunteer? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-bold mb-2">Contact Information</h3>
              <p className="text-slate-300">
                Reach out to us through any of these channels. We typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:hello@financeforher.org"
                className="flex items-start gap-4 hover:bg-white/10 p-4 rounded-lg transition-colors"
              >
                <span className="text-2xl">📧</span>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-slate-300 text-sm">hello@financeforher.org</div>
                </div>
              </a>

              <a
                href="https://instagram.com/finance_forher"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:bg-white/10 p-4 rounded-lg transition-colors"
              >
                <span className="text-2xl">📱</span>
                <div>
                  <div className="font-semibold">Instagram</div>
                  <div className="text-slate-300 text-sm">@finance_forher</div>
                </div>
              </a>

              <div className="flex items-start gap-4 hover:bg-white/10 p-4 rounded-lg">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-slate-300 text-sm">
                    Hyderabad, Telangana, India
                    <br />
                    with chapters in Delhi, Kolkata, and Andhra Pradesh
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:border-lavender-light transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:border-lavender-light transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your inquiry..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:border-lavender-light transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-lavender to-lavender-light text-white font-semibold hover:shadow-lg transition-all"
            >
              Send Message
            </motion.button>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-200 text-sm"
              >
                ✓ Thanks for reaching out! We'll respond within 24 hours.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
