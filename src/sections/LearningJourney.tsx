import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { journey } from '@/data/journey'

export function LearningJourney() {
  return (
    <section id="journey" className="border-t border-line bg-bg-alt py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="09" label="Journey" title="How I got here." />

        <div className="flex flex-wrap gap-3">
          {journey.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.04 }}
              className="flex items-center gap-3"
            >
              <div className="card-hover rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium">
                {step}
              </div>
              {i < journey.length - 1 && <ChevronRight size={16} className="shrink-0 text-faint" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
