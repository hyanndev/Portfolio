import { useCallback, useRef, useState } from 'react'

/** Copia um texto e informa por 1,8 s que deu certo. Se o navegador recusar, `failed` fica true. */
export function useCopy(text) {
  const [state, setState] = useState('idle')
  const timer = useRef()
  const copy = useCallback(async () => {
    clearTimeout(timer.current)
    try {
      await navigator.clipboard.writeText(text)
      setState('copied')
    } catch {
      setState('failed')
    }
    timer.current = setTimeout(() => setState('idle'), 1800)
  }, [text])
  return { copy, state }
}
