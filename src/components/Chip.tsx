import type { ReactNode } from 'react'

export function Chip({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`chip inline-block rounded-md px-2.5 py-1 ${className}`}>{children}</span>
}
