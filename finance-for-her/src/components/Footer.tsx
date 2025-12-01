import React from 'react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: '📱', href: 'https://www.instagram.com/finance_forher', label: 'Instagram' },
    { icon: '💼', href: 'https://www.linkedin.com/company/finance-for-her', label: 'LinkedIn' },
    { icon: '📧', href: 'mailto:contact@financeforher.org', label: 'Email' },
  ]

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Guides', href: '#guides' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lavender-light to-lavender flex items-center justify-center text-white font-bold">
                F
              </div>
              <div>
                <div className="font-bold text-lg">Finance For Her</div>
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              Building financial confidence for women, one session at a time.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-300">
              <span>💜</span>
              <span>Empowering 1,500+ women across India</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-lg">Pages</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-lavender-light transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.slice(4).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-lavender-light transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-lg">Connect With Us</h4>
            <a
              href="mailto:hello@financeforher.org"
              className="text-slate-300 hover:text-lavender-light transition-colors duration-300 text-sm block mb-6"
            >
              hello@financeforher.org
            </a>
            <div className="flex gap-4">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700 hover:bg-lavender transition-all duration-300 flex items-center justify-center text-lg hover:scale-110"
                  title={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
              className="text-slate-400 text-sm"
            >
              © {currentYear} Finance For Her. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-slate-400 text-sm md:text-right italic"
            >
              "Building financial confidence for women, one session at a time."
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
