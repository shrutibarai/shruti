import { motion } from 'framer-motion'
import { experience } from '../data.js'
import { useParallax } from '../hooks/useParallax.js'

export default function Experience() {
  const { ref, y } = useParallax(45)

  return (
    <section id="experience" className="experience-section" ref={ref}>
      <motion.div
        className="float-shape"
        style={{ width: 200, height: 200, background: 'var(--accent-3)', bottom: '5%', right: -60, y }}
      />
      <div className="wrap">
        <div className="section-kicker">03 · Experience</div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Where I've worked
        </motion.h2>
        <p className="section-sub">From frontend components to owning backend features end to end.</p>

        <div className="timeline">
          {experience.map((job) => (
            <motion.div
              className="tl-item"
              key={job.org}
              initial={{ opacity: 0, x: -46 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div className="tl-role">{job.role}</div>
              <div className="tl-org">{job.org}</div>
              <div className="tl-date">{job.date}</div>
              <ul>
                {job.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
