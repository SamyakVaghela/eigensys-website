/**
 * Site-wide settings.
 * Everything you are likely to change before launch lives in this file:
 * contact email, domain, availability line.
 */

export const site = {
  name: 'EigenSys',
  // The wordmark is set in two parts so "SYS" can carry the accent colour.
  wordmarkLead: 'EIGEN',
  wordmarkTail: 'SYS',
  wordmark: 'EIGENSYS',
  tagline: 'AI × Data × Software',
  domain: 'eigensys.dev', // also update index.html, public/robots.txt, public/sitemap.xml

  // The name, for the About section.
  etymology: {
    term: 'eigen',
    gloss: "German for 'own', 'characteristic'",
    note: 'An eigenvector is the one direction a transformation leaves pointing the same way — everything else rotates around it. That is the job: find the few characteristic directions in a business, and build the system along them.',
  },

  // PLACEHOLDER — replace with your real inbox.
  email: 'hello@eigensys.dev',

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
