import { useState } from 'react'
import { SectionHeading } from '@/components/SectionHeading'
import { ProjectCard } from '@/components/ProjectCard'
import { ProjectCaseStudy } from '@/sections/ProjectCaseStudy'
import { projects } from '@/data/projects'

export function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeProject = projects.find((p) => p.id === activeId) ?? null

  return (
    <section id="projects" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="04"
          label="Projects"
          title="Featured work."
          description="Selected projects exploring backend systems, LLM applications, and multi-agent AI."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.07} onViewCaseStudy={setActiveId} />
          ))}
        </div>
      </div>

      <ProjectCaseStudy project={activeProject} onClose={() => setActiveId(null)} />
    </section>
  )
}
