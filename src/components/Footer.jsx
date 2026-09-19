import { ArrowUp } from 'lucide-react'
import Logo from './ui/Logo'
import { footerLinks, site } from '../content/site'

export default function Footer() {
  const columns = [footerLinks.slice(0, 3), footerLinks.slice(3)]

  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="frame guides pt-16 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <Logo />
            <p className="mt-4 font-mono text-xs tracking-[0.06em] text-ash uppercase">{site.tagline}</p>
            <p className="mt-6 max-w-[36ch] text-sm leading-relaxed text-graphite">
              An AI and technology studio building intelligent software, machine learning systems, data solutions,
              automation and digital products.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block font-mono text-sm text-ink underline decoration-accent-line underline-offset-4 transition-colors hover:text-accent-text"
            >
              Get in touch
            </a>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 md:col-span-5 md:col-start-8">
            {columns.map((column, index) => (
              <div key={index}>
                <p className="eyebrow">{index === 0 ? 'Studio' : ' '}</p>
                <ul className="mt-4 space-y-2.5">
                  {column.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-graphite transition-colors hover:text-accent-text">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line py-6 font-mono text-[0.6875rem] text-ash sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p>Built with intelligence.</p>
            <a href="#top" className="inline-flex items-center gap-1.5 text-graphite transition-colors hover:text-ink">
              Back to top
              <ArrowUp aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>

      {/* Oversized wordmark, cropped by the page edge */}
      <div aria-hidden="true" className="pointer-events-none select-none">
        <p className="-mb-[0.18em] text-center text-[20vw] leading-[0.8] font-semibold tracking-[-0.06em] text-ink/[0.05]">
          {site.wordmarkLead}
          <span className="text-accent/25">{site.wordmarkTail}</span>
        </p>
      </div>
    </footer>
  )
}
