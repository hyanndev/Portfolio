import { useInView } from '../../hooks/useInView'

const hidden = {
  up: 'opacity-0 translate-y-7',
  left: 'opacity-0 -translate-x-8',
  right: 'opacity-0 translate-x-8',
  scale: 'opacity-0 scale-95 translate-y-4',
}
const shown = 'opacity-100 translate-x-0 translate-y-0 scale-100'

/** Faz o conteúdo surgir suavemente quando entra na tela. `delay` (ms) escalona itens vizinhos. */
export default function Reveal({ from = 'up', delay = 0, className = '', children }) {
  const [ref, seen] = useInView()
  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-[opacity,transform] duration-700 ease-out ${seen ? shown : `will-change-[opacity,transform] ${hidden[from]}`} ${className}`}
    >
      {children}
    </div>
  )
}
