import { useEffect, useRef, useState } from 'react'

function CountUp({ value, suffix = '', duration = 1500 }) {
  const ref = useRef(null)
  const started = useRef(false)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const start = performance.now()

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(eased * value))
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

export default CountUp
