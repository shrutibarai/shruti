import { motion } from 'framer-motion'
import { projects, profile } from '../data.js'
import { useParallax } from '../hooks/useParallax.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  const { ref, y } = useParallax(55)

  return (
    <section id="projects" className="projects-section" style={{ background: 'var(--bg-2)' }} ref={ref}>
      <motion.div
        className="float-shape"
        style={{ width: 240, height: 240, background: 'var(--accent)', top: '8%', left: -70, y }}
      />
      <div className="wrap">
        <div className="section-kicker">04 · Projects</div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Things I've built
        </motion.h2>
        <p className="section-sub">Move your cursor over a card for a closer look — or check out the rest on GitHub.</p>

        <div className="tilt-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} direction={i % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>

        <div className="projects-more">
          <a href={profile.github} target="_blank" rel="noopener" className="btn btn-secondary">
            See all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
