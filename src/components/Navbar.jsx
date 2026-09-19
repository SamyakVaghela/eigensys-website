import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Logo from './ui/Logo'
import ArrowButton from './ui/ArrowButton'
import ThemeToggle from './ui/ThemeToggle'
import { useScrolled } from '../hooks/useScrolled'
import { useActiveSection } from '../hooks/useActiveSection'
import { nav, site } from '../content/site'

export default function Navbar() {
  const scrolled = useScrolled(16)
  const active = useActiveSection(nav.map((item) => item.id))
  const [open, setOpen] = useState(false)

  // Lock scroll and close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return undefined
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ease-studio ${
          solid
            ? 'border-line bg-paper/80 shadow-[0_1px_0_rgb(10_10_11/0.02)] backdrop-blur-xl backdrop-saturate-150'
            : 'border-transparent bg-transparent'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>

        <nav
          aria-label="Primary"
          className={`frame flex items-center justify-between transition-[height] duration-500 ease-studio ${
            scrolled ? 'h-14' : 'h-16 sm:h-[4.5rem]'
          }`}
        >
          <a
            href="#top"
            aria-label={`${site.name} — back to top`}
            className="rounded-md"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`group relative inline-flex h-9 items-center px-3 text-[0.8125rem] transition-colors duration-200 ${
                      isActive ? 'text-ink' : 'text-graphite hover:text-ink'
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 bottom-1.5 h-px origin-left bg-accent transition-transform duration-500 ease-studio ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <ArrowButton href="#contact" size="sm" className="max-sm:hidden">
              Start a Project
            </ArrowButton>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="-mr-2 inline-flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-mist md:hidden"
            >
              {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 z-40 flex flex-col overflow-y-auto border-t border-line bg-paper md:hidden"
            style={{ top: `calc(${scrolled ? '3.5rem' : '4rem'} + env(safe-area-inset-top, 0px))` }}
          >
            <div className="frame flex flex-1 flex-col pt-6 pb-[max(2rem,env(safe-area-inset-bottom))]">
              <p className="eyebrow mb-4">Menu</p>
              <ul className="border-t border-line">
                {nav.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + index * 0.045, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-line"
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-4 active:bg-mist"
                    >
                      <span className="heading text-[2.25rem]">{item.label}</span>
                      <span className="font-mono text-xs text-ash tabular-nums">0{index + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-auto flex flex-col gap-4 pt-10"
              >
                <ArrowButton href="#contact" size="lg" className="w-full" onClick={() => setOpen(false)}>
                  Start a Project
                </ArrowButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
