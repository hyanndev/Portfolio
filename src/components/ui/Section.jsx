const pads = {
  both: 'py-[clamp(56px,9vw,104px)]',
  noBottom: 'pt-[clamp(56px,9vw,104px)] pb-0',
  noTop: 'pb-[clamp(56px,9vw,104px)] pt-0',
}

import Reveal from './Reveal'

export default function Section({ id, pad = 'both', children }) {
  return (
    <section id={id} className={pads[pad]}>
      {children}
    </section>
  )
}

export function SectionTitle({ children, className = 'text-[clamp(30px,4.6vw,48px)]' }) {
  return (
    <Reveal>
      <h2 className={`max-w-[18ch] font-extrabold ${className}`}>{children}</h2>
    </Reveal>
  )
}

export function SectionLead({ children }) {
  return (
    <Reveal delay={90}>
      <p className="mt-3.5 max-w-[56ch] text-muted">{children}</p>
    </Reveal>
  )
}
