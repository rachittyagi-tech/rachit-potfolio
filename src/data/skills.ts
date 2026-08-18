import type { SkillGroup } from '@/lib/types'

export const skills: SkillGroup[] = [
  { category: 'Programming', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'] },
  { category: 'Backend', items: ['FastAPI', 'Flask', 'REST APIs', 'SQLAlchemy'] },
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
  {
    category: 'AI / GenAI',
    items: ['Generative AI', 'LLMs', 'RAG', 'AI Agents', 'Multi-Agent Systems', 'Prompt Engineering'],
  },
  { category: 'AI Frameworks', items: ['LangChain', 'LangGraph', 'CrewAI'] },
  { category: 'Database', items: ['PostgreSQL', 'SQLAlchemy'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Docker', 'VS Code'] },
]
