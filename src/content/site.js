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
  // Vercel deployment URL, used for cold outreach. Swap for eigensys.dev (or your real
  // domain) once it's connected — also update index.html, public/robots.txt, public/sitemap.xml
  domain: 'eigensys-website.vercel.app',

  // The name, for the About section.
  etymology: {
    term: 'eigen',
    gloss: "German for 'own', 'characteristic'",
    note: 'An eigenvector is the one direction a transformation leaves pointing the same way — everything else rotates around it. That is the job: find the few characteristic directions in a business, and build the system along them.',
  },

  location: 'India',
  timezone: 'Asia/Kolkata',
  timezoneLabel: 'IST · UTC+05:30',

  // Shown in the hero and CTA. Keep it true.
  availability: 'Taking on new projects',
  responseTime: 'We reply to every brief within one business day.',

  year: 2026,
}

// Contact form submissions post to Web3Forms (web3forms.com), which emails
// the studio inbox directly — no backend needed for a static site. This key
// is meant to be public: it identifies where submissions get delivered, not
// a secret. Get one free at web3forms.com.
export const web3formsAccessKey = '0a02fb4e-1abd-44b5-9077-a0ba1c345221'

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
