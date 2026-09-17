import { motion } from 'motion/react'

/** Fade + slight rise when the element scrolls into view. Honors reduced motion via MotionConfig. */
export default function Reveal({ children, delay = 0, y = 18, as = 'div', className = '', ...props }) {
  const Component = motion[as]
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  )
}
