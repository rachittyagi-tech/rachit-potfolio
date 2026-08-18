import { SectionHeading } from '@/components/SectionHeading'
import { SkillCard } from '@/components/SkillCard'
import { skills } from '@/data/skills'

export function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-bg-alt py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="03" label="Skills" title="Tools I build with." />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <SkillCard key={group.category} group={group} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}
