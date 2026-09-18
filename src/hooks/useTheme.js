import { useCallback, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'eigensys-theme'

/**
 * Light/dark theme, resolved to a concrete value.
 *
 * With no stored choice the site follows the operating system — the inline
 * script in index.html applies it before first paint, so there is no flash.
 * Choosing a theme pins it for this browser.
 *
 * The value is kept in one module-level store so every component that reads
 * it (the toggle, the shell, the canvas) always agrees.
 */

const media = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : null

function readStored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function resolve() {
  return readStored() ?? (media?.matches ? 'dark' : 'light')
}

let current = typeof window === 'undefined' ? 'light' : resolve()
const listeners = new Set()

function apply(next) {
  current = next
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = next
  }
  listeners.forEach((fn) => fn())
}

if (media) {
  // Keep following the OS until the visitor picks a side.
  media.addEventListener('change', () => {
    if (!readStored()) apply(media.matches ? 'dark' : 'light')
  })
}

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useTheme() {
  const theme = useSyncExternalStore(
    subscribe,
    () => current,
    () => 'light',
  )

  const toggle = useCallback(() => {
    const next = current === 'dark' ? 'light' : 'dark'
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* private browsing — the choice just won't be remembered */
    }
    apply(next)
  }, [])

  return { theme, toggle }
}
