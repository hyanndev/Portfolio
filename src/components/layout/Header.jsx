import { profile } from '../../data/profile'
import { asset } from '../../lib/asset'
import { useTheme } from '../../hooks/useTheme'
import Button from '../ui/Button'

const links = [
  ['#experiencia', 'Experiência'],
  ['#cases', 'Projetos'],
  ['#stack', 'Stack'],
  ['#contato', 'Contato'],
]

function ThemeToggle() {
  const { dark, toggle } = useTheme()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar tema"
      title="Alternar tema"
      aria-pressed={dark}
      className="grid size-9 cursor-pointer place-items-center rounded-lg border border-line bg-surface p-0 text-ink"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 1.8a6.2 6.2 0 0 1 0 12.4z" fill="currentColor" />
      </svg>
    </button>
  )
}

export default function Header() {
  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-20 -mx-[max(16px,env(safe-area-inset-left,0px))] border-b border-line bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] px-[max(16px,env(safe-area-inset-left,0px))] backdrop-blur-[10px]">
      <div className="mx-auto flex h-[60px] max-w-[1120px] items-center gap-2.5 min-[761px]:gap-5">
        <a href="#topo" className="text-[19px] font-extrabold tracking-[-0.03em] no-underline">
          {profile.shortName}
          <b className="text-accent">.</b>dev
        </a>
        <nav aria-label="Seções" className="ml-auto hidden gap-[22px] text-[15px] min-[761px]:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="font-medium text-muted no-underline hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
        <span className="ml-auto flex items-center gap-2.5 min-[761px]:ml-0">
          <Button href={asset(profile.cv)} variant="primary" size="sm">
            Currículo (PDF)
          </Button>
          <ThemeToggle />
        </span>
      </div>
    </header>
  )
}
