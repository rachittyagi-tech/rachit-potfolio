export interface TechCluster {
  category: string
  chain: string[]
}

// Relationships between technologies, not fake proficiency percentages.
export const techClusters: TechCluster[] = [
  { category: 'AI / GenAI', chain: ['LLMs', 'RAG', 'AI Agents', 'Multi-Agent Systems'] },
  { category: 'Backend', chain: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL'] },
  { category: 'Frontend', chain: ['React', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Developer Tools', chain: ['Git', 'GitHub', 'Docker', 'VS Code'] },
]
