import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import type { Certification } from '@/lib/types'

export function CertificationCard({ cert, delay = 0 }: { cert: Certification; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className="card-hover rounded-xl border border-dashed border-line bg-surface p-6"
    >
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Award size={16} />
      </div>
      <p className="mb-1 font-display text-sm font-semibold">{cert.name}</p>
      <p className="mb-1 text-xs text-dim">{cert.issuer}</p>
      <p className="font-mono text-xs text-faint">{cert.date}</p>
    </motion.div>
  )
}
