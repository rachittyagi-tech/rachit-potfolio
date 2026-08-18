export interface BuildArea {
  title: string
  description: string
  tags: string[]
  icon: 'BrainCircuit' | 'Sparkles' | 'Server' | 'Layers'
}

export const whatIBuild: BuildArea[] = [
  {
    title: 'AI Agents',
    description: 'Intelligent agent-based systems and multi-agent workflows.',
    tags: ['AI Agents', 'LangGraph', 'CrewAI'],
    icon: 'BrainCircuit',
  },
  {
    title: 'Generative AI',
    description: 'LLM-powered applications, AI assistants and intelligent workflows.',
    tags: ['LLMs', 'RAG', 'Prompt Engineering'],
    icon: 'Sparkles',
  },
  {
    title: 'Backend Systems',
    description: 'Python, FastAPI, REST APIs and database-driven applications.',
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy'],
    icon: 'Server',
  },
  {
    title: 'Full-Stack Applications',
    description: 'Modern frontend experiences connected to scalable backend systems.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    icon: 'Layers',
  },
]
