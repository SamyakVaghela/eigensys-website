/**
 * Services list. `group` maps to a practice area; `outputs` is what a client
 * actually receives — shown in the detail panel on hover / tap.
 */
export const services = [
  {
    name: 'Artificial Intelligence',
    group: 'AI Systems',
    summary: 'Scoping where AI creates measurable value in a product — and where a rule or a query would do better.',
    outputs: ['Use-case assessment', 'Feasibility prototype', 'Model & vendor choice'],
  },
  {
    name: 'Machine Learning',
    group: 'Data',
    summary: 'Supervised, unsupervised and deep learning models, trained and judged against an honest baseline.',
    outputs: ['Feature pipelines', 'Trained models', 'Evaluation report'],
  },
  {
    name: 'Generative AI',
    group: 'AI Systems',
    summary: 'Text, document and multimodal generation built into real workflows, with guardrails and cost controls.',
    outputs: ['Prompt & output schemas', 'Guardrails', 'Cost budget per request'],
  },
  {
    name: 'LLM Applications',
    group: 'AI Systems',
    summary: 'Production apps on Claude, GPT, Gemini or open models — provider-agnostic, observable and testable.',
    outputs: ['Provider abstraction', 'Streaming UI', 'Tracing & logs'],
  },
  {
    name: 'RAG & Knowledge Systems',
    group: 'AI Systems',
    summary: 'Hybrid retrieval over your documents, with answers that cite the passage they came from.',
    outputs: ['Ingestion & chunking', 'Hybrid search + rerank', 'Golden-set evals'],
  },
  {
    name: 'AI Agents',
    group: 'Automation',
    summary: 'Tool-using agents with explicit goals, verification steps and limits that end a run honestly.',
    outputs: ['Tool layer', 'Verified stop conditions', 'Run traces'],
  },
  {
    name: 'Computer Vision',
    group: 'AI Systems',
    summary: 'Detection, classification and inspection models, exported to run where the images are.',
    outputs: ['Labelled dataset plan', 'Trained detector', 'ONNX / edge export'],
  },
  {
    name: 'NLP',
    group: 'AI Systems',
    summary: 'Classification, extraction, clustering and search across text and speech — including Indic languages.',
    outputs: ['Extraction schemas', 'Classifiers', 'Semantic clustering'],
  },
  {
    name: 'Data Science',
    group: 'Data',
    summary: 'Exploratory analysis and statistical modelling that turns a vague question into a defensible answer.',
    outputs: ['Analysis notebook', 'Findings memo', 'Reproducible code'],
  },
  {
    name: 'Predictive Analytics',
    group: 'Data',
    summary: 'Forecasting and anomaly detection for the numbers a business plans around.',
    outputs: ['Forecast models', 'Backtests', 'Alerting thresholds'],
  },
  {
    name: 'Data Engineering',
    group: 'Data',
    summary: 'Pipelines that collect, clean, deduplicate and model data so everything downstream can rely on it.',
    outputs: ['ETL / ELT jobs', 'Data contracts', 'Warehouse schema'],
  },
  {
    name: 'Web Development',
    group: 'Products',
    summary: 'Fast, accessible websites and web apps in React, built to be maintained after launch.',
    outputs: ['Design system', 'Responsive build', 'Performance budget'],
  },
  {
    name: 'SaaS Development',
    group: 'Products',
    summary: 'Multi-tenant products with auth, roles, billing hooks and the admin tooling nobody sees in the demo.',
    outputs: ['Auth & RBAC', 'Tenant model', 'Admin console'],
  },
  {
    name: 'API Development',
    group: 'Products',
    summary: 'Typed REST APIs in FastAPI or Node, documented with OpenAPI and covered by tests.',
    outputs: ['OpenAPI spec', 'Validation layer', 'Integration tests'],
  },
  {
    name: 'Cloud Solutions',
    group: 'Products',
    summary: 'Containerised deploys on AWS, Azure or Vercel, sized to the load you have today.',
    outputs: ['Docker & CI/CD', 'Monitoring', 'Runbook'],
  },
  {
    name: 'Workflow Automation',
    group: 'Automation',
    summary: 'Connecting the tools a team already uses, with AI steps where judgment is needed.',
    outputs: ['Process map', 'Integrations', 'Human-in-the-loop checkpoints'],
  },
  {
    name: 'E-commerce & Ordering',
    group: 'Products',
    summary:
      'Catalogs, package pages, carts and checkout, with order IDs and a status pipeline customers can actually follow.',
    outputs: ['Catalog & package pages', 'Order & status model', 'Customer dashboard'],
  },
  {
    name: 'Payments & Checkout',
    group: 'Products',
    summary:
      'UPI, cards and net banking through Indian gateways, wired so a successful payment updates the order exactly once.',
    outputs: ['Gateway integration', 'Idempotent webhooks', 'Reconciliation reports'],
  },
  {
    name: 'CRM & Customer Data',
    group: 'Data',
    summary:
      'One customer record — profile, consent, history, contribution and what to send next — with the segments your team actually filters on.',
    outputs: ['Customer schema', 'Consent records', 'Admin segments & filters'],
  },
  {
    name: 'Messaging Automation',
    group: 'Automation',
    summary:
      'WhatsApp, SMS and email that fire on real events: confirmations, status updates, scheduled reminders. Opt-in and opt-out handled properly.',
    outputs: ['Template set', 'Scheduling rules', 'Consent & unsubscribe handling'],
  },
  {
    name: 'Content Platforms & CMS',
    group: 'Products',
    summary:
      'Your own feed instead of renting one: vertical video and photo posts, comments, moderation, and publishing that needs no developer.',
    outputs: ['Content model & CMS', 'Moderation tools', 'Shareable URLs with previews'],
  },
  {
    name: 'Media Pipelines',
    group: 'Products',
    summary:
      'Large photo and video volumes handled: secure uploads, compression, thumbnails, CDN delivery and lazy loading that keeps pages fast on phones.',
    outputs: ['Upload & processing pipeline', 'CDN delivery', 'Performance budget'],
  },
  {
    name: 'Admin Dashboards & Access Control',
    group: 'Products',
    summary:
      'The screens your team lives in — orders, content, payments, uploads — with roles scoped so each person sees only their part.',
    outputs: ['Role-based access', 'Operations dashboards', 'Audit trail'],
  },
  {
    name: 'Product Analytics',
    group: 'Data',
    summary:
      'Funnels from view to order, content performance, repeat rates and what each campaign or coupon actually returned.',
    outputs: ['Event schema', 'Funnel & cohort reports', 'Attribution'],
  },
]
