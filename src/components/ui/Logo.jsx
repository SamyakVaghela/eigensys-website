import { site } from '../../content/site'

/**
 * EigenSys mark.
 *
 * Two vectors leave the same origin inside a black tile. The grey one is
 * where an arbitrary vector lands after the transformation — rotated off
 * its line. The orange one is the eigenvector: same direction, only
 * scaled. That is the whole idea of the name in one glyph.
 */
export default function Logo({ className = '', size = 22 }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
        <rect width="32" height="32" rx="7" className="fill-ink" />
        {/* axes */}
        <path d="M6 26h20M6 26V6" className="stroke-paper" strokeOpacity="0.22" strokeWidth="1" />
        {/* transformed vector — knocked off its line */}
        <path d="M6 26 15.5 9.5" className="stroke-paper" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
        {/* eigenvector — same direction, scaled */}
        <g className="stroke-accent" fill="none" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 26 25 7" />
          <path d="M18.6 7h6.4v6.4" />
        </g>
      </svg>
      <span className="text-[0.9375rem] font-semibold tracking-[0.2em]">
        {site.wordmarkLead}
        <span className="text-accent">{site.wordmarkTail}</span>
      </span>
    </span>
  )
}
