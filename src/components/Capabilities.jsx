import { Fragment } from 'react'
import { capabilityStrip } from '../content/capabilities'

function Row({ hidden = false }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {capabilityStrip.map((item) => (
        <Fragment key={item}>
          <li className="px-6 text-[0.8125rem] font-medium tracking-[0.14em] whitespace-nowrap text-graphite uppercase sm:px-9">
            {item}
          </li>
          <li aria-hidden="true" className="font-mono text-xs text-accent">
            /
          </li>
        </Fragment>
      ))}
    </ul>
  )
}

/** Slow marquee of capabilities, paused on hover. */
export default function Capabilities() {
  return (
    <section aria-label="Capabilities" className="border-b border-line">
      <div className="frame guides flex items-stretch">
        <p className="eyebrow hidden shrink-0 items-center border-r border-line pr-8 md:flex">Capabilities</p>
        <div className="mask-fade-x group relative flex-1 overflow-hidden py-5 sm:py-6">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            <Row />
            <Row hidden />
          </div>
        </div>
      </div>
    </section>
  )
}
