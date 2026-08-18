import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Chip } from '@/components/Chip'
import { ProjectScreenshot } from '@/components/ProjectScreenshot'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
  delay?: number
  onViewCaseStudy: (id: string) => void
}

export function ProjectCard({ project, delay = 0, onViewCaseStudy }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface"
    >
      <ProjectScreenshot src={project.screenshot} alt={`${project.name} — screenshot`} />

      <div className="flex flex-1 flex-col p-7">
        <span className="mb-3 font-mono text-xs text-accent2">{project.category}</span>
        <h3 className="mb-2 font-display text-xl font-semibold">{project.name}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-dim">{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.length ? (
            project.tech.map((t) => <Chip key={t}>{t}</Chip>)
          ) : (
            <span className="font-mono text-xs text-faint">Tech stack — editable placeholder</span>
          )}
        </div>

        <div className="flex items-center gap-3 border-t border-line pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener"
            className="text-xs font-medium text-dim transition-colors hover:text-accent focus-ring"
          >
            GitHub &rarr;
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener"
              className="text-xs font-medium text-dim transition-colors hover:text-accent focus-ring"
            >
              Live Demo &rarr;
            </a>
          ) : (
            <span className="font-mono text-xs text-faint">Live demo — not yet available</span>
          )}
          <button
            onClick={() => onViewCaseStudy(project.id)}
            className="ml-auto flex items-center gap-1 rounded-md bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition-all duration-200 hover:bg-accent hover:text-white hover:gap-2 focus-ring"
          >
            View Case Study <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
