import type { Repo } from '@/lib/types'

// Manually configured — no GitHub API stats are fabricated. Edit this list to update the section.
export const repos: Repo[] = [
  { name: 'multi-agent-platform', desc: 'Multi-agent AI platform for task automation.', tags: ['Python', 'FastAPI', 'LangGraph'] },
  { name: 'repogpt-ai', desc: 'Chat with a GitHub repository using RAG.', tags: ['Python', 'RAG', 'Embeddings'] },
  { name: 'creatorai-agent', desc: 'AI agent concept for creator workflows.', tags: ['Python', 'AI Agents'] },
  { name: 'missingpersonai', desc: 'Managing missing-person related information.', tags: ['Python'] },
]
