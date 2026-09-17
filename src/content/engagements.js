/**
 * How clients work with us.
 *
 * `price` is deliberately vague — put real numbers here once you are
 * comfortable quoting them, or leave as-is and quote after the call.
 */
export const engagements = [
  {
    id: 'discovery',
    name: 'Discovery sprint',
    length: '1–2 weeks',
    price: 'Fixed price',
    summary: 'For a problem that is real but not yet specified. Ends with a decision, not a deck.',
    includes: [
      'Problem brief and success metric',
      'Technical architecture and data contract',
      'Feasibility prototype on your data',
      'Cost estimate and a clear go / no-go',
    ],
    best: 'Best when nobody has proven the idea is buildable yet.',
  },
  {
    id: 'build',
    name: 'Build partnership',
    length: '4–12 weeks',
    price: 'Fixed scope, milestone billing',
    summary: 'A defined system, built and put into production, with you in the loop every week.',
    includes: [
      'Full implementation with tests in CI',
      'Weekly demo of working software',
      'Evaluation suite before launch',
      'Deployment, monitoring and a handover runbook',
    ],
    best: 'Best when the scope is agreed and the deadline is real.',
    featured: true,
  },
  {
    id: 'retainer',
    name: 'Embedded retainer',
    length: 'Monthly, rolling',
    price: 'Per month',
    summary: 'We stay on the system after launch — iterating, measuring and extending it.',
    includes: [
      'Reserved capacity each month',
      'New features and model upgrades',
      'Ongoing evaluation and cost tuning',
      'Direct line to the engineers who built it',
    ],
    best: 'Best when the system is live and needs to keep improving.',
  },
]

export const engagementNote =
  'Every engagement starts with a call and a written brief. If we are not the right team for the problem, we will say so and point you somewhere better.'
