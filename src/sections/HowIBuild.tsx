import { motion } from 'framer-motion'
import {
  Search,
  BookOpen,
  Blocks,
  Server,
  BrainCircuit,
  MonitorSmartphone,
  FlaskConical,
  Rocket,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { howIBuild } from '@/data/howIBuild'

const ICONS: Record<string, LucideIcon> = {
  Search,
  BookOpen,
  Blocks,
  Server,
  BrainCircuit,
  MonitorSmartphone,
  FlaskConical,
  Rocket,
}

export function HowIBuild() {
  return (
    <section id="how-i-build" className="border-t border-line bg-bg-alt py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="05" label="How I Build" title="How I Build." />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-8 gap-3">
            {howIBuild.map((step, i) => {
              const Icon = ICONS[step.icon]
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
                  className="card-hover flex flex-col items-start rounded-xl border border-line bg-surface p-4"
                >
                  <span className="font-mono text-xs text-accent2">{step.number}</span>
                  <div className="my-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={16} />
                  </div>
                  <p className="font-display text-sm font-semibold">{step.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-faint">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="relative space-y-6 pl-8 lg:hidden">
          <div className="timeline-line absolute bottom-2 left-[7px] top-2 w-px" />
          {howIBuild.map((step, i) => {
            const Icon = ICONS[step.icon]
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-8 top-1 h-3.5 w-3.5 rounded-full border-4 border-bg-alt bg-accent2" />
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-accent2">{step.number}</span>
                  <Icon size={14} className="text-accent" />
                  <p className="font-display text-sm font-semibold">{step.title}</p>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-faint">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
