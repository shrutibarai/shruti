import { motion } from 'framer-motion'
import { education } from '../data.js'

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="section-kicker">05 · Education</div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Academics
        </motion.h2>
        <motion.div
          className="edu-card"
          style={{ marginTop: 24 }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h3>{education.degree}</h3>
            <p>{education.school} · {education.date}</p>
          </div>
          <div className="edu-score">
            {education.score} <span style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 400 }}>/ 10 CGPA</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
