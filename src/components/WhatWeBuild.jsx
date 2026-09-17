import { ArrowUpRight } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'
import { practices } from '../content/capabilities'

function PracticeCard({ practice, index }) {
  const Icon = practice.icon

  // Soft spotlight that follows the cursor inside the card.
  const onPointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--x', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--y', `${event.clientY - rect.top}px`)
  }

  return (
    <Reveal delay={index * 0.07} className="h-full">
      <article
        onPointerMove={onPointerMove}
        className="group relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-2xl border border-line bg-paper p-6 transition-[transform,border-color,background-color] duration-500 ease-studio hover:-translate-y-1 hover:border-line-strong sm:p-7"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(420px circle at var(--x, 50%) var(--y, 0%), rgb(10 10 11 / 0.045), transparent 60%)',
          }}
        />

        <div className="relative flex items-start justify-between">
          <span className="text-[4.25rem] leading-none font-light tracking-[-0.06em] text-ink/15 tabular-nums transition-colors duration-500 group-hover:text-ink">
            {practice.number}
          </span>
          <span className="inline-flex size-10 items-center justify-center rounded-xl border border-line text-ink transition-colors duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
            <Icon className="size-[1.125rem]" strokeWidth={1.5} aria-hidden="true" />
          </span>
        </div>

        <div className="relative mt-auto pt-16">
          <h3 className="flex items-center gap-2 text-[1.375rem] font-medium tracking-[-0.02em]">
            {practice.title}
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 -translate-x-1 opacity-0 transition-all duration-500 ease-studio group-hover:translate-x-0 group-hover:opacity-100"
              strokeWidth={1.75}
            />
          </h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-graphite">{practice.body}</p>
          <p className="mt-3 text-sm leading-relaxed text-ash">{practice.detail}</p>
          <ul
            className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5"
            aria-label={`${practice.title} focus areas`}
          >
            {practice.tags.map((tag) => (
              <li key={tag} className="rounded-md bg-mist px-2 py-1 font-mono text-[0.6875rem] text-graphite">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  )
}

export default function WhatWeBuild() {
  return (
    <section id="build" aria-labelledby="build-title">
      <div className="frame guides py-24 sm:py-32 lg:py-40">
        <SectionHeader
          id="build-title"
          index="01"
          label="What we build"
          title="From intelligence to infrastructure."
          description="We combine AI, data and software engineering to build systems that solve real business problems — from intelligent automation to production-ready applications."
        />
        <div className="mt-14 grid gap-3 sm:mt-20 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
          {practices.map((practice, index) => (
            <PracticeCard key={practice.id} practice={practice} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
