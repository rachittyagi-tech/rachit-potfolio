import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Chip } from '@/components/Chip'
import { techClusters } from '@/data/techClusters'

export function DeveloperSnapshot() {
  return (
    <section id="developer-snapshot" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="06"
          label="Developer Snapshot"
          title="Developer Snapshot."
          description="How the technologies I use connect to each other, not made-up proficiency scores."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {techClusters.map((cluster, i) => (
            <motion.div
              key={cluster.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="card-hover rounded-xl border border-line bg-surface p-6"
            >
              <p className="mb-4 font-mono text-xs text-accent2">{cluster.category}</p>
              <div className="flex flex-wrap items-center gap-2">
                {cluster.chain.map((tech, j) => (
                  <span key={tech} className="flex items-center gap-2">
                    <Chip>{tech}</Chip>
                    {j < cluster.chain.length - 1 && <ArrowRight size={12} className="text-faint" aria-hidden="true" />}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
