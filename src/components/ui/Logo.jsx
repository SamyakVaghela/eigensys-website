import { site } from '../../content/site'

/**
 * Wordmark with a recollection mark: an open loop that returns on itself,
 * closing on an accent dot — the shape of anamnesis, and of a system that
 * checks its own output before answering.
 */
export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
        <rect width="32" height="32" rx="7" className="fill-ink" />
        <path
          d="M23 16a7 7 0 1 0-4.6 6.57"
          fill="none"
          className="stroke-paper"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <circle cx="23" cy="16" r="2.6" className="fill-accent" />
      </svg>
      <span className="text-[0.9375rem] font-semibold tracking-[0.2em]">{site.wordmark}</span>
    </span>
  )
}
