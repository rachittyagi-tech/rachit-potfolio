import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import type { ArchitectureStep } from '@/lib/types'

interface ArchitectureDiagramProps {
  steps: ArchitectureStep[]
  conceptual?: boolean
}

export function ArchitectureDiagram({ steps, conceptual }: ArchitectureDiagramProps) {
  return (
    <div className="rounded-xl border border-line bg-surface-2 p-6">
      {conceptual && (
        <span className="chip mb-5 inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-wide">
          Conceptual Architecture
        </span>
      )}
      <div className="flex flex-col items-center gap-2">
        {steps.map((step, i) => (
          <div key={step.label} className="flex w-full flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.12, ease: 'easeOut' }}
              className="w-full max-w-sm rounded-lg border border-line bg-surface px-4 py-3 text-center"
            >
              <p className="font-display text-sm font-semibold">{step.label}</p>
              {step.sublabels && (
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {step.sublabels.map((s) => (
                    <span key={s} className="chip rounded-md px-2 py-1 text-[10px]">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
            {i < steps.length - 1 && <ArrowDown size={16} className="my-1.5 shrink-0 text-faint" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </div>
  )
}
