import { motion, useMotionValue, useSpring } from 'framer-motion'
import { profile } from '../data.js'

export default function Contact() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.hypot(dx, dy)
    if (dist < 180) {
      x.set(dx * 0.2)
      y.set(dy * 0.2)
    } else {
      x.set(0)
      y.set(0)
    }
  }
  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <section id="contact">
      <div className="wrap">
        <motion.div
          className="contact-box"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-kicker" style={{ justifyContent: 'center', display: 'flex' }}>06 · Contact</div>
          <h2 className="section-title">Let's work together</h2>
          <p>Open to frontend and full-stack opportunities. Reach out and I'll get back to you.</p>
          <div className="magnetic-wrap" onMouseMove={handleMove} onMouseLeave={handleLeave}>
            <motion.a
              href={`mailto:${profile.email}`}
              className="magnetic-btn"
              style={{ x: springX, y: springY }}
            >
              {profile.email}
            </motion.a>
          </div>
          <div className="contact-meta">{profile.location}</div>
        </motion.div>
      </div>
    </section>
  )
}
