/**
 * Selected work.
 *
 * `kind` is shown on every card so visitors always know what they are looking at:
 *   Product      — a full product built in-house
 *   Open source  — a public tool or library
 *   R&D          — research and engineering prototypes
 *   Concept      — a worked design for a problem we are ready to build; not shipped
 *
 * `visual` picks the illustration drawn in code for featured studies
 * (see components/WorkVisuals.jsx).
 */

export const featuredWork = [
  {
    id: 'talentlens',
    title: 'TalentLens',
    kind: 'Product',
    year: '2026',
    domain: 'AI Systems',
    summary: 'AI hiring intelligence where every answer carries the evidence behind it.',
    problem:
      'A single open role produces hundreds of resumes and hours of interview transcripts. They get read once and lost — and AI scores with no evidence are a liability in hiring.',
    built: [
      'Async ingestion of PDF, DOCX and WebVTT with per-stage status, chunked on token boundaries and indexed into Qdrant.',
      'Hybrid retrieval: dense and BM25 search fused with reciprocal rank fusion, reranked, then cut at a relevance floor.',
      'Streaming answers whose [n] markers bind to the exact passage — plus per-requirement candidate fit with quoted evidence.',
      'A golden dataset replayed on every change; the build fails when recall, groundedness or citation precision drop.',
    ],
    facts: [
      ['Retrieval', 'Dense + BM25 → RRF → rerank'],
      ['Evaluation', 'recall@k · MRR · groundedness'],
      ['Platform', 'JWT · RBAC · Celery · Prometheus'],
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Qdrant', 'Redis', 'Celery', 'Docker'],
    visual: 'citations',
  },
  {
    id: 'ctxray',
    title: 'ctxray',
    kind: 'Open source',
    year: '2026',
    domain: 'Products',
    summary: 'A command-line tool that shows what a repository costs an AI coding agent — and removes the waste.',
    problem:
      'Agent bills are driven by input tokens, and a committed lockfile or a snapshot folder can outweigh the whole source tree. Nothing in a normal toolchain puts a number on it.',
    built: [
      'A BPE token estimator calibrated against the real tokenizer, fast enough to scan a large repo in well under a second.',
      'Fourteen classes of context waste — lockfiles, build output, minified bundles, snapshots, bulk data, duplicates.',
      'Pricing across Claude, GPT and Gemini with a daily, monthly and yearly burn projection.',
      'Writes an .agentignore and AGENTS.md from what it actually found; CI mode catches waste before it merges.',
    ],
    facts: [
      ['Dependencies', '0'],
      ['Waste classes', '14'],
      ['Estimator error', '~6% median'],
    ],
    stack: ['Node.js', 'JavaScript', 'CLI', 'GitHub Actions'],
    visual: 'terminal',
  },
  {
    id: 'corrective-rag',
    title: 'Corrective RAG Engine',
    kind: 'R&D',
    year: '2026',
    domain: 'AI Systems',
    summary: 'A retrieval pipeline that grades its own evidence before it is allowed to answer.',
    problem:
      'Basic RAG answers confidently from whatever it retrieved — relevant or not. The fix is control flow: judge the evidence, retry when it is weak, and refuse when the corpus has no answer.',
    built: [
      'Mixed-format ingestion into Chroma with pluggable chunking strategies, configured from a single YAML file.',
      'A LangGraph state machine: retrieve → grade → rewrite the query if needed → generate → hallucination check.',
      'A chat interface that shows each step running live, with the source chunks behind every answer.',
      'A 32-question golden set, including deliberately unanswerable questions that test whether it declines.',
    ],
    facts: [
      ['Graph', '5 nodes, 2 feedback edges'],
      ['Golden set', '32 questions'],
      ['Scoring', 'LLM-as-judge, temperature 0'],
    ],
    stack: ['Python', 'LangGraph', 'Gemini', 'Chroma', 'Streamlit'],
    visual: 'graph',
  },
  {
    id: 'conversational-cad',
    title: 'Conversational CAD',
    kind: 'R&D',
    year: '2026',
    domain: 'Automation',
    summary: 'Parametric 3D models built and revised in plain language — an LLM driving FreeCAD over MCP.',
    problem:
      'Engineers and designers spend hours on small parametric changes: move a setback, add two floors, re-space a frame. Each is a precise, repeatable instruction — exactly what a model can execute.',
    built: [
      'A Model Context Protocol bridge that lets a model read and edit live FreeCAD documents object by object.',
      'Runs on a local model through Ollama, so design files never leave the machine — or on hosted models when scale matters.',
      'Edits existing designs as well as creating them: architectural massing, villas, product concept models.',
    ],
    facts: [
      ['Protocol', 'MCP'],
      ['Runtime', 'Local (Ollama) or hosted'],
      ['Output', 'Parametric .FCStd'],
    ],
    stack: ['Python', 'MCP', 'FreeCAD', 'Ollama', 'LLMs'],
    visual: 'cad',
  },
]

export const workIndex = [
  {
    id: 'lead-intelligence',
    title: 'Lead Intelligence Pipeline',
    kind: 'Product',
    year: '2026',
    domain: 'Automation',
    summary:
      'Finds and ranks freelance and local-business opportunities from public sources — separating buyers from sellers, projects from salaried jobs, and software work from everything else.',
    stack: ['Python', 'REST APIs', 'Open data', 'Scoring engine'],
  },
  {
    id: 'looping-lab',
    title: 'looping-lab',
    kind: 'Open source',
    year: '2026',
    domain: 'AI Systems',
    summary:
      'A readable agent loop in about 600 lines of standard-library Python, showing why a verification step — not the model — should decide when work is done.',
    stack: ['Python', 'AI Agents', 'Claude'],
  },
  {
    id: 'hindi-ser',
    title: 'Hindi Speech Emotion Recognition',
    kind: 'R&D',
    year: '2025',
    domain: 'AI Systems',
    summary:
      'CNN and LSTM models on MFCC and prosodic features across a 7,577-recording Hindi corpus, reported against its 52% majority-class baseline.',
    stack: ['Python', 'Deep learning', 'MFCC', 'Audio augmentation'],
  },
  {
    id: 'workforce-rework',
    title: 'Workforce Rework Detection',
    kind: 'R&D',
    year: '2026',
    domain: 'Data',
    summary:
      'Project-scoped clustering of timesheet entries that surfaces overspent tasks and work being redone under a different name.',
    stack: ['HDBSCAN', 'UMAP', 'Embeddings', 'FastAPI'],
  },
  {
    id: 'predictive-intelligence',
    title: 'Predictive Intelligence',
    kind: 'Concept',
    year: '—',
    domain: 'Data',
    summary: 'Forecasting for business KPIs, with anomaly alerts that arrive before the monthly report does.',
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'FastAPI', 'React'],
  },
  {
    id: 'intelligent-operations',
    title: 'Intelligent Operations',
    kind: 'Concept',
    year: '—',
    domain: 'Automation',
    summary: 'Agents that connect workflows and data across a business, handing off to a person when confidence drops.',
    stack: ['LLMs', 'AI Agents', 'REST APIs', 'Python', 'React'],
  },
  {
    id: 'data-command-center',
    title: 'Data Command Center',
    kind: 'Concept',
    year: '—',
    domain: 'Products',
    summary: 'An operations dashboard that reduces raw operational data to a short list of things to act on today.',
    stack: ['React', 'Python', 'PostgreSQL', 'Data visualization'],
  },
  {
    id: 'visual-inspection',
    title: 'Visual Inspection',
    kind: 'Concept',
    year: '—',
    domain: 'AI Systems',
    summary: 'Defect detection on production-line images, exported to run on the edge device beside the camera.',
    stack: ['PyTorch', 'OpenCV', 'ONNX', 'FastAPI'],
  },
]

export const workDomains = ['All', 'AI Systems', 'Data', 'Products', 'Automation']
