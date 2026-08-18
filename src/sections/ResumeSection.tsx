import { Download, Eye } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { LinkButton } from '@/components/Button'
import { profile } from '@/data/profile'

export function ResumeSection() {
  return (
    <section id="resume" className="border-t border-line bg-bg-alt py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-surface p-8 md:flex-row md:p-12">
          <div>
            <h3 className="font-display text-2xl font-semibold">Want the full picture?</h3>
            <p className="mt-2 text-sm text-dim md:text-base">
              View or download my resume for a complete summary of my education, skills and projects.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <LinkButton href={profile.resumePath} target="_blank" rel="noopener" variant="outline">
              <Eye size={16} />
              View Resume
            </LinkButton>
            <LinkButton href={profile.resumePath} download variant="primary">
              <Download size={16} />
              Download Resume
            </LinkButton>
          </div>
        </Reveal>
        <p className="mt-4 text-center font-mono text-xs text-faint md:text-left">
          Expected file: public/resume/Rachit-Tyagi-Resume.pdf — add yours to enable these buttons.
        </p>
      </div>
    </section>
  )
}
