import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'
import KindTag from './ui/KindTag'
import { visuals } from './WorkVisuals'
import { featuredWork, workDomains, workIndex } from '../content/work'

const ease = [0.22, 1, 0.36, 1]

const legend = [
  ['Product', 'Built in-house, end to end'],
  ['Open source', 'Public tools and libraries'],
  ['R&D', 'Research and engineering prototypes'],
  ['Concept', 'Designed, not yet shipped'],
]

const captions = {
  citations: 'Cited answer stream · illustrative data',
  terminal: 'CLI report · sample repository',
  graph: 'Control flow · LangGraph',
  cad: 'Prompt → parametric edit',
}

function CaseStudy({ study, index }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [14, -14])
  const Visual = visuals[study.visual]
  const flip = index % 2 === 1

  return (
    <article
      ref={ref}
      aria-labelledby={`${study.id}-title`}
      className="grid gap-10 border-t border-line py-14 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24"
    >
      <div className={`min-w-0 lg:col-span-5 ${flip ? 'lg:order-2 lg:col-start-8' : ''}`}>
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-mono text-xs text-ink tabular-nums">{String(index + 1).padStart(2, '0')}</span>
            <KindTag kind={study.kind} />
            <span className="eyebrow">
              {study.domain} · {study.year}
            </span>
          </div>
          <h3 id={`${study.id}-title`} className="heading mt-6 text-[clamp(2rem,4vw,3rem)]">
            {study.title}
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-charcoal">{study.summary}</p>
        </Reveal>

        <Reveal delay={0.06} className="mt-8 space-y-7">
          <div>
            <p className="eyebrow">The problem</p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-graphite">{study.problem}</p>
          </div>
          <div>
            <p className="eyebrow">What we built</p>
            <ul className="mt-3 space-y-2.5">
              {study.built.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-graphite">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-ink/50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-8 grid grid-cols-1 border-t border-line min-[480px]:grid-cols-3">
            {study.facts.map(([label, value]) => (
              <div
                key={label}
                className="border-b border-line py-3 min-[480px]:border-b-0 min-[480px]:py-4 min-[480px]:pr-3 min-[480px]:not-first:border-l min-[480px]:not-first:pl-3"
              >
                <dt className="eyebrow">{label}</dt>
                <dd className="mt-1 text-sm text-ink">{value}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technology">
            {study.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-line px-2 py-1 font-mono text-[0.6875rem] text-graphite"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal
        delay={0.05}
        className={`min-w-0 lg:col-span-7 ${flip ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-6'} lg:self-start lg:sticky lg:top-24`}
      >
        <figure className="overflow-hidden rounded-2xl border border-line bg-mist">
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5 sm:px-5">
            <span className="eyebrow shrink-0 whitespace-nowrap">Fig. {String(index + 2).padStart(2, '0')}</span>
            <figcaption className="eyebrow min-w-0 truncate pl-4">{captions[study.visual]}</figcaption>
          </div>
          <div className="relative overflow-hidden py-3 sm:py-4">
            <motion.div style={{ y }} className="relative">
              <Visual />
            </motion.div>
          </div>
        </figure>
      </Reveal>
    </article>
  )
}

function IndexRow({ item }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease }}
      className="group relative border-b border-line"
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 -right-3 -left-3 rounded-lg bg-mist opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative grid gap-3 py-6 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <h4 className="text-lg font-medium tracking-[-0.015em] transition-transform duration-500 ease-studio group-hover:translate-x-1">
              {item.title}
            </h4>
          </div>
          <div className="mt-2 flex items-center gap-2.5">
            <KindTag kind={item.kind} />
            <span className="font-mono text-[0.6875rem] text-ash md:hidden">
              {item.domain} · {item.year}
            </span>
          </div>
        </div>
        <div className="md:col-span-6">
          <p className="text-[0.9375rem] leading-relaxed text-graphite">{item.summary}</p>
          <p className="mt-2 font-mono text-[0.6875rem] text-ash">{item.stack.join(' · ')}</p>
        </div>
        <div className="hidden text-right md:col-span-2 md:block">
          <p className="font-mono text-[0.6875rem] text-graphite uppercase">{item.domain}</p>
          <p className="mt-1 font-mono text-[0.6875rem] text-ash tabular-nums">{item.year}</p>
        </div>
      </div>
    </motion.li>
  )
}

export default function Work() {
  const [domain, setDomain] = useState('All')
  const filtered = domain === 'All' ? workIndex : workIndex.filter((item) => item.domain === domain)

  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-line">
      <div className="frame guides pt-24 sm:pt-32 lg:pt-40">
        <SectionHeader
          id="work-title"
          index="03"
          label="Selected work"
          title="Built for real problems."
          description="Products, open-source tools and R&D from our own bench — plus a few worked concepts. Every piece is labelled for exactly what it is."
        >
          <Reveal delay={0.12}>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 md:grid-cols-4">
              {legend.map(([kind, meaning]) => (
                <div key={kind}>
                  <dt>
                    <KindTag kind={kind} />
                  </dt>
                  <dd className="mt-2 text-xs leading-relaxed text-ash">{meaning}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </SectionHeader>

        <div className="mt-16 sm:mt-24">
          {featuredWork.map((study, index) => (
            <CaseStudy key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>

      {/* Index of further work */}
      <div className="border-t border-line bg-paper">
        <div className="frame guides py-20 sm:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Index</p>
              <h3 className="heading mt-3 text-[clamp(1.75rem,3.2vw,2.5rem)]">More from the bench.</h3>
            </div>
            <div role="group" aria-label="Filter by practice" className="flex flex-wrap gap-1.5">
              {workDomains.map((option) => {
                const count = option === 'All' ? workIndex.length : workIndex.filter((w) => w.domain === option).length
                const selected = option === domain
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setDomain(option)}
                    className={`inline-flex h-8 items-center gap-2 rounded-full border px-3 text-[0.8125rem] transition-colors duration-200 ${
                      selected
                        ? 'border-ink bg-ink text-paper'
                        : 'border-line text-graphite hover:border-line-strong hover:text-ink'
                    }`}
                  >
                    {option}
                    <span
                      className={`font-mono text-[0.625rem] tabular-nums ${selected ? 'text-paper/60' : 'text-ash'}`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <ul className="mt-10 border-t border-line">
            <AnimatePresence mode="popLayout" initial={false}>
              {filtered.map((item) => (
                <IndexRow key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </section>
  )
}
