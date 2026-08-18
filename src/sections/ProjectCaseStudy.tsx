import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Chip } from '@/components/Chip'
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram'
import type { Project } from '@/lib/types'

interface ProjectCaseStudyProps {
  project: Project | null
  onClose: () => void
}

const FIELDS: Array<[label: string, key: keyof Project['caseStudy']]> = [
  ['Problem', 'problem'],
  ['Solution', 'solution'],
  ['Architecture', 'architecture'],
  ['Key Features', 'features'],
  ['Development Approach', 'approach'],
  ['Challenges', 'challenges'],
  ['Future Improvements', 'future'],
]

export function ProjectCaseStudy({ project, onClose }: ProjectCaseStudyProps) {
  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="scrollbar-thin relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-line bg-surface p-7 md:p-9"
          >
            <button
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-5 top-5 rounded-lg p-2 transition-colors hover:bg-surface-2 focus-ring"
            >
              <X size={18} />
            </button>

            <span className="font-mono text-xs text-accent2">{project.category}</span>
            <h3 id="case-study-title" className="mb-2 mt-1 font-display text-2xl font-semibold">
              {project.name}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-dim">{project.caseStudy.overview}</p>

            {FIELDS.map(([label, key]) => (
              <div key={key} className="mb-4">
                <p className="mb-1 font-mono text-xs text-faint">{label}</p>
                <p className="text-sm leading-relaxed text-dim">{project.caseStudy[key] as string}</p>
              </div>
            ))}

            {project.caseStudy.architectureFlow && (
              <div className="mb-5">
                <p className="mb-2 font-mono text-xs text-faint">Architecture Diagram</p>
                <ArchitectureDiagram
                  steps={project.caseStudy.architectureFlow}
                  conceptual={project.caseStudy.isConceptualArchitecture}
                />
              </div>
            )}

            <div className="mb-5">
              <p className="mb-2 font-mono text-xs text-faint">Technology Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.caseStudy.stack.length ? (
                  project.caseStudy.stack.map((t) => <Chip key={t}>{t}</Chip>)
                ) : (
                  <span className="font-mono text-xs text-faint">Editable placeholder</span>
                )}
              </div>
            </div>

            <div className="flex gap-3 border-t border-line pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener"
                className="rounded-lg border border-line px-4 py-2 text-xs font-medium transition-colors hover:border-accent focus-ring"
              >
                GitHub
              </a>
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener"
                  className="rounded-lg border border-line px-4 py-2 text-xs font-medium transition-colors hover:border-accent focus-ring"
                >
                  Live Demo
                </a>
              ) : (
                <span className="self-center font-mono text-xs text-faint">Live demo not yet available</span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
