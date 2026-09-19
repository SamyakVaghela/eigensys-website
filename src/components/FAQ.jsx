import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'
import { faqs } from '../content/faq'

const ease = [0.22, 1, 0.36, 1]

function Item({ faq, index, open, onToggle }) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <li className="border-b border-line">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-start gap-4 py-5 text-left sm:py-6"
        >
          <span className="mt-1.5 font-mono text-[0.6875rem] text-ash tabular-nums transition-colors group-hover:text-accent-text">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="flex-1 text-[1.0625rem] font-medium tracking-[-0.015em] sm:text-xl">{faq.q}</span>
          <Plus
            aria-hidden="true"
            strokeWidth={1.5}
            className={`mt-0.5 size-5 shrink-0 text-ash transition-all duration-300 ease-studio group-hover:text-ink ${
              open ? 'rotate-45 text-accent' : ''
            }`}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden"
          >
            <p className="max-w-[62ch] pb-6 pl-10 text-[0.9375rem] leading-relaxed text-graphite">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-line">
      <div className="frame guides py-24 sm:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                id="faq-title"
                index="08"
                label="Questions"
                title="Asked and answered."
                description="The things worth knowing before you send a brief."
                stacked
              />
              <Reveal delay={0.1}>
                <p className="mt-8 text-sm leading-relaxed text-ash">
                  Something not covered here?{' '}
                  <a
                    href="#contact"
                    className="text-accent-text underline decoration-accent-line underline-offset-4 transition-colors hover:decoration-current"
                  >
                    Ask us directly
                  </a>
                  .
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal className="lg:col-span-8">
            <ul className="border-t border-line">
              {faqs.map((faq, index) => (
                <Item
                  key={faq.q}
                  faq={faq}
                  index={index}
                  open={open === index}
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
