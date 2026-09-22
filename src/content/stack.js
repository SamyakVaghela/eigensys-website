/** Technology wall. `note` is shown when a tag is hovered or focused. */
export const stackGroups = [
  {
    label: 'AI / ML',
    items: [
      { name: 'Python', note: 'The default language for our models, pipelines and APIs.' },
      { name: 'PyTorch', note: 'Deep learning training and inference.' },
      { name: 'TensorFlow', note: 'Deep learning where an existing stack already uses it.' },
      { name: 'Scikit-learn', note: 'Classical ML, baselines and evaluation.' },
      { name: 'Hugging Face', note: 'Open models, tokenizers and datasets.' },
    ],
  },
  {
    label: 'GenAI',
    items: [
      { name: 'OpenAI', note: 'Hosted models behind a provider-agnostic interface.' },
      { name: 'LLMs', note: 'Claude, GPT, Gemini and open-weight models.' },
      { name: 'RAG', note: 'Hybrid retrieval with citations and golden-set evaluation.' },
      { name: 'LangChain', note: 'Composable chains, loaders and tool calling.' },
      { name: 'LangGraph', note: 'Stateful agent and retrieval graphs with feedback loops.' },
    ],
  },
  {
    label: 'Data',
    items: [
      { name: 'PostgreSQL', note: 'Relational source of truth; JSONB where shape is fluid.' },
      { name: 'Pandas', note: 'Analysis, cleaning and feature work.' },
      { name: 'NumPy', note: 'Numerical computing underneath everything else.' },
      { name: 'Apache Spark', note: 'Distributed processing when data outgrows one machine.' },
    ],
  },
  {
    label: 'Engineering',
    items: [
      { name: 'React', note: 'Interfaces, dashboards and this website.' },
      { name: 'JavaScript', note: 'Front ends, tooling and zero-dependency CLIs.' },
      { name: 'Node.js', note: 'Services and developer tools.' },
      { name: 'FastAPI', note: 'Typed, async Python APIs with OpenAPI docs.' },
      { name: 'REST APIs', note: 'Documented contracts between systems.' },
      { name: 'Payments', note: 'UPI, cards and net banking, wired so a webhook updates an order exactly once.' },
      {
        name: 'WhatsApp Business API',
        note: 'Templated confirmations and reminders, opt-in and opt-out handled properly.',
      },
    ],
  },
  {
    label: 'Infrastructure',
    items: [
      { name: 'Docker', note: 'Identical environments from laptop to production.' },
      { name: 'Git', note: 'Every change reviewed and reversible.' },
      { name: 'GitHub', note: 'Lint, type-check, test and eval gates on every PR.' },
      { name: 'AWS', note: 'Compute, storage and managed data services.' },
      { name: 'Azure', note: 'Enterprise deployments and Microsoft data platforms.' },
      { name: 'Vercel', note: 'Front ends shipped from every commit.' },
      { name: 'CDN', note: 'Media delivery, caching and lazy loading that keeps pages fast on phones.' },
    ],
  },
]
