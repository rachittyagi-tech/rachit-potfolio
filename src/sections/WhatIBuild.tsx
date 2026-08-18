import { motion } from 'framer-motion'
import { BrainCircuit, Sparkles, Server, Layers, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Chip } from '@/components/Chip'
import { whatIBuild } from '@/data/whatIBuild'

const ICONS: Record<string, LucideIcon> = { BrainCircuit, Sparkles, Server, Layers }

export function WhatIBuild() {
  return (
    <section id="what-i-build" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="02" label="What I Build" title="What I Build." />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whatIBuild.map((area, i) => {
            const Icon = ICONS[area.icon]
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.08 }}
                className="group card-hover rounded-2xl border border-line bg-surface p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold">{area.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-dim">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
