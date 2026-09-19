import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Plus } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'
import { services } from '../content/services'

const ease = [0.22, 1, 0.36, 1]

function DetailPanel({ service, index }) {
  return (
    <div className="relative mt-12 hidden overflow-hidden rounded-2xl border border-line bg-mist lg:sticky lg:top-24 lg:flex lg:max-h-[calc(100dvh-7rem)] lg:flex-col">
      <div className="dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative flex shrink-0 items-center justify-between border-b border-line px-5 py-3">
        <span className="eyebrow">Service detail</span>
        <span className="font-mono text-[0.6875rem] text-ash tabular-nums">
          {String(index + 1).padStart(2, '0')} / {services.length}
        </span>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={service.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease }}
          className="relative min-h-0 flex-1 overflow-y-auto p-6"
          aria-live="polite"
        >
          <p className="eyebrow">{service.group}</p>
          <p className="mt-2 text-2xl font-medium tracking-[-0.02em] text-ink">{service.name}</p>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-graphite">{service.summary}</p>
          <p className="eyebrow mt-6">You receive</p>
          <ul className="mt-2 space-y-1.5">
            {service.outputs.map((output) => (
              <li key={output} className="flex items-center gap-2.5 text-sm text-ink">
                <span className="h-px w-3 bg-accent" aria-hidden="true" />
                {output}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function ServiceRow({ service, index, active, open, onActivate, onToggle }) {
  const number = String(index + 1).padStart(2, '0')
  const panelId = `service-${index}`

  return (
    <li className="border-b border-line">
      <button
        type="button"
        onMouseEnter={onActivate}
        onFocus={onActivate}
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        data-active={active || undefined}
        className="group relative flex w-full items-center gap-4 py-5 text-left sm:py-6"
      >
        <span
          aria-hidden="true"
          className="absolute inset-y-0 -right-3 -left-3 origin-bottom scale-y-0 rounded-lg bg-mist transition-transform duration-500 ease-studio group-hover:scale-y-100 group-data-active:lg:scale-y-100"
        />
        <span className="relative w-7 shrink-0 font-mono text-xs text-accent tabular-nums transition-all duration-500 ease-studio lg:-translate-x-2 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 lg:group-data-active:translate-x-0 lg:group-data-active:opacity-100">
          {number}
        </span>
        <span className="relative flex-1 text-[1.3125rem] font-medium tracking-[-0.025em] transition-transform duration-500 ease-studio group-hover:translate-x-1.5 sm:text-[1.625rem] lg:group-data-active:translate-x-1.5">
          {service.name}
        </span>
        <span className="relative hidden font-mono text-[0.6875rem] tracking-[0.06em] text-ash uppercase sm:block">
          {service.group}
        </span>
        <ArrowUpRight
          aria-hidden="true"
          strokeWidth={1.5}
          className="relative hidden size-5 -translate-x-2 opacity-0 transition-all duration-500 ease-studio group-hover:translate-x-0 group-hover:opacity-100 lg:block lg:group-data-active:translate-x-0 lg:group-data-active:opacity-100"
        />
        <Plus
          aria-hidden="true"
          strokeWidth={1.5}
          className={`relative size-5 shrink-0 text-ash transition-transform duration-300 lg:hidden ${open ? 'rotate-45' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden lg:hidden"
          >
            <div className="pb-6 pl-11">
              <p className="text-[0.9375rem] leading-relaxed text-graphite">{service.summary}</p>
              <p className="mt-3 font-mono text-xs text-ash">{service.outputs.join(' · ')}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default function Services() {
  const [active, setActive] = useState(4) // RAG & Knowledge Systems
  const [open, setOpen] = useState(null)

  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-line">
      <div className="frame guides py-24 sm:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="text-accent tabular-nums">02</span>
                <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
                <span>Services</span>
              </p>
            </Reveal>
            <Reveal as="h2" id="services-title" className="heading mt-6 text-[clamp(2.25rem,4.6vw,3.75rem)]">
              Technical depth. Practical execution.
            </Reveal>
            <Reveal as="p" delay={0.08} className="mt-6 max-w-[44ch] text-[1.0625rem] leading-relaxed text-graphite">
              Sixteen disciplines, one team. Most projects draw on three or four of them — we bring the ones the problem
              actually needs.
            </Reveal>
            <DetailPanel service={services[active]} index={active} />
          </div>

          <Reveal className="lg:col-span-7">
            <ul className="border-t border-line">
              {services.map((service, index) => (
                <ServiceRow
                  key={service.name}
                  service={service}
                  index={index}
                  active={active === index}
                  open={open === index}
                  onActivate={() => setActive(index)}
                  onToggle={() => setOpen((current) => (current === index ? null : index))}
                />
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
