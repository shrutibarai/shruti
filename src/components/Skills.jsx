import { motion } from 'framer-motion'
import { skillGroups, marqueeSkills } from '../data.js'
import { useParallax } from '../hooks/useParallax.js'

const marqueeText = [...marqueeSkills, ...marqueeSkills].join('  ·  ') + '  ·  '

export default function Skills() {
  const { ref, y } = useParallax(50)

  return (
    <section id="skills" className="skills-section" style={{ background: 'var(--bg-2)' }} ref={ref}>
      <motion.div
        className="float-shape"
        style={{ width: 220, height: 220, background: 'var(--accent-2)', top: 0, left: -60, y }}
      />
      <div className="wrap">
        <div className="section-kicker">02 · Skills</div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Tools I work with
        </motion.h2>
        <p className="section-sub">Full-stack range — from React/Next.js interfaces to Rails APIs, databases and testing.</p>

        <div className="skill-groups">
          {skillGroups.map((group, i) => (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -46 : 46 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3>{group.title}</h3>
              <div className="tag-row">
                {group.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="marquee">
        <div className="track">{marqueeText}{marqueeText}</div>
      </div>
    </section>
  )
}
