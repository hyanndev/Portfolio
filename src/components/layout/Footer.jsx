import { profile } from '../../data/profile'

export default function Footer() {
  return (
    <footer className="pb-[max(40px,env(safe-area-inset-bottom,0px))] text-sm text-muted">
      © 2026 {profile.name} · {profile.location}
    </footer>
  )
}
