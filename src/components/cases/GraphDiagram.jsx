import BrowserFrame from '../ui/BrowserFrame'

const edges = 'M60 130L140 60M60 130L140 200M140 60L240 80M140 200L240 170M240 80L240 170M240 80L350 50M240 170L350 200M350 50L350 200'
const plain = [
  ['B', 140, 200, 228],
  ['D', 240, 170, 198],
  ['E', 350, 200, 228],
]
const onRoute = [
  ['A', 140, 60, 38],
  ['C', 240, 80, 58],
]

export default function GraphDiagram() {
  return (
    <BrowserFrame url="grafo de propagação · ilustração">
      <div className="p-[18px]">
        <svg viewBox="0 0 420 250" role="img" aria-label="Grafo com um foco de incêndio, nós vizinhos e a rota mais curta até a base" className="block h-auto w-full">
          <path d={edges} stroke="var(--line)" strokeWidth="2" fill="none" />
          <path d="M60 130L140 60L240 80L350 50" stroke="var(--accent)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <g fontFamily="JetBrains Mono, monospace" fontSize="12" textAnchor="middle">
            <circle cx="60" cy="130" r="20" fill="#E8590C" />
            <text x="60" y="134" fill="#fff">foco</text>
            <circle cx="350" cy="50" r="20" fill="var(--ok)" />
            <text x="350" y="54" fill="#fff">base</text>
            {onRoute.map(([n, x, y, ty]) => (
              <g key={n}>
                <circle cx={x} cy={y} r="15" fill="var(--surface)" stroke="var(--accent)" strokeWidth="3" />
                <text x={x} y={ty} fill="var(--muted)">{n}</text>
              </g>
            ))}
            {plain.map(([n, x, y, ty]) => (
              <g key={n}>
                <circle cx={x} cy={y} r="15" fill="var(--surface)" stroke="var(--line)" strokeWidth="3" />
                <text x={x} y={ty} fill="var(--muted)">{n}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-[7px] bg-accent-soft px-[9px] py-1 font-mono text-[12.5px] font-medium text-tag">rota: foco → A → C → base</span>
          <span className="rounded-[7px] border border-line px-[9px] py-1 font-mono text-[12.5px] font-medium">Dijkstra</span>
        </div>
      </div>
    </BrowserFrame>
  )
}
