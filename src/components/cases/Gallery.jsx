import { useState } from 'react'
import { shots } from '../../data/cases'
import { asset } from '../../lib/asset'
import BrowserFrame from '../ui/BrowserFrame'

/** Galeria de telas do Pra Todos SP: só a aba ativa aparece, então não sobra espaço em branco. */
export default function Gallery() {
  const [active, setActive] = useState(0)
  const shot = shots[active]
  return (
    <BrowserFrame url={shot.url}>
      <div className="flex gap-1.5 overflow-x-auto border-b border-line px-2.5 py-2" role="tablist" aria-label="Telas do Pra Todos SP">
        {shots.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            id={`tab-${s.id}`}
            aria-selected={i === active}
            aria-controls="shot-panel"
            onClick={() => setActive(i)}
            className={`cursor-pointer whitespace-nowrap rounded-lg border border-transparent px-[11px] py-1.5 text-[13px] font-semibold ${
              i === active ? 'bg-accent-soft text-tag' : 'bg-transparent text-muted'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div id="shot-panel" role="tabpanel" aria-labelledby={`tab-${shot.id}`} className="bg-surface">
        <img
          key={shot.id}
          src={asset(shot.large[0])}
          srcSet={`${asset(shot.small[0])} ${shot.small[1]}w, ${asset(shot.large[0])} ${shot.large[1]}w`}
          sizes="(min-width: 861px) 560px, calc(100vw - 32px)"
          alt={shot.alt}
          width={shot.ratio[0]}
          height={shot.ratio[1]}
          loading={active === 0 ? 'lazy' : 'eager'}
          decoding="async"
          className="block h-auto w-full"
        />
      </div>
    </BrowserFrame>
  )
}
