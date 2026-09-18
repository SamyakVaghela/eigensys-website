import Reveal from './Reveal'

/**
 * Section header. By default the mono index sits on a left rail with the
 * heading beside it; `stacked` puts them in one column for narrow rails.
 */
export default function SectionHeader({
  index,
  label,
  title,
  description,
  id,
  dark = false,
  stacked = false,
  children,
}) {
  const eyebrow = (
    <p className={`eyebrow flex items-center gap-3 ${dark ? '!text-band-muted' : ''}`}>
      <span className="text-accent tabular-nums">{index}</span>
      <span aria-hidden="true" className={`h-px w-6 ${dark ? 'bg-band-line' : 'bg-line-strong'}`} />
      <span>{label}</span>
    </p>
  )

  const heading = (
    <>
      <Reveal
        as="h2"
        id={id}
        className={`heading max-w-[18ch] ${stacked ? 'mt-6 text-[clamp(2.25rem,4.6vw,3.5rem)]' : 'text-[clamp(2.25rem,5.2vw,4.25rem)]'}`}
      >
        {title}
      </Reveal>
      {description && (
        <Reveal
          as="p"
          delay={0.08}
          className={`mt-6 max-w-[58ch] text-[1.0625rem] leading-relaxed sm:text-lg ${dark ? 'text-band-muted' : 'text-graphite'}`}
        >
          {description}
        </Reveal>
      )}
      {children}
    </>
  )

  if (stacked) {
    return (
      <div>
        <Reveal>{eyebrow}</Reveal>
        {heading}
      </div>
    )
  }

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      <Reveal className="lg:col-span-3">{eyebrow}</Reveal>
      <div className="lg:col-span-9">{heading}</div>
    </div>
  )
}
