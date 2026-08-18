import { SectionHeading } from '@/components/SectionHeading'
import { CertificationCard } from '@/components/CertificationCard'
import { certifications } from '@/data/certifications'

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="08"
          label="Certifications"
          title="Certifications."
          description="Editable placeholders — add credential name, issuer, date and link."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <CertificationCard key={cert.issuer} cert={cert} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}
