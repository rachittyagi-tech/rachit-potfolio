import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { profile } from '@/data/profile'

export function About() {
  return (
    <section id="about" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="01" label="About" title="A software engineer building toward AI." />

        <div className="grid gap-12 md:grid-cols-5">
          <Reveal className="space-y-5 text-base leading-relaxed text-dim md:col-span-3 md:text-lg">
            {profile.aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-4 md:col-span-2">
            {profile.aboutFacts.map((fact) => (
              <div key={fact.label} className="card-hover rounded-xl border border-line bg-surface p-5">
                <p className="mb-1 font-mono text-xs text-accent2">{fact.label}</p>
                <p className="text-sm text-dim">{fact.value}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
