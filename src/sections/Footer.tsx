import { profile } from '@/data/profile'
import { socials } from '@/data/socials'

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm md:flex-row md:px-8">
        <div className="text-center md:text-left">
          <p className="font-display font-semibold">{profile.name}</p>
          <p className="mt-0.5 text-xs text-faint">{profile.role}</p>
        </div>

        <div className="flex items-center gap-5 text-dim">
          <a href={socials.github} target="_blank" rel="noopener" className="transition-colors hover:text-accent focus-ring">
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener" className="transition-colors hover:text-accent focus-ring">
            LinkedIn
          </a>
          <a href={`mailto:${socials.email}`} className="transition-colors hover:text-accent focus-ring">
            Email
          </a>
        </div>

        <div className="text-center text-xs text-faint md:text-right">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="mt-0.5 font-mono">Built with React &amp; TypeScript</p>
        </div>
      </div>
    </footer>
  )
}
