import { MotionConfig } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import WhatWeBuild from './components/WhatWeBuild'
import Services from './components/Services'
import Work from './components/Work'
import Technologies from './components/Technologies'
import Approach from './components/Approach'
import Engagements from './components/Engagements'
import FAQ from './components/FAQ'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme } = useTheme()

  return (
    // reducedMotion="user" turns transform/layout animations off when the OS asks for it.
    <MotionConfig reducedMotion="user">
      {/* The shell carries the resolved theme, so the palette holds even when
          the page is embedded somewhere that owns the <html> attributes. */}
      <div className="app-shell" data-theme={theme}>
        <Navbar />
        <main id="main">
          <Hero />
          <Capabilities />
          <WhatWeBuild />
          <Services />
          <Work />
          <Technologies />
          <Approach />
          <Engagements />
          <About />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
