import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'
import { stackGroups } from '../content/stack'
import { featuredWork, workIndex } from '../content/work'

const ease = [0.22, 1, 0.36, 1]
const allWork = [...featuredWork, ...workIndex]

/** Which pieces of work list this technology in their stack. */
function projectsUsing(name) {
  const needle = name.toLowerCase()
  return allWork.filter((work) =>
    work.stack.some((tech) => {
      const t = tech.toLowerCase()
      return t === needle || t.startsWith(`${needle} `)
    }),
  )
}

export default function Technologies() {
  const [selected, setSelected] = useState({ group: 'GenAI', name: 'LangGraph' })

  const detail = useMemo(() => {
    const group = stackGroups.find((g) => g.label === selected.group)
    const item = group?.items.find((i) => i.name === selected.name)
    return { ...item, group: selected.group, used: projectsUsing(selected.name) }
  }, [selected])

  const total = stackGroups.reduce((sum, group) => sum + group.items.length, 0)

  return (
    <section id="stack" aria-labelledby="stack-title" className="border-t border-line bg-mist/50">
      <div className="frame guides py-24 sm:py-32 lg:py-40">
        <SectionHeader
          id="stack-title"
          index="04"
          label="Technology"
          title="Built with the modern stack."
          description="Chosen for the problem, not the trend. Select any technology to see what we use it for — and where it already runs in our work."
        />

        <Reveal delay={0.05} className="mt-14 overflow-hidden rounded-2xl border border-line bg-paper sm:mt-20">
          <div className="grid divide-y divide-line md:grid-cols-5 md:divide-x md:divide-y-0">
            {stackGroups.map((group) => (
              <div key={group.label} className="p-5 sm:p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="eyebrow !text-ink">{group.label}</h3>
                  <span className="font-mono text-[0.625rem] text-ash tabular-nums">
                    {String(group.items.length).padStart(2, '0')}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-1.5 md:flex-col md:items-start">
                  {group.items.map((item) => {
                    const isSelected = selected.name === item.name
                    return (
                      <li key={item.name}>
                        <button
                          type="button"
                          aria-pressed={isSelected}
                          onMouseEnter={() => setSelected({ group: group.label, name: item.name })}
                          onFocus={() => setSelected({ group: group.label, name: item.name })}
                          onClick={() => setSelected({ group: group.label, name: item.name })}
                          className={`inline-flex h-8 items-center rounded-full border px-3 text-[0.8125rem] transition-all duration-300 ease-studio ${
                            isSelected
                              ? 'border-accent-btn bg-accent-btn text-accent-btn-text'
                              : 'border-line bg-paper text-charcoal hover:border-accent hover:text-accent-text'
                          }`}
                        >
                          {item.name}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex min-h-[5.5rem] flex-col justify-center gap-2 border-t border-line bg-mist px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={detail.name}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25, ease }}
                className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4"
                aria-live="polite"
              >
                <p className="font-mono text-xs text-accent-text">
                  <span className="text-ash">{detail.group} /</span> {detail.name}
                </p>
                <p className="text-sm text-graphite">{detail.note}</p>
              </motion.div>
            </AnimatePresence>
            <p className="shrink-0 font-mono text-[0.6875rem] text-ash">
              {detail.used.length > 0
                ? `In ${detail.used.length} ${detail.used.length === 1 ? 'build' : 'builds'}: ${detail.used
                    .slice(0, 3)
                    .map((w) => w.title)
                    .join(', ')}${detail.used.length > 3 ? '…' : ''}`
                : `${total} technologies in daily use`}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
