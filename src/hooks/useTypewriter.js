import { useEffect, useState } from 'react'

export function useTypewriter(phrases, { typeMs = 65, deleteMs = 35, holdMs = 1300 } = {}) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), holdMs)
    } else if (deleting && text === '') {
      setDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
    } else {
      timeout = setTimeout(() => {
        setText(current.slice(0, deleting ? text.length - 1 : text.length + 1))
      }, deleting ? deleteMs : typeMs)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, phraseIndex, phrases, typeMs, deleteMs, holdMs])

  return text
}
