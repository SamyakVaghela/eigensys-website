import { Check } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'
import ArrowButton from './ui/ArrowButton'
import { engagementNote, engagements } from '../content/engagements'

export default function Engagements() {
  return (
    <section id="engagements" aria-labelledby="engagements-title" className="border-t border-line">
      <div className="frame guides py-24 sm:py-32 lg:py-40">
        <SectionHeader
          id="engagements-title"
          index="06"
          label="Engagements"
          title="Three ways to work with us."
          description="Most projects start small and grow. Pick the shape that matches where your problem actually is today."
        />

        <div className="mt-14 grid gap-3 sm:mt-20 sm:gap-4 lg:grid-cols-3">
          {engagements.map((engagement, index) => (
            <Reveal key={engagement.id} delay={index * 0.07} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-6 transition-colors duration-500 sm:p-8 ${
                  engagement.featured
                    ? 'border-accent-line bg-accent-soft'
                    : 'border-line bg-paper hover:border-line-strong'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[1.375rem] font-medium tracking-[-0.02em]">{engagement.name}</h3>
                    <p className="eyebrow mt-2">
                      {engagement.length} · {engagement.price}
                    </p>
                  </div>
                  {engagement.featured && (
                    <span className="eyebrow shrink-0 rounded-full border border-accent-line px-2.5 py-1 !text-accent-text">
                      Most common
                    </span>
                  )}
                </div>

                <p className="mt-5 text-[0.9375rem] leading-relaxed text-graphite">{engagement.summary}</p>

                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {engagement.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.875rem] leading-relaxed text-charcoal">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-auto pt-6 text-[0.8125rem] leading-relaxed text-ash">{engagement.best}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-start gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[58ch] text-[0.9375rem] leading-relaxed text-graphite">{engagementNote}</p>
            <ArrowButton href="#contact" variant="secondary">
              Get an estimate
            </ArrowButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
