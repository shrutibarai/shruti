import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '../data.js'
import { useTypewriter } from '../hooks/useTypewriter.js'
import { GithubIcon, LinkedinIcon, MailIcon } from './icons.jsx'

export default function Hero() {
  const heroRef = useRef(null)
  const typed = useTypewriter(profile.taglines)

  // Whole hero scrolls past → blobs and avatar drift at different rates
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const blobsY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <header className="hero" id="top" ref={heroRef}>
      <motion.div className="blobs" style={{ y: blobsY }}>
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </motion.div>

      <div className="wrap">
        <div className="hero-text">
          <div className="eyebrow">Hello, I'm</div>
          <h1 className="gradient-text">{profile.name}</h1>
          <div className="typewriter">{typed}</div>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get in touch</a>
          </div>
          <div className="social-row">
            <a href={`mailto:${profile.email}`} aria-label="Email" title="Email">
              <MailIcon />
            </a>
            <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">
              <GithubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <motion.div className="avatar-wrap" style={{ y: avatarY }}>
          <div className="avatar-float">
            <img
              className="illustration-img"
              src={`${import.meta.env.BASE_URL}hero-illustration.png`}
              alt={`${profile.name} — illustrated portrait`}
            />
          </div>
        </motion.div>
      </div>

      <div className="scroll-cue"><span>Scroll</span><span className="dot" /></div>
    </header>
  )
}
