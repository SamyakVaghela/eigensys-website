/**
 * Site-wide settings.
 * Everything you are likely to change before launch lives in this file:
 * contact email, domain, availability line.
 */

export const site = {
  name: 'Anamnos',
  wordmark: 'ANAMNOS',
  tagline: 'AI × Data × Software',
  domain: 'anamnos.dev', // also update index.html, public/robots.txt, public/sitemap.xml

  // The name, for the About section.
  etymology: {
    greek: 'ἀνάμνησις',
    gloss: 'anamnesis — recollection',
    note: "Plato's claim that learning is remembering, and the word a clinician uses for the history that explains the symptom. Both are the same idea: the answer is already in the record, if you can retrieve it and show your evidence.",
  },

  // PLACEHOLDER — replace with your real inbox.
  email: 'hello@anamnos.dev',

  location: 'India',
  timezone: 'Asia/Kolkata',
  timezoneLabel: 'IST · UTC+05:30',

  // Shown in the hero and CTA. Keep it true.
  availability: 'Taking on new projects',
  responseTime: 'We reply to every brief within one business day.',

  year: 2026,
}

export const nav = [
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Approach', href: '#approach', id: 'approach' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Engagements', href: '#engagements' },
  { label: 'Approach', href: '#approach' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export const mailto = (subject = 'New project') => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
