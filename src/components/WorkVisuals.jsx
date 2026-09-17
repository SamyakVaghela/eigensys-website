import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'motion/react'

/**
 * Code-drawn, monochrome illustrations for featured case studies.
 * Each one shows the mechanism of the project, not decoration.
 */

const ease = [0.22, 1, 0.36, 1]
const inView = { once: true, amount: 0.35 }

/* ---------------------------------------------------------------- */
/* TalentLens — cited answer + evidence-backed fit                   */
/* ---------------------------------------------------------------- */
export function CitationsVisual() {
  const requirements = [
    { label: 'Kafka in production', score: 0.86, cite: 2 },
    { label: 'Python services at scale', score: 0.78, cite: 1 },
    { label: 'Data modelling', score: 0.64, cite: 3 },
    { label: 'Team leadership', score: 0.41, cite: null },
  ]

  return (
    <div className="flex flex-col gap-3 px-4 sm:px-6">
      <div className="rounded-xl border border-line bg-paper shadow-[0_1px_2px_rgb(10_10_11/0.04)]">
        <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="ml-2 font-mono text-[0.625rem] text-ash">assistant · senior-data-engineer</span>
        </div>
        <div className="space-y-3 p-4 text-[0.8125rem] leading-relaxed">
          <p className="ml-auto w-fit max-w-[85%] rounded-lg bg-ink px-3 py-2 text-paper">
            Who have we interviewed that has run Kafka in production?
          </p>
          <p className="max-w-[92%] text-charcoal">
            Two candidates describe it directly. A. Rao migrated a payments pipeline to Kafka and owned its on-call
            rotation
            <sup className="mx-0.5 rounded bg-accent px-1 font-mono text-[0.625rem] text-white">2</sup>. J. Mehta ran
            consumer groups for event ingestion
            <sup className="mx-0.5 rounded border border-accent-line px-1 font-mono text-[0.625rem] text-accent-text">
              4
            </sup>
            .
          </p>
          <div className="rounded-lg border border-dashed border-line-strong bg-mist px-3 py-2 font-mono text-[0.6875rem] leading-relaxed text-graphite">
            <span className="text-accent-text">[2] interview_rao.vtt · 00:14:32</span>
            <br />
            “…we moved settlement events onto Kafka and I carried the pager for it…”
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-paper p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="eyebrow">Fit by requirement</span>
          <span className="font-mono text-[0.6875rem] text-ash">evidence-linked</span>
        </div>
        <ul className="space-y-2.5">
          {requirements.map((req, i) => (
            <li
              key={req.label}
              className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 sm:grid-cols-[10rem_1fr_3.5rem]"
            >
              <span className="truncate text-xs text-charcoal">{req.label}</span>
              <span className="order-3 col-span-2 h-1.5 overflow-hidden rounded-full bg-mist sm:order-none sm:col-span-1">
                <motion.span
                  className="block h-full origin-left rounded-full bg-ink"
                  style={{ width: `${req.score * 100}%` }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={inView}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1, ease }}
                />
              </span>
              <span className="text-right font-mono text-[0.6875rem] text-graphite tabular-nums">
                {req.score.toFixed(2)} {req.cite ? `[${req.cite}]` : '—'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- */
/* ctxray — terminal output                                           */
/* ---------------------------------------------------------------- */
export function TerminalVisual() {
  const lines = [
    { text: '$ npx ctxray', tone: 'cmd' },
    { text: '  1,204 files · 8.2 MB · scanned in 210ms', tone: 'dim' },
    { text: '' },
    { text: '  CONTEXT WEIGHT', tone: 'label' },
    { text: '  627k tokens if an agent ingested this repo', tone: 'body' },
    { bar: [44, 56] },
    { text: '  275k signal (44%)   352k waste (56%)', tone: 'dim' },
    { text: '' },
    { text: '  WHERE THE WASTE IS', tone: 'label' },
    { row: ['Lockfiles', '181k', 100] },
    { row: ['Test snapshots', '84k', 46] },
    { row: ['Bulk data', '41k', 23] },
    { row: ['Build output', '28k', 15] },
    { text: '' },
    { text: '  → ctxray init   writes .agentignore + AGENTS.md', tone: 'body' },
  ]

  const tone = {
    cmd: 'text-chalk',
    dim: 'text-chalk/45',
    label: 'text-chalk/60 tracking-[0.08em]',
    body: 'text-chalk/85',
  }

  return (
    <div className="flex items-center px-4 sm:px-6">
      <div className="w-full overflow-hidden rounded-xl bg-void shadow-[0_24px_48px_-24px_rgb(10_10_11/0.45)]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[0.625rem] text-chalk/45">~/code/api — sample output</span>
        </div>
        <div className="overflow-x-auto p-4 font-mono text-[0.6875rem] leading-[1.7] sm:p-5 sm:text-xs">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={inView}
              transition={{ duration: 0.25, delay: 0.1 + i * 0.07 }}
              className="min-h-[1.7em] whitespace-pre"
            >
              {line.bar ? (
                <span className="ml-[2ch] flex h-2.5 w-[min(34ch,85%)] overflow-hidden rounded-sm">
                  <span className="bg-chalk" style={{ width: `${line.bar[0]}%` }} />
                  <span className="bg-accent/70" style={{ width: `${line.bar[1]}%` }} />
                </span>
              ) : line.row ? (
                <span className="flex items-center gap-3 text-chalk/85">
                  <span className="w-[17ch] shrink-0">{`  ● ${line.row[0]}`}</span>
                  <span className="w-[5ch] shrink-0 text-right tabular-nums">{line.row[1]}</span>
                  <span className="h-1.5 w-24 overflow-hidden rounded-sm bg-white/10 sm:w-32">
                    <span className="block h-full bg-accent/60" style={{ width: `${line.row[2]}%` }} />
                  </span>
                </span>
              ) : (
                <span className={tone[line.tone] ?? ''}>{line.text}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- */
/* Corrective RAG — LangGraph state machine                          */
/* ---------------------------------------------------------------- */
export function GraphVisual() {
  // viewBox units
  const nodes = [
    { id: 'start', x: 16, y: 150, w: 56, label: 'START', terminal: true },
    { id: 'retrieve', x: 100, y: 150, w: 88, label: 'retrieve' },
    { id: 'grade', x: 226, y: 150, w: 108, label: 'grade_docs' },
    { id: 'generate', x: 392, y: 150, w: 92, label: 'generate' },
    { id: 'rewrite', x: 226, y: 262, w: 108, label: 'rewrite_query' },
    { id: 'check', x: 392, y: 262, w: 92, label: 'verify' },
    { id: 'end', x: 540, y: 262, w: 48, label: 'END', terminal: true },
  ]
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]))
  const H = 34
  const right = (n) => n.x + n.w
  const cx = (n) => n.x + n.w / 2
  const gen = byId.generate
  const downX = gen.x + 66
  const retryX = gen.x + 26

  const main = [
    `M ${right(byId.start)} 167 H ${byId.retrieve.x}`,
    `M ${right(byId.retrieve)} 167 H ${byId.grade.x}`,
    `M ${right(byId.grade)} 167 H ${gen.x}`,
  ]
  const down = `M ${downX} ${150 + H} V ${byId.check.y}`
  const toEnd = `M ${right(byId.check)} 279 H ${byId.end.x}`
  const rewriteLoop = `M ${cx(byId.grade)} ${150 + H} V ${byId.rewrite.y} M ${byId.rewrite.x} 279 H ${cx(byId.retrieve)} V ${150 + H}`
  const retryLoop = `M ${retryX} ${byId.check.y} V ${150 + H}`

  const pulsePath = `M ${right(byId.start)} 167 H ${downX} V 279 H ${byId.end.x}`

  return (
    <div className="flex flex-col justify-center px-4 sm:px-6">
      <div className="rounded-xl border border-line bg-paper p-3 sm:p-5">
        <div className="mb-2 flex items-center justify-between px-1">
          <span className="eyebrow">state graph</span>
          <span className="font-mono text-[0.6875rem] text-ash">corrective RAG</span>
        </div>
        <svg
          viewBox="0 118 600 200"
          className="h-auto w-full"
          role="img"
          aria-label="Graph: retrieve, grade documents, generate, verify; weak evidence loops through rewrite query; failed verification retries generation."
        >
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0 0 L8 4 L0 8 z" fill="var(--color-ink)" />
            </marker>
            <pattern id="graph-dots" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="var(--color-line-strong)" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="600" height="340" fill="url(#graph-dots)" />

          <g fill="none" stroke="var(--color-ink)" strokeWidth="1.1">
            {main.map((d) => (
              <path key={d} d={d} markerEnd="url(#arrow)" />
            ))}
            <path d={down} markerEnd="url(#arrow)" />
            <path d={toEnd} markerEnd="url(#arrow)" />
          </g>
          <g fill="none" stroke="var(--color-accent)" strokeWidth="1.1" strokeDasharray="4 4">
            <path d={rewriteLoop} markerEnd="url(#arrow)" />
            <path d={retryLoop} markerEnd="url(#arrow)" />
          </g>

          <g fontFamily="'Geist Mono Variable', ui-monospace, monospace" fontSize="9.5" fill="var(--color-ash)">
            <text x={cx(byId.grade) - 8} y="228" textAnchor="end">
              weak evidence
            </text>
            <text x={retryX - 8} y="228" textAnchor="end">
              unsupported
            </text>
            <text x={(right(byId.grade) + gen.x) / 2} y="159" textAnchor="middle">
              relevant
            </text>
            <text x={(right(byId.check) + byId.end.x) / 2} y="266" textAnchor="middle">
              grounded
            </text>
          </g>

          {nodes.map((n) => (
            <g key={n.id}>
              <rect
                x={n.x}
                y={n.y}
                width={n.w}
                height={H}
                rx={n.terminal ? 17 : 7}
                fill={n.terminal ? 'var(--color-ink)' : 'var(--color-paper)'}
                stroke="var(--color-ink)"
                strokeOpacity={n.terminal ? 1 : 0.8}
              />
              <text
                x={cx(n)}
                y={n.y + H / 2 + 3.5}
                textAnchor="middle"
                fontFamily="'Geist Mono Variable', ui-monospace, monospace"
                fontSize="10.5"
                fill={n.terminal ? 'var(--color-paper)' : 'var(--color-ink)'}
              >
                {n.label}
              </text>
            </g>
          ))}

          <motion.circle
            r="4"
            fill="var(--color-accent)"
            initial={{ offsetDistance: '0%' }}
            animate={{ offsetDistance: '100%' }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.6 }}
            style={{ offsetPath: `path("${pulsePath}")` }}
          />
        </svg>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- */
/* Conversational CAD — isometric massing revised by prompt          */
/* ---------------------------------------------------------------- */
const ISO = { ox: 300, oy: 262, sx: 0.866, sy: 0.5 }
function iso(x, y, z) {
  return [ISO.ox + (x - y) * ISO.sx, ISO.oy + (x + y) * ISO.sy - z]
}
function pts(list) {
  return list.map((p) => p.map((v) => v.toFixed(1)).join(',')).join(' ')
}

const FLOOR = 10
const PODIUM = 24

function IsoBox({ x, y, w, d, h, z0 = 0, floors = false, highlight = false }) {
  const z1 = z0 + h
  const top = [iso(x, y, z1), iso(x + w, y, z1), iso(x + w, y + d, z1), iso(x, y + d, z1)]
  const left = [iso(x, y + d, z0), iso(x + w, y + d, z0), iso(x + w, y + d, z1), iso(x, y + d, z1)]
  const right = [iso(x + w, y, z0), iso(x + w, y + d, z0), iso(x + w, y + d, z1), iso(x + w, y, z1)]
  const stroke = highlight ? 'var(--color-ink)' : 'var(--color-ash)'

  const floorLines = []
  if (floors) {
    for (let z = z0 + FLOOR; z < z1 - 0.5; z += FLOOR) {
      floorLines.push(
        <polyline
          key={z}
          points={pts([iso(x, y + d, z), iso(x + w, y + d, z), iso(x + w, y, z)])}
          fill="none"
          stroke={stroke}
          strokeOpacity="0.2"
          strokeWidth="0.8"
        />,
      )
    }
  }

  return (
    <g strokeLinejoin="round">
      <polygon
        points={pts(left)}
        fill={highlight ? 'var(--color-fog)' : 'var(--color-mist)'}
        stroke={stroke}
        strokeWidth="1"
      />
      <polygon
        points={pts(right)}
        fill={highlight ? 'var(--color-mist)' : 'var(--color-fog)'}
        stroke={stroke}
        strokeWidth="1"
      />
      {floorLines}
      <polygon points={pts(top)} fill="var(--color-paper)" stroke={stroke} strokeWidth="1" />
    </g>
  )
}

export function CadVisual() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.4 })
  const reduceMotion = useReducedMotion()
  const [floorsB, setFloorsB] = useState(18)

  // Tower B extrudes 15 → 18 floors, holds, and repeats while visible.
  useEffect(() => {
    if (!isInView || reduceMotion) return undefined
    let controls
    let timer
    const run = () => {
      setFloorsB(15)
      timer = window.setTimeout(() => {
        controls = animate(15, 18, {
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (value) => setFloorsB(value),
        })
        timer = window.setTimeout(run, 5200)
      }, 900)
    }
    run()
    return () => {
      controls?.stop()
      window.clearTimeout(timer)
    }
  }, [isInView, reduceMotion])

  const hB = floorsB * FLOOR
  const heightM = (floorsB * 3.6).toFixed(1)
  const dimX = iso(110, -60, 0)[0] + 18

  return (
    <div ref={ref} className="flex flex-col gap-3 px-4 sm:px-6">
      <div className="flex items-center gap-2 rounded-xl border border-line bg-paper px-3 py-2.5 font-mono text-[0.6875rem] sm:text-xs">
        <span className="text-ash">›</span>
        <span className="truncate text-ink">Raise tower B to 18 floors, keep the 4 m setback</span>
      </div>

      <div className="relative aspect-[5/3] overflow-hidden rounded-xl border border-line bg-paper">
        <div className="dot-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <svg
          viewBox="0 -10 600 360"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="Isometric massing model: two towers on a podium; tower B extrudes from 15 to 18 floors after the instruction."
        >
          <polygon
            points={pts([iso(-150, -110, 0), iso(170, -110, 0), iso(170, 170, 0), iso(-150, 170, 0)])}
            fill="none"
            stroke="var(--color-line-strong)"
            strokeDasharray="4 4"
          />
          <IsoBox x={-120} y={-80} w={250} d={200} h={PODIUM} />
          <IsoBox x={-100} y={20} w={80} d={80} h={14 * FLOOR} z0={PODIUM} floors />
          <IsoBox x={30} y={-60} w={80} d={80} h={hB} z0={PODIUM} floors highlight />

          {/* Height dimension for tower B */}
          <g stroke="var(--color-accent)" strokeWidth="0.8">
            <line x1={dimX} y1={iso(110, -60, PODIUM)[1]} x2={dimX} y2={iso(110, -60, PODIUM + hB)[1]} />
            <line x1={dimX - 4} y1={iso(110, -60, PODIUM)[1]} x2={dimX + 4} y2={iso(110, -60, PODIUM)[1]} />
            <line x1={dimX - 4} y1={iso(110, -60, PODIUM + hB)[1]} x2={dimX + 4} y2={iso(110, -60, PODIUM + hB)[1]} />
          </g>
          <g fontFamily="'Geist Mono Variable', ui-monospace, monospace" fontSize="10.5">
            <text x={dimX + 8} y={iso(110, -60, PODIUM + hB / 2)[1]} fill="var(--color-accent)">
              {Math.round(floorsB)} fl
            </text>
            <text x={iso(-100, 100, 0)[0] - 70} y={iso(-100, 100, 0)[1] + 30} fill="var(--color-ash)">
              TOWER_A · 14 fl
            </text>
            <text x={iso(70, -60, 0)[0] - 30} y={iso(30, -60, PODIUM + hB)[1] - 12} fill="var(--color-ash)">
              TOWER_B
            </text>
          </g>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 font-mono text-[0.6875rem]">
        <div className="rounded-lg border border-line bg-paper px-3 py-2">
          <span className="text-ash">Tower_B.Height</span>
          <span className="mt-0.5 block text-ink tabular-nums">
            {heightM} m <span className="text-ash">(+{(heightM - 54).toFixed(1)})</span>
          </span>
        </div>
        <div className="rounded-lg border border-line bg-paper px-3 py-2">
          <span className="text-ash">Setback</span>
          <span className="mt-0.5 block text-ink">4.0 m · unchanged</span>
        </div>
      </div>
    </div>
  )
}

export const visuals = {
  citations: CitationsVisual,
  terminal: TerminalVisual,
  graph: GraphVisual,
  cad: CadVisual,
}
