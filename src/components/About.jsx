import { Cpu, Code2, Zap, Infinity as Loop } from 'lucide-react'
import Reveal from './ui/Reveal'
import { principles } from '../content/approach'
import { site } from '../content/site'
import { formatTime, useClock } from '../hooks/useClock'

const icons = [Cpu, Code2, Zap, Loop]

// Cities shown on the time meridian. India is home.
const cities = [
  { city: 'San Francisco', zone: 'America/Los_Angeles' },
  { city: 'New York', zone: 'America/New_York' },
  { city: 'London', zone: 'Europe/London' },
  { city: 'Dubai', zone: 'Asia/Dubai' },
  { city: 'India', zone: site.timezone, home: true },
  { city: 'Singapore', zone: 'Asia/Singapore' },
  { city: 'Sydney', zone: 'Australia/Sydney' },
]

function Meridian() {
  const now = useClock(1000)

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <p className="eyebrow !text-band-muted">Local time, live</p>
        <p className="font-mono text-[0.6875rem] text-band-muted">{site.timezoneLabel}</p>
      </div>

      <p className="mt-4 text-[clamp(2.5rem,6vw,4rem)] leading-none font-light tracking-[-0.04em] text-band-text tabular-nums">
        {formatTime(now, site.timezone, true)}
      </p>

      <div className="relative mt-8">
        <span aria-hidden="true" className="absolute top-[5px] right-0 left-0 hidden h-px bg-band-line sm:block" />
        <ol className="relative grid grid-cols-4 gap-y-6 sm:grid-cols-7">
          {cities.map((c) => (
            <li key={c.city} className={`flex flex-col ${c.home ? 'text-accent' : 'text-band-muted'}`}>
              <span
                aria-hidden="true"
                className={`block size-[11px] rounded-full border ${
                  c.home ? 'border-accent bg-accent' : 'border-band-muted/50 bg-transparent'
                }`}
              />
              <span className="mt-3 text-[0.6875rem] leading-tight">{c.city}</span>
              <span className="mt-0.5 font-mono text-[0.6875rem] tabular-nums">{formatTime(now, c.zone)}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="on-band bg-band text-band-text">
      <div className="frame guides py-24 sm:py-32 lg:py-40">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-3">
            <p className="eyebrow flex items-center gap-3 !text-band-muted">
              <span className="text-accent tabular-nums">07</span>
              <span aria-hidden="true" className="h-px w-6 bg-band-line" />
              <span>Why {site.name}</span>
            </p>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal as="h2" id="about-title" className="display text-[clamp(2.75rem,7.6vw,6.5rem)]">
              Small team.
              <br />
              <span className="text-accent">Serious engineering.</span>
            </Reveal>
            <Reveal as="p" delay={0.08} className="mt-8 max-w-[56ch] text-lg leading-relaxed text-band-muted">
              {site.name} is a compact group of AI developers and engineers. The people you speak to on the first call
              are the people who design, write and ship the system.
            </Reveal>

            <Reveal delay={0.14}>
              <figure className="mt-10 max-w-[64ch] border-l-2 border-accent pl-5 sm:pl-6">
                <p className="text-[1.375rem] tracking-[-0.01em] sm:text-2xl">
                  {site.etymology.term}
                  <span className="text-band-muted"> — {site.etymology.gloss}</span>
                </p>
                <figcaption className="mt-3 text-[0.9375rem] leading-relaxed text-band-muted">
                  {site.etymology.note}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-band-line bg-band-line sm:mt-24 sm:grid-cols-2 xl:grid-cols-4">
          {principles.map((principle, index) => {
            const Icon = icons[index]
            return (
              <div key={principle.title} className="group bg-band-raised p-6 sm:p-8">
                <Reveal delay={index * 0.06}>
                  <span className="inline-flex size-10 items-center justify-center rounded-xl border border-band-line text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-btn-text">
                    <Icon className="size-[1.125rem]" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-8 text-xl font-medium tracking-[-0.02em]">{principle.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-band-muted">{principle.body}</p>
                </Reveal>
              </div>
            )
          })}
        </div>

        <div className="mt-3 grid gap-12 rounded-2xl border border-band-line bg-band-raised p-6 sm:p-10 lg:grid-cols-12 lg:gap-8 lg:p-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow !text-band-muted">Location</p>
            <p className="heading mt-5 text-[clamp(2.25rem,4.6vw,3.75rem)]">
              Built in India.
              <br />
              Built for anywhere.
            </p>
            <p className="mt-6 max-w-[44ch] text-[1.0625rem] leading-relaxed text-band-muted">
              {site.name} is based in India and works with ambitious businesses globally — async by default, with
              working hours that overlap Europe, the Gulf and Asia-Pacific.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:self-end">
            <Meridian />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
