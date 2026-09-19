import { useState } from 'react'
import { ArrowRight, Check, LoaderCircle } from 'lucide-react'
import Reveal from './ui/Reveal'
import { site, web3formsAccessKey } from '../content/site'

const briefChecklist = ['What you are building', 'Who it is for', 'Where it is stuck', 'When it needs to work']

const inputClass =
  'w-full rounded-lg border border-line bg-paper px-4 py-3 text-[0.9375rem] text-ink placeholder:text-ash transition-colors focus:border-accent focus:outline-none'

function ProjectForm() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')

    const form = event.currentTarget
    const data = new FormData(form)
    data.append('access_key', web3formsAccessKey)
    data.append('subject', `New project brief from ${data.get('name')}`)
    data.append('from_name', site.name)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const result = await response.json()
      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-line bg-mist p-6" role="status" aria-live="polite">
        <p className="flex items-center gap-2.5 text-lg font-medium text-ink">
          <Check className="size-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
          Message sent
        </p>
        <p className="mt-2 text-sm leading-relaxed text-graphite">{site.responseTime}</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {/* Honeypot — hidden from real visitors, tells Web3Forms to drop bot submissions. */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">
            Your name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input id="email" name="email" type="email" required placeholder="Email address" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Project brief
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What are you building?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group inline-flex h-13 shrink-0 items-center justify-center gap-2.5 rounded-full bg-accent-btn px-6 text-base font-medium whitespace-nowrap text-accent-btn-text transition-colors duration-200 hover:brightness-95 disabled:opacity-60"
        >
          <span>{status === 'submitting' ? 'Sending…' : 'Start a Conversation'}</span>
          {status === 'submitting' ? (
            <LoaderCircle aria-hidden="true" className="size-[1.05em] animate-spin" strokeWidth={1.75} />
          ) : (
            <ArrowRight
              aria-hidden="true"
              className="size-[1.05em] transition-transform duration-300 ease-studio group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          )}
        </button>
        {status === 'error' && (
          <p role="alert" className="text-sm text-graphite">
            Something went wrong — please try again.
          </p>
        )}
      </div>
      <p className="font-mono text-xs text-ash">{site.responseTime}</p>
    </form>
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
            <div className="mt-8">
              <ProjectForm />
            </div>
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
