import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'anamnos-theme'

function systemPrefersDark() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
}

function stored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

/**
 * Light/dark theme.
 *
 * With no stored choice the page follows the operating system — the
 * inline script in index.html sets `data-theme` before first paint, so
 * there is no flash. Choosing a theme here pins it for this browser.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'light'
    return document.documentElement.dataset.theme || (systemPrefersDark() ? 'dark' : 'light')
  })

  // Keep following the OS until the visitor picks a side.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event) => {
      if (stored()) return
      const next = event.matches ? 'dark' : 'light'
      document.documentElement.dataset.theme = next
      setTheme(next)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      document.documentElement.dataset.theme = next
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* private browsing — the choice just won't be remembered */
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
