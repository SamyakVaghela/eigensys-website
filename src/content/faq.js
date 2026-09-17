/** Honest answers to the questions clients actually ask first. */
export const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'A discovery sprint is one to two weeks. A production build is usually four to twelve, depending on how much of the data work is already done. We would rather quote a range we can hit than a date we cannot.',
  },
  {
    q: 'How do you price work?',
    a: 'Fixed scope with milestone billing for builds, a flat fee for discovery, and a monthly rate for retainers. You get the estimate in writing after the first call, before any work starts.',
  },
  {
    q: 'Who owns the code and the models?',
    a: 'You do. On final payment, all code, model weights, prompts and documentation transfer to you, in your repositories. We keep nothing you would not want us to have.',
  },
  {
    q: 'What happens to our data?',
    a: 'It stays yours and stays minimal. We work on the smallest slice that answers the question, inside your infrastructure where possible, and we can run open models locally when data cannot leave your machines. We sign your NDA and your DPA.',
  },
  {
    q: 'How do we know the AI actually works?',
    a: 'Every system ships with an evaluation set built from your real cases — accuracy, groundedness, and the failure modes we found. You see the numbers before launch, and the build fails in CI if they drop.',
  },
  {
    q: 'What happens after handover?',
    a: 'You get a runbook, monitoring and a walkthrough with your team, plus thirty days of support for anything we built. After that you can take it in-house or keep us on a retainer.',
  },
  {
    q: 'Are you a reseller or an agency middleman?',
    a: 'Neither. The people on the call write the code. We do not subcontract the engineering.',
  },
  {
    q: 'What if AI is the wrong answer for our problem?',
    a: 'We will tell you in the first call. A well-written query, a rules engine or a better form beats a model more often than the industry admits, and saying so early costs you nothing.',
  },
]
