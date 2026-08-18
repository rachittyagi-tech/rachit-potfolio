import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { Chip } from '@/components/Chip'
import { socials } from '@/data/socials'
import type { Repo } from '@/lib/types'

export function RepoCard({ repo, delay = 0 }: { repo: Repo; delay?: number }) {
  const githubUsername = socials.github.split('/').filter(Boolean).pop()

  return (
    <motion.a
      href={`https://github.com/${githubUsername}/${repo.name}`}
      target="_blank"
      rel="noopener"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className="card-hover block rounded-xl border border-line bg-surface p-5"
    >
      <div className="mb-2 flex items-center gap-2 text-accent2">
        <Github size={14} />
        <span className="font-mono text-sm font-medium">{repo.name}</span>
      </div>
      <p className="mb-3 text-xs leading-relaxed text-dim">{repo.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {repo.tags.map((t) => (
          <Chip key={t} className="px-2 py-0.5 text-[10px]">
            {t}
          </Chip>
        ))}
      </div>
    </motion.a>
  )
}
