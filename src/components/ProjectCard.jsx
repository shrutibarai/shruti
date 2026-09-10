import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function ProjectCard({ project, direction }) {
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })

  const rotateX = useTransform(springY, [0, 1], [8, -8])
  const rotateY = useTransform(springX, [0, 1], [-8, 8])
  const glowX = useTransform(x, [0, 1], ['0%', '100%'])
  const glowY = useTransform(y, [0, 1], ['0%', '100%'])

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }
  function handleLeave() {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      className="tilt-card"
      style={{ rotateX, rotateY, perspective: 700 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, x: direction === 'left' ? -46 : 46 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="glow" style={{ '--x': glowX, '--y': glowY }} />
      <span className="proj-tag">{project.tag}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="proj-stack">
        {project.stack.map((s) => <span key={s}>{s}</span>)}
      </div>
      {project.link && (
        <a className="proj-link" href={project.link} target="_blank" rel="noopener">
          View on GitHub ↗
        </a>
      )}
    </motion.div>
  )
}
