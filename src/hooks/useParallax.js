import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'

// Scoped scroll-parallax: attach `ref` to the element you want to track,
// and use the returned motion value `y` (e.g. style={{ y }}) on the element
// you want to drift as the page scrolls past it.
export function useParallax(distance = 80) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance])
  return { ref, y }
}
