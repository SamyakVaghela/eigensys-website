import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import Reveal from './ui/Reveal'
import { approach } from '../content/approach'

function Step({ step, index, isLast }) {
  return (
    <li className={`relative grid gap-4 pl-12 sm:grid-cols-12 sm:gap-6 sm:pl-16 ${isLast ? '' : 'pb-14 sm:pb-20'}`}>
      <motion.span
        aria-hidden="true"
        initial={{ backgroundColor: '#FFFFFF', scale: 0.8 }}
        whileInView={{ backgroundColor: '#0A0A0B', scale: 1 }}
        viewport={{ amount: 1, margin: '0px 0px -45% 0px' }}
        transition={{ duration: 0.4 }}
        className="absolute top-1 left-[11px] size-[11px] rounded-full border border-ink sm:left-[19px]"
      />
      <Reveal className="sm:col-span-7">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-ink tabular-nums">{step.number}</span>
          <span className="h-px w-5 bg-line-strong" aria-hidden="true" />
          <span className="eyebrow">{step.duration}</span>
        </div>
        <h3 className="heading mt-4 text-[clamp(1.875rem,3.4vw,2.75rem)]">{step.title}</h3>
        <p className="mt-3 max-w-[40ch] text-[1.0625rem] leading-relaxed text-graphite">{step.body}</p>
      </Reveal>
      <Reveal delay={0.08} className="sm:col-span-5 sm:pt-9">
        <p className="eyebrow">Outputs</p>
        <ul className="mt-3 border-t border-line">
          {step.outputs.map((output) => (
            <li
              key={output}
              className="flex items-center justify-between border-b border-line py-2.5 text-sm text-charcoal"
            >
              {output}
              <span className="font-mono text-[0.625rem] text-ash" aria-hidden="true">
                {step.number}.{step.outputs.indexOf(output) + 1}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </li>
  )
}

export default function Approach() {
  const listRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 65%', 'end 55%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <section id="approach" aria-labelledby="approach-title" className="border-t border-line">
      <div className="frame guides py-24 sm:py-32 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow flex items-center gap-3">
                  <span className="text-accent tabular-nums">05</span>
                  <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
                  <span>Our approach</span>
                </p>
              </Reveal>
              <Reveal as="h2" id="approach-title" className="heading mt-6 text-[clamp(2.25rem,5.2vw,4rem)]">
                From problem to production.
              </Reveal>
              <Reveal as="p" delay={0.08} className="mt-6 max-w-[40ch] text-[1.0625rem] leading-relaxed text-graphite">
                Five stages, each ending in something you can review. Timelines are typical for a focused build and flex
                with scope.
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ol ref={listRef} className="relative">
              <span aria-hidden="true" className="absolute top-2 bottom-2 left-4 w-px bg-line sm:left-6" />
              <motion.span
                aria-hidden="true"
                style={{ scaleY: progress }}
                className="absolute top-2 bottom-2 left-4 w-px origin-top bg-ink sm:left-6"
              />
              {approach.map((step, index) => (
                <Step key={step.number} step={step} index={index} isLast={index === approach.length - 1} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
