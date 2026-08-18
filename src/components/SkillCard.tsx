import { motion } from 'framer-motion'
import { Chip } from '@/components/Chip'
import type { SkillGroup } from '@/lib/types'

export function SkillCard({ group, delay = 0 }: { group: SkillGroup; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className="card-hover rounded-xl border border-line bg-surface p-6"
    >
      <h3 className="mb-3 font-display text-sm font-semibold text-accent2">{group.category}</h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
    </motion.div>
  )
}
