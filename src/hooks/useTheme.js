import { useCallback, useState } from 'react'

const root = () => document.documentElement

function isDark() {
  const explicit = root().getAttribute('data-theme')
  return explicit ? explicit === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
}

/** Alterna entre claro e escuro e lembra a escolha (sem quebrar se o armazenamento estiver bloqueado). */
export function useTheme() {
  const [dark, setDark] = useState(isDark)
  const toggle = useCallback(() => {
    const next = isDark() ? 'light' : 'dark'
    root().setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch { /* ignora */ }
    setDark(next === 'dark')
  }, [])
  return { dark, toggle }
}
