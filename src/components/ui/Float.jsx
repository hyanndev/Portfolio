import { useEffect, useRef } from 'react'

/**
 * Faz o conteúdo flutuar devagar (só transform, rodando na GPU). Quando sai da tela
 * a animação pausa, para não gastar bateria nem processamento.
 */
export default function Float({ children }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => {
      el.style.animationPlayState = e.isIntersecting ? 'running' : 'paused'
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className="animate-float will-change-transform">
      {children}
    </div>
  )
}
