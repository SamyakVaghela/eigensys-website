import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

/**
 * Hero visual: a quiet dot field with a system graph routed across it.
 * Signals travel from sources → ingest → model → evaluation → product.
 * Canvas-drawn, paused off-screen, static when reduced motion is requested.
 */

const NODES = {
  docs: { x: 0.06, y: 0.26, label: 'documents' },
  events: { x: 0.06, y: 0.5, label: 'events' },
  tables: { x: 0.06, y: 0.74, label: 'tables' },
  ingest: { x: 0.22, y: 0.5, label: 'ingest' },
  embed: { x: 0.38, y: 0.3, label: 'embed' },
  features: { x: 0.38, y: 0.7, label: 'features' },
  model: { x: 0.55, y: 0.5, label: 'model' },
  evals: { x: 0.72, y: 0.3, label: 'evaluate' },
  api: { x: 0.72, y: 0.7, label: 'api' },
  product: { x: 0.92, y: 0.5, label: 'product', terminal: true },
}

const EDGES = [
  ['docs', 'ingest'],
  ['events', 'ingest'],
  ['tables', 'ingest'],
  ['ingest', 'embed'],
  ['ingest', 'features'],
  ['embed', 'model'],
  ['features', 'model'],
  ['model', 'evals'],
  ['model', 'api'],
  ['evals', 'product'],
  ['api', 'product'],
]

/** Read the live theme colours so the canvas matches light and dark. */
function readPalette(el) {
  const styles = getComputedStyle(el)
  const pick = (name, fallback) => styles.getPropertyValue(name).trim() || fallback
  return {
    ink: pick('--color-ink', '#0a0a0b'),
    line: pick('--color-line-strong', 'rgba(10,10,11,0.15)'),
    dot: pick('--color-line-strong', 'rgba(10,10,11,0.15)'),
    accent: pick('--color-accent', '#d97757'),
    paper: pick('--color-paper', '#ffffff'),
    ash: pick('--color-ash', '#74747c'),
  }
}

/** Canvas has no opacity modifier syntax, so mix towards the ground. */
function fade(color, amount, ground) {
  return `color-mix(in srgb, ${color} ${Math.round(amount * 100)}%, ${ground})`
}

function snap(value, step) {
  return Math.round(value / step) * step
}

function buildRoutes(width, height, grid) {
  const pos = {}
  for (const [key, node] of Object.entries(NODES)) {
    pos[key] = { x: snap(node.x * width, grid), y: snap(node.y * height, grid) }
  }
  const routes = EDGES.map(([from, to]) => {
    const a = pos[from]
    const b = pos[to]
    const mx = snap((a.x + b.x) / 2, grid)
    const points = [a, { x: mx, y: a.y }, { x: mx, y: b.y }, b]
    const lengths = []
    let total = 0
    for (let i = 1; i < points.length; i += 1) {
      const len = Math.abs(points[i].x - points[i - 1].x) + Math.abs(points[i].y - points[i - 1].y)
      lengths.push(len)
      total += len
    }
    return { from, to, points, lengths, total }
  })
  return { pos, routes }
}

function pointAt(route, distance) {
  let d = Math.max(0, Math.min(distance, route.total))
  for (let i = 0; i < route.lengths.length; i += 1) {
    if (d <= route.lengths[i]) {
      const a = route.points[i]
      const b = route.points[i + 1]
      const t = route.lengths[i] === 0 ? 0 : d / route.lengths[i]
      return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }
    }
    d -= route.lengths[i]
  }
  return route.points[route.points.length - 1]
}

function drawRoute(ctx, route, radius = 8) {
  const [p0, p1, p2, p3] = route.points
  ctx.beginPath()
  ctx.moveTo(p0.x, p0.y)
  if (p1.y === p2.y) {
    ctx.lineTo(p3.x, p3.y)
  } else {
    const r = Math.min(radius, Math.abs(p2.y - p1.y) / 2, Math.abs(p1.x - p0.x))
    ctx.arcTo(p1.x, p1.y, p2.x, p2.y, r)
    ctx.arcTo(p2.x, p2.y, p3.x, p3.y, r)
    ctx.lineTo(p3.x, p3.y)
  }
  ctx.stroke()
}

export default function SystemField({ className = '' }) {
  const canvasRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    const GRID = 24

    let palette = readPalette(document.documentElement)
    let width = 0
    let height = 0
    let layout = null
    let raf = 0
    let visible = true
    let last = performance.now()
    let spawnTimer = 0
    const pulses = []
    const flashes = {}
    const pointer = { x: -9999, y: -9999, active: false }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      layout = buildRoutes(width, height, GRID)
      pulses.length = 0
    }

    const spawn = (routeIndex, progress = 0) => {
      const route = layout.routes[routeIndex]
      pulses.push({ route, distance: progress * route.total, speed: 70 + Math.random() * 50 })
    }

    const spawnFromSource = () => {
      // Start at a source edge so signals visibly flow left → right.
      const sourceEdges = layout.routes
        .map((route, index) => ({ route, index }))
        .filter(({ route }) => ['docs', 'events', 'tables'].includes(route.from))
      const pick = sourceEdges[Math.floor(Math.random() * sourceEdges.length)]
      spawn(pick.index)
    }

    const draw = (dt) => {
      ctx.clearRect(0, 0, width, height)
      const showLabels = width >= 560

      // Dot field, darkened gently near the pointer.
      for (let x = GRID / 2; x < width; x += GRID) {
        for (let y = GRID / 2; y < height; y += GRID) {
          let alpha = 0.5
          let near = false
          if (pointer.active) {
            const dist = Math.hypot(x - pointer.x, y - pointer.y)
            if (dist < 140) {
              alpha += (1 - dist / 140) * 2.2
              near = true
            }
          }
          ctx.fillStyle = near
            ? fade(palette.accent, Math.min(alpha * 0.4, 0.8), palette.paper)
            : fade(palette.ash, 0.28, palette.paper)
          ctx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5)
        }
      }

      // Baseline ruler along the bottom edge.
      ctx.fillStyle = fade(palette.ash, 0.4, palette.paper)
      for (let x = 0; x < width; x += GRID) {
        const major = Math.round(x / GRID) % 5 === 0
        ctx.fillRect(x, height - (major ? 10 : 5), 1, major ? 10 : 5)
      }

      // Routes
      ctx.lineWidth = 1
      ctx.strokeStyle = fade(palette.ash, 0.45, palette.paper)
      for (const route of layout.routes) drawRoute(ctx, route)

      // Pulses
      for (let i = pulses.length - 1; i >= 0; i -= 1) {
        const pulse = pulses[i]
        pulse.distance += pulse.speed * dt
        const head = pointAt(pulse.route, pulse.distance)
        const tail = pointAt(pulse.route, pulse.distance - 22)
        const gradient = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y)
        gradient.addColorStop(0, fade(palette.accent, 0, palette.paper))
        gradient.addColorStop(1, palette.accent)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.beginPath()
        // Trail follows corners by sampling the route.
        const steps = 6
        for (let s = 0; s <= steps; s += 1) {
          const p = pointAt(pulse.route, pulse.distance - 22 + (22 * s) / steps)
          if (s === 0) ctx.moveTo(p.x, p.y)
          else ctx.lineTo(p.x, p.y)
        }
        ctx.stroke()

        if (pulse.distance >= pulse.route.total) {
          flashes[pulse.route.to] = 1
          pulses.splice(i, 1)
          // Continue downstream along a random outgoing edge.
          const next = layout.routes
            .map((route, index) => ({ route, index }))
            .filter(({ route }) => route.from === pulse.route.to)
          if (next.length && Math.random() < 0.85) {
            spawn(next[Math.floor(Math.random() * next.length)].index)
          }
        }
      }

      // Nodes
      ctx.font = '500 10px "Geist Mono Variable", ui-monospace, monospace'
      ctx.textBaseline = 'top'
      for (const [key, node] of Object.entries(NODES)) {
        const p = layout.pos[key]
        const flash = flashes[key] || 0
        if (flash > 0) {
          ctx.strokeStyle = fade(palette.accent, 0.5 * flash, palette.paper)
          ctx.lineWidth = 1
          const r = 6 + (1 - flash) * 14
          ctx.strokeRect(p.x - r, p.y - r, r * 2, r * 2)
          flashes[key] = Math.max(0, flash - dt * 1.6)
        }
        const size = node.terminal ? 10 : 7
        ctx.fillStyle = node.terminal ? palette.ink : palette.paper
        ctx.fillRect(p.x - size / 2, p.y - size / 2, size, size)
        ctx.strokeStyle = flash > 0.05 ? palette.accent : fade(palette.ink, 0.55, palette.paper)
        ctx.lineWidth = 1
        ctx.strokeRect(p.x - size / 2 + 0.5, p.y - size / 2 + 0.5, size - 1, size - 1)

        if (showLabels) {
          ctx.fillStyle = flash > 0.05 ? palette.accent : palette.ash
          const text = node.label.toUpperCase()
          const tw = ctx.measureText(text).width
          ctx.fillText(text, Math.min(Math.max(p.x - tw / 2, 4), width - tw - 4), p.y + 12)
        }
      }
    }

    const loop = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      spawnTimer -= dt
      if (spawnTimer <= 0 && pulses.length < 14) {
        spawnFromSource()
        spawnTimer = 0.55 + Math.random() * 0.6
      }
      draw(dt)
      if (visible) raf = requestAnimationFrame(loop)
    }

    resize()

    if (reduceMotion) {
      // A single, still frame with a few signals mid-flight.
      ;[0, 4, 7, 9].forEach((index, i) => spawn(index, 0.35 + i * 0.12))
      draw(0)
      const onResizeStatic = () => {
        resize()
        ;[0, 4, 7, 9].forEach((index, i) => spawn(index, 0.35 + i * 0.12))
        draw(0)
      }
      const onThemeStatic = () => {
        palette = readPalette(document.documentElement)
        draw(0)
      }
      const staticThemeObserver = new MutationObserver(onThemeStatic)
      staticThemeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
      window.addEventListener('resize', onResizeStatic)
      return () => {
        window.removeEventListener('resize', onResizeStatic)
        staticThemeObserver.disconnect()
      }
    }

    // Seed a few so the first frame already shows motion in progress.
    ;[1, 3, 6, 8, 10].forEach((index, i) => spawn(index, 0.2 + i * 0.13))

    const themeObserver = new MutationObserver(() => {
      palette = readPalette(document.documentElement)
    })
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    const resizeObserver = new ResizeObserver(() => resize())
    resizeObserver.observe(canvas)

    const intersection = new IntersectionObserver(([entry]) => {
      const wasVisible = visible
      visible = entry.isIntersecting
      if (visible && !wasVisible) {
        last = performance.now()
        raf = requestAnimationFrame(loop)
      }
    })
    intersection.observe(canvas)

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
      pointer.active = pointer.x >= 0 && pointer.y >= 0 && pointer.x <= rect.width && pointer.y <= rect.height
    }
    const onLeave = () => {
      pointer.active = false
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)

    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      themeObserver.disconnect()
      resizeObserver.disconnect()
      intersection.disconnect()
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [reduceMotion])

  return <canvas ref={canvasRef} className={`block h-full w-full ${className}`} aria-hidden="true" />
}
