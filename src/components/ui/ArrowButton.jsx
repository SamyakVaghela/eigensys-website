import { ArrowRight } from 'lucide-react'

const variants = {
  primary: 'bg-accent-btn text-accent-btn-text hover:brightness-95',
  secondary: 'border border-line-strong bg-paper/60 text-ink hover:border-accent hover:text-accent-text',
  inverted: 'bg-band-text text-band hover:brightness-95',
  ghost: 'text-ink hover:bg-mist',
}

const sizes = {
  sm: 'h-9 px-3.5 text-[0.8125rem] gap-1.5',
  md: 'h-11 px-5 text-[0.9375rem] gap-2',
  lg: 'h-13 px-6 text-base gap-2.5',
}

/**
 * Link styled as a button. The arrow nudges right on hover.
 * Pass `arrow={false}` for a plain button.
 */
export default function ArrowButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  arrow = true,
  className = '',
  ...props
}) {
  return (
    <a
      href={href}
      className={`group inline-flex shrink-0 items-center justify-center rounded-full font-medium whitespace-nowrap transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-[1.05em] transition-transform duration-300 ease-studio group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      )}
    </a>
  )
}
