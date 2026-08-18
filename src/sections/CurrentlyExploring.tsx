import { motion } from 'framer-motion'
import { Compass } from 'lucide-react'
import { currentlyExploring } from '@/data/currentlyExploring'

export function CurrentlyExploring() {
  return (
    <section id="currently-exploring" className="border-t border-line bg-bg-alt py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-accent2">
            <Compass size={14} />
            Currently Exploring
          </span>
          <div className="flex flex-wrap gap-2">
            {currentlyExploring.map((topic, i) => (
              <motion.span
                key={topic}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
                className="chip rounded-full px-3 py-1.5"
              >
                {topic}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
