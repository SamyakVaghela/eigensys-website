import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check, Copy } from 'lucide-react'
import ArrowButton from './ui/ArrowButton'
import Reveal from './ui/Reveal'
import { mailto, site } from '../content/site'

const briefChecklist = ['What you are building', 'Who it is for', 'Where it is stuck', 'When it needs to work']

function CopyEmail() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-line py-1 pr-1 pl-4">
      <a href={`mailto:${site.email}`} className="font-mono text-sm text-ink underline-offset-4 hover:underline">
        {site.email}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Email address copied' : 'Copy email address'}
        className="relative inline-flex size-9 items-center justify-center rounded-full text-graphite transition-colors hover:bg-mist hover:text-ink"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? 'check' : 'copy'}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
          >
            {copied ? <Check className="size-4" strokeWidth={1.75} /> : <Copy className="size-4" strokeWidth={1.5} />}
          </motion.span>
        </AnimatePresence>
      </button>
      <span role="status" className="sr-only">
        {copied ? 'Copied' : ''}
      </span>
    </div>
  )
}

export default function CTA() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden">
      <div className="frame guides py-24 sm:py-32 lg:py-44">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="text-accent tabular-nums">09</span>
            <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
            <span>Contact</span>
          </p>
        </Reveal>

        <Reveal
          as="h2"
          id="contact-title"
          delay={0.04}
          className="display mt-8 max-w-[13ch] text-[clamp(3rem,8.4vw,7.25rem)]"
        >
          Have a problem worth solving?
        </Reveal>

        <div className="mt-12 grid gap-12 border-t border-line pt-10 sm:mt-16 lg:grid-cols-12 lg:gap-8">
          <Reveal delay={0.08} className="lg:col-span-6">
            <p className="max-w-[36ch] text-xl leading-relaxed text-graphite sm:text-2xl sm:leading-snug">
              Tell us what you&apos;re building. We&apos;ll figure out the technology.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <ArrowButton href={mailto('Project brief')} size="lg">
                Start a Conversation
              </ArrowButton>
              <CopyEmail />
            </div>
            <p className="mt-6 font-mono text-xs text-ash">{site.responseTime}</p>
          </Reveal>

          <Reveal delay={0.14} className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow">A useful first message covers</p>
            <ol className="mt-4 border-t border-line">
              {briefChecklist.map((item, index) => (
                <li key={item} className="flex items-baseline gap-4 border-b border-line py-3.5">
                  <span className="font-mono text-[0.6875rem] text-accent tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[0.9375rem] text-charcoal">{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm leading-relaxed text-ash">
              Rough is fine. A paragraph is enough to tell whether we are the right team.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
