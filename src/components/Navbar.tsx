import { useState } from 'react'
import { Github, Linkedin, Menu, X, Download } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useScrolled } from '@/hooks/useScrolled'
import { profile } from '@/data/profile'
import { socials } from '@/data/socials'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(20)

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-line/80 bg-bg/85 shadow-[0_10px_40px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl'
          : 'border-line/60 bg-bg/45 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid h-[72px] grid-cols-[1fr_auto_1fr] items-center">
          <a href="#home" aria-label="Rachit Tyagi — Home" className="justify-self-start focus-ring">
            <span className="relative block h-10 w-10 overflow-hidden rounded-full border border-accent/40 bg-surface shadow-[0_0_22px_rgba(124,108,255,0.18)]">
              <img
                src={profile.photoPath}
                alt=""
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />
              <span className="absolute inset-0 -z-10 bg-surface" />
            </span>
          </a>

          <nav className="hidden items-center justify-center gap-7 text-sm font-medium text-dim lg:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link hover:text-main focus-ring">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center justify-self-end gap-2.5 lg:flex">
            <ThemeToggle />
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="nav-icon-button focus-ring"
            >
              <Github size={17} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="nav-icon-button focus-ring"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={profile.resumePath}
              download
              className="ml-1 inline-flex items-center gap-2 rounded-full border border-accent/70 bg-accent/5 px-4 py-2 text-sm font-medium text-main transition-all duration-200 hover:border-accent hover:bg-accent/15 hover:text-white focus-ring"
            >
              <Download size={15} />
              Resume
            </a>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="nav-menu-button justify-self-end focus-ring lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line/80 bg-bg/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5 md:px-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-dim transition-colors hover:bg-surface hover:text-main focus-ring"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-3 border-t border-line pt-4">
              <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="nav-icon-button focus-ring">
                <Github size={17} />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="nav-icon-button focus-ring">
                <Linkedin size={17} />
              </a>
              <a href={profile.resumePath} download className="ml-auto inline-flex items-center gap-2 rounded-full border border-accent/70 px-4 py-2 text-sm text-main focus-ring">
                <Download size={15} />
                Resume
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
