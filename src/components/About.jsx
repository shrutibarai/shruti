import { motion } from 'framer-motion'
import { about, stats } from '../data.js'
import { useParallax } from '../hooks/useParallax.js'

export default function About() {
  const { ref, y } = useParallax(60)

  return (
    <section id="about" className="about-section" ref={ref}>
      <motion.div
        className="float-shape"
        style={{ width: 260, height: 260, background: 'var(--accent)', top: '10%', right: -80, y }}
      />
      <div className="wrap">
        <div className="section-kicker">01 · About</div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          A full-stack developer who owns features end to end
        </motion.h2>
        <div className="about-grid" style={{ marginTop: 32 }}>
          <motion.div
            initial={{ opacity: 0, x: -46 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {about.map((p, i) => <p key={i}>{p}</p>)}
          </motion.div>
          <motion.div
            className="stat-grid"
            initial={{ opacity: 0, x: 46 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
