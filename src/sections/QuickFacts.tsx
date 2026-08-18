import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { profile } from '@/data/profile'

export function QuickFacts() {
  return (
    <section id="quick-facts" className="border-t border-line py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-wrap gap-3">
          {profile.quickFacts.map((fact, i) => (
            <motion.span
              key={fact}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
              className="chip flex items-center gap-1.5 rounded-full px-3 py-1.5"
            >
              <CheckCircle2 size={12} className="text-accent2" />
              {fact}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
