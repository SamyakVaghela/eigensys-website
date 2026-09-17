import { useEffect, useState } from 'react'

/** A Date that updates every `interval` ms. */
export function useClock(interval = 1000) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), interval)
    return () => window.clearInterval(id)
  }, [interval])

  return now
}

export function formatTime(date, timeZone, withSeconds = false) {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    ...(withSeconds ? { second: '2-digit' } : {}),
    hour12: false,
    timeZone,
  }).format(date)
}
