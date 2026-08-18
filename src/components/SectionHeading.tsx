import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  index: string
  label: string
  title: string
  description?: ReactNode
}

export function SectionHeading({ index, label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-14 flex flex-wrap items-end justify-between gap-4"
    >
      <div>
        <span className="divider-num">
          {index} / {label}
        </span>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">{title}</h2>
      </div>
      {description && <p className="max-w-sm text-sm text-faint">{description}</p>}
    </motion.div>
  )
}
