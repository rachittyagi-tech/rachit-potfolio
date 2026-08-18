import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:opacity-90',
  outline: 'border border-line text-main hover:border-accent',
  ghost: 'text-dim hover:text-accent',
}

const base =
  'inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 focus-ring'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  children: ReactNode
}

export function LinkButton({ variant = 'primary', className = '', children, ...props }: LinkButtonProps) {
  return (
    <a className={`${base} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
