import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav>
        <div className="wrap">
          <a className="logo" href="#top">SB<span>.</span></a>
          <div className="nav-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <a className="nav-cta" href="#contact">Get in touch</a>
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {[...LINKS, { href: '#contact', label: 'Contact' }].map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
