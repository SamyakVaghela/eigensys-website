/** "From problem to production" — an ordered process, so it is numbered. */
export const approach = [
  {
    number: '01',
    title: 'Understand',
    body: 'We understand the business problem, users and constraints.',
    outputs: ['Problem brief', 'Success metric', 'Constraints & risks'],
    duration: 'Week 1',
  },
  {
    number: '02',
    title: 'Architect',
    body: 'We design the right technical architecture and solution.',
    outputs: ['Architecture doc', 'Data contract', 'Evaluation plan'],
    duration: 'Week 1–2',
  },
  {
    number: '03',
    title: 'Build',
    body: 'We develop rapidly while maintaining engineering quality.',
    outputs: ['Working increments', 'Tests in CI', 'Weekly demo'],
    duration: 'Week 2–6',
  },
  {
    number: '04',
    title: 'Validate',
    body: 'We test, measure and iterate based on real-world results.',
    outputs: ['Golden-set evals', 'Error analysis', 'Load checks'],
    duration: 'Continuous',
  },
  {
    number: '05',
    title: 'Deploy',
    body: 'We take the solution into production and make it reliable.',
    outputs: ['CI/CD pipeline', 'Monitoring', 'Handover runbook'],
    duration: 'Week 6+',
  },
]

/** "Why EigenSys" principles. Not a sequence, so no numbers. */
export const principles = [
  {
    title: 'AI-native',
    body: "We don't simply add AI to existing software. We design systems around intelligence when it actually creates value.",
  },
  {
    title: 'Engineering-first',
    body: 'Clean architecture, maintainable code and production-ready systems.',
  },
  {
    title: 'Fast execution',
    body: 'Small teams allow us to move quickly without unnecessary layers.',
  },
  {
    title: 'End-to-end',
    body: 'From idea and architecture to development, deployment and iteration.',
  },
]
