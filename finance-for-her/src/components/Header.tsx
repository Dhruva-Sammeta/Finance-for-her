import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Guides', href: '#guides' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Team', href: '#team' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-soft">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lavender to-lavender-light flex items-center justify-center shadow-soft">
            <span className="text-xl font-bold text-white">F</span>
          </div>
          <div>
            <div className="text-lg font-bold text-navy group-hover:text-lavender transition-colors">Finance For Her</div>
            <div className="text-xs text-slate-500">Empowering women</div>
          </div>
        </a>

        <nav className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-600 hover:text-navy font-medium transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-green-light text-navy font-semibold hover:bg-opacity-80 transition-all shadow-soft hover:shadow-medium"
          >
            Contact
          </a>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <div className={`w-6 h-0.5 bg-navy transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-navy transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-navy transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-soft-off-white border-t border-slate-100"
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-600 hover:text-navy font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-lg bg-green-light text-navy font-semibold text-center"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header
