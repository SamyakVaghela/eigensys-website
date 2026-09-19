import { motion } from 'motion/react'
import ArrowButton from './ui/ArrowButton'
import SystemField from './SystemField'
import { site } from '../content/site'

const ease = [0.22, 1, 0.36, 1]

const headline = [
  { text: 'We build intelligent technology', muted: false },
  { text: 'for ambitious ideas.', muted: true },
]

const meta = [
  { label: 'Practice', value: 'AI systems · Data · Software' },
  { label: 'Base', value: `${site.location} — working globally` },
  { label: 'Status', value: site.availability, live: true },
]

function Words({ text, muted, startDelay }) {
  return text.split(' ').map((word, index) => (
    <span key={`${word}-${index}`} className="inline-flex overflow-hidden pb-[0.08em] align-bottom">
      <motion.span
        className={`inline-block ${muted ? 'text-accent' : ''}`}
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay: startDelay + index * 0.045, ease }}
      >
        {word}
        {' '}
      </motion.span>
    </span>
  ))
}

export default function Hero() {
  const firstLineWords = headline[0].text.split(' ').length

  return (
    <section id="top" aria-labelledby="hero-title" className="relative">
      <div className="frame guides pt-28 sm:pt-32 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-wrap items-center justify-between gap-3"
        >
          <p className="eyebrow inline-flex items-center gap-2.5 rounded-full border border-line py-1.5 pr-3.5 pl-2 !text-graphite">
            <span className="inline-block size-1.5 rounded-[1px] bg-accent" aria-hidden="true" />
            EigenSys / Technology Studio
          </p>
          <p className="eyebrow hidden sm:block">AI × Data × Software</p>
        </motion.div>

        <h1
          id="hero-title"
          className="display mt-8 max-w-[16ch] text-[clamp(2.75rem,7.6vw,6.25rem)] sm:mt-10"
          aria-label={headline.map((line) => line.text).join(' ')}
        >
          <span aria-hidden="true">
            <Words text={headline[0].text} muted={false} startDelay={0.1} />
            <Words text={headline[1].text} muted startDelay={0.1 + firstLineWords * 0.045} />
          </span>
        </h1>

        <div className="mt-10 grid gap-10 pb-14 sm:mt-12 sm:pb-16 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="lg:col-span-6"
          >
            <p className="max-w-[46ch] text-lg leading-relaxed text-graphite sm:text-xl sm:leading-relaxed">
              AI, data, software and automation — engineered to turn complex problems into products that work.
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
              <ArrowButton href="#contact" size="lg">
                Start a Project
              </ArrowButton>
              <ArrowButton href="#work" variant="secondary" size="lg" arrow={false}>
                Explore Our Work
              </ArrowButton>
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="self-end border-t border-line lg:col-span-5 lg:col-start-8"
          >
            {meta.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-6 border-b border-line py-3">
                <dt className="eyebrow">{row.label}</dt>
                <dd className="flex items-center gap-2 text-right text-sm text-ink">
                  {row.live && (
                    <span className="relative inline-flex size-1.5" aria-hidden="true">
                      <span className="absolute inset-0 animate-pulse-dot rounded-full bg-accent" />
                    </span>
                  )}
                  {row.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      {/* Signal-path visualization */}
      <div className="border-y border-line">
        <div className="frame guides">
          <motion.figure
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="relative h-[260px] sm:h-[340px] lg:h-[380px]"
          >
            <SystemField />
            <figcaption className="pointer-events-none absolute top-4 left-0 flex w-full justify-between px-1 sm:top-5">
              <span className="eyebrow">Fig. 01 — Signal path</span>
              <span className="eyebrow hidden sm:inline">Data → Intelligence → Product</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
