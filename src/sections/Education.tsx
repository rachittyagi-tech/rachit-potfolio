import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { education } from '@/data/education'

export function Education() {
  return (
    <section id="education" className="border-t border-line bg-bg-alt py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="07" label="Education" title="Academic background." />

        <div className="relative space-y-10 pl-8">
          <div className="timeline-line absolute bottom-2 left-[7px] top-2 w-px" />

          {education.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className="relative"
            >
              <span
                className={`absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-4 border-bg-alt ${
                  i === 0 ? 'bg-accent' : 'bg-accent2'
                }`}
              />
              <p className="mb-1 font-mono text-xs text-accent2">{entry.period}</p>
              <h3 className="font-display text-lg font-semibold">{entry.title}</h3>
              <p className="mt-1 text-sm text-dim">{entry.institution}</p>
              <p className="mt-1 text-sm text-faint">{entry.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
