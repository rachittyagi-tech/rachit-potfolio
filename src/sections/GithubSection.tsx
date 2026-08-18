import { SectionHeading } from '@/components/SectionHeading'
import { RepoCard } from '@/components/RepoCard'
import { repos } from '@/data/repos'
import { socials } from '@/data/socials'

export function GithubSection() {
  const githubUsername = socials.github.split('/').filter(Boolean).pop()

  return (
    <section id="github" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="10"
          label="GitHub"
          title="Developer activity."
          description={
            <a href={socials.github} target="_blank" rel="noopener" className="text-accent hover:underline focus-ring">
              @{githubUsername} &rarr;
            </a>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {repos.map((repo, i) => (
            <RepoCard key={repo.name} repo={repo} delay={i * 0.06} />
          ))}
        </div>
        <p className="mt-6 font-mono text-xs text-faint">
          Repository data is manually configured in one place — edit src/data/repos.ts to update.
        </p>
      </div>
    </section>
  )
}
