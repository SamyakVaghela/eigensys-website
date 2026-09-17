const styles = {
  Product: 'bg-ink text-paper border-ink',
  'Open source': 'bg-paper text-ink border-ink/70',
  'R&D': 'bg-mist text-ink border-line-strong',
  Concept: 'bg-transparent text-ash border-dashed border-ash/60',
}

/** Honest label for every piece of work. */
export default function KindTag({ kind, className = '' }) {
  return (
    <span
      className={`inline-flex h-6 items-center rounded-full border px-2.5 font-mono text-[0.6875rem] tracking-[0.04em] uppercase ${styles[kind] ?? styles['R&D']} ${className}`}
    >
      {kind}
    </span>
  )
}
