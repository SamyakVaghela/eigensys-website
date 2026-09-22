import { BrainCircuit, Database, LayoutGrid, Workflow } from 'lucide-react'

/** Marquee strip under the hero. */
export const capabilityStrip = [
  'AI / ML',
  'Data',
  'Generative AI',
  'LLM Applications',
  'RAG Systems',
  'AI Agents',
  'Software',
  'Automation',
  'Computer Vision',
  'NLP',
  'Cloud',
  'Commerce',
  'Payments',
  'CRM',
  'Content Platforms',
]

/** "What we build" — the four practice areas. */
export const practices = [
  {
    id: 'ai',
    number: '01',
    title: 'AI Systems',
    icon: BrainCircuit,
    body: 'LLMs, RAG, AI agents, NLP, computer vision and intelligent automation.',
    detail: 'Retrieval that cites its sources. Agents with real stop conditions. Evaluation before launch.',
    tags: ['LLMs', 'RAG', 'Agents', 'CV', 'NLP'],
  },
  {
    id: 'data',
    number: '02',
    title: 'Data & Intelligence',
    icon: Database,
    body: 'Data pipelines, analytics, forecasting, machine learning and decision systems.',
    detail: 'Models measured against a baseline, not a demo. Pipelines you can rerun and trust.',
    tags: ['Pipelines', 'Forecasting', 'ML', 'Analytics'],
  },
  {
    id: 'products',
    number: '03',
    title: 'Digital Products',
    icon: LayoutGrid,
    body: 'Web applications, SaaS platforms, commerce and content platforms, dashboards, APIs and custom software.',
    detail:
      'Typed front ends, clean APIs and infrastructure sized for the product you actually have — catalogs and checkout, a video or photo feed you own, admin tooling with real access control.',
    tags: ['Web apps', 'SaaS', 'Commerce', 'Content platforms', 'APIs', 'Dashboards'],
  },
  {
    id: 'automation',
    number: '04',
    title: 'Automation',
    icon: Workflow,
    body: 'AI-powered workflows, business process automation and intelligent integrations.',
    detail: 'The repetitive work removed, with a human checkpoint wherever a mistake would be expensive.',
    tags: ['Workflows', 'Integrations', 'Agents', 'Ops'],
  },
]
