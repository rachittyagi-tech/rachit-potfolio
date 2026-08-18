import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, ArrowRight, Download } from 'lucide-react'
import { AgentGraph } from '@/components/AgentGraph'
import { ProfileImage } from '@/components/ProfileImage'
import { LinkButton } from '@/components/Button'
import { MagneticButton } from '@/components/MagneticButton'
import { profile } from '@/data/profile'
import { socials } from '@/data/socials'

const badgePositions = [
  'left-0 top-4 sm:-left-6 md:-left-10 md:top-8',
  'right-0 top-14 sm:-right-8 md:-right-10 md:top-14',
  'left-0 bottom-20 sm:-left-8 md:-left-12 md:bottom-20',
  'right-0 bottom-12 sm:-right-8 md:-right-12 md:bottom-12',
  'left-1/2 bottom-0 -translate-x-1/2 sm:bottom-[-12px]',
]

export function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden pt-28 md:pt-32">
      <div className="hero-grid-glow" aria-hidden="true" />
      <AgentGraph />

      <div className="relative mx-auto grid min-h-[calc(92vh-72px)] max-w-7xl items-center gap-12 px-5 pb-20 md:grid-cols-[0.92fr_1.08fr] md:px-8 md:pb-24 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative order-2 flex justify-center md:order-1"
        >
          <motion.div
            className="relative h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] md:h-[390px] md:w-[390px] lg:h-[430px] lg:w-[430px]"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute -inset-8 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
            <div className="hero-photo-ring absolute -inset-3 rounded-full" aria-hidden="true" />
            <div className="hero-photo-ring-secondary absolute -inset-1.5 rounded-full" aria-hidden="true" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-surface shadow-[0_30px_100px_-35px_rgba(124,108,255,0.75)]">
              <ProfileImage />
            </div>

            {profile.heroBadges.map((badge, i) => (
              <span
                key={badge}
                className={`badge-orbit chip absolute z-10 hidden rounded-full px-3.5 py-2 shadow-[0_14px_30px_-16px_rgba(0,0,0,0.9)] sm:block ${badgePositions[i]}`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent2 align-middle" />
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
          className="relative z-10 order-1 max-w-2xl md:order-2"
        >
          <span className="chip mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 uppercase tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-accent2 shadow-[0_0_10px_var(--accent-2)]" />
            {profile.badge}
          </span>

          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[clamp(3.8rem,5.3vw,5.3rem)]">
            I'm <span className="hero-name-gradient">{profile.name}</span>
          </h1>
          <p className="mt-5 font-display text-xl font-medium text-dim sm:text-2xl lg:text-[1.7rem]">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-base leading-[1.8] text-dim sm:text-lg">{profile.heroDescription}</p>

          <div className="mt-7 flex items-center gap-3">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="hero-social focus-ring">
              <Github size={19} />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="hero-social focus-ring">
              <Linkedin size={19} />
            </a>
            <a href={`mailto:${socials.email}`} aria-label="Email Rachit Tyagi" className="hero-social focus-ring">
              <Mail size={19} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <MagneticButton>
              <LinkButton href="#projects" variant="primary" className="rounded-xl px-6 py-3.5 sm:px-7">
                Explore My Work <ArrowRight size={17} />
              </LinkButton>
            </MagneticButton>
            <MagneticButton>
              <LinkButton href={profile.resumePath} download variant="outline" className="rounded-xl px-6 py-3.5 sm:px-7">
                Download Resume <Download size={16} />
              </LinkButton>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#what-i-build"
        aria-label="Scroll to What I Build"
        className="focus-ring absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-faint md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown size={17} className="scroll-indicator-dot" />
      </motion.a>
    </section>
  )
}
