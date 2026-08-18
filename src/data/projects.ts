import type { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    id: 'multi-agent-platform',
    name: 'Multi-Agent AI Platform for Intelligent Task Automation',
    category: 'AI Agents',
    description:
      'A multi-agent AI platform designed to automate complex tasks by coordinating specialized AI agents.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'LangGraph / CrewAI', 'Google Gemini', 'JWT Auth', 'RAG'],
    github: '#',
    demo: null,
    screenshot: '/images/projects/multi-agent-platform.png',
    caseStudy: {
      overview:
        'A platform where specialized AI agents each own a sub-task and coordinate through a shared orchestration layer to complete complex, multi-step work.',
      problem:
        'Complex, multi-step tasks are hard to automate reliably with a single monolithic AI call — they need coordination, memory, and specialization.',
      solution:
        'A platform where specialized AI agents each own a sub-task and coordinate through a shared orchestration layer.',
      architecture:
        'FastAPI backend, PostgreSQL for persistence via SQLAlchemy, agent orchestration via LangGraph/CrewAI, JWT-based authentication. The flow below is the conceptual orchestration design.',
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'LangGraph / CrewAI', 'Google Gemini', 'RAG'],
      features: 'Editable placeholder — add confirmed feature list here.',
      approach: 'Editable placeholder — describe your development approach here.',
      challenges: 'Editable placeholder — describe real challenges faced here.',
      future: 'Editable placeholder — list planned improvements here.',
      isConceptualArchitecture: true,
      architectureFlow: [
        { label: 'User' },
        { label: 'Manager / Orchestrator' },
        {
          label: 'Specialized Agents',
          sublabels: ['Research Agent', 'Coding Agent', 'Writer Agent', 'Review Agent'],
        },
        { label: 'Final Response' },
      ],
    },
  },
  {
    id: 'repogpt-ai',
    name: 'RepoGPT-AI',
    category: 'RAG / LLM',
    description:
      'An AI-powered application for interacting with and understanding GitHub repositories using repository parsing, embeddings, retrieval, and LLM-based responses.',
    tech: ['Python', 'FastAPI', 'GitPython', 'LLM', 'Embeddings', 'RAG', 'GitHub'],
    github: '#',
    demo: null,
    screenshot: '/images/projects/repogpt-ai.png',
    caseStudy: {
      overview:
        'An application that parses a GitHub repository and answers natural-language questions about it using retrieval-augmented generation.',
      problem: 'Understanding an unfamiliar codebase quickly is time-consuming, especially for large repositories.',
      solution:
        'An application that parses a repository, embeds its contents, and answers natural-language questions about it using retrieval-augmented generation.',
      architecture:
        'FastAPI service, repository parsing via GitPython, embedding + retrieval pipeline feeding an LLM for grounded responses.',
      stack: ['Python', 'FastAPI', 'GitPython', 'Embeddings', 'RAG'],
      features: 'Editable placeholder — add confirmed feature list here.',
      approach: 'Editable placeholder — describe your development approach here.',
      challenges: 'Editable placeholder — describe real challenges faced here.',
      future: 'Editable placeholder — list planned improvements here.',
    },
  },
  {
    id: 'creatorai-agent',
    name: 'CreatorAI-Agent',
    category: 'AI Agents',
    description: 'An AI agent platform concept for assisting creators with intelligent content-related workflows.',
    tech: ['Python', 'FastAPI', 'Google Gemini', 'AI Agents', 'Generative AI'],
    github: '#',
    demo: null,
    screenshot: '/images/projects/creator-ai.png',
    caseStudy: {
      overview: 'An AI agent concept aimed at assisting creators with content-related workflows.',
      problem: 'Editable placeholder — describe the problem this project addresses.',
      solution: 'An AI agent concept aimed at assisting creators with content-related workflows.',
      architecture: 'Editable placeholder — describe the architecture here.',
      stack: ['Python', 'FastAPI', 'Google Gemini', 'AI Agents'],
      features: 'Editable placeholder — add confirmed feature list here.',
      approach: 'Editable placeholder — describe your development approach here.',
      challenges: 'Editable placeholder — describe real challenges faced here.',
      future: 'Editable placeholder — list planned improvements here.',
    },
  },
  {
    id: 'missingpersonai',
    name: 'MissingPersonAI',
    category: 'AI / Software',
    description: 'An AI/software project focused on managing and processing missing-person related information.',
    tech: [],
    github: '#',
    demo: null,
    screenshot: '/images/projects/missing-person-ai.png',
    caseStudy: {
      overview: 'A project focused on managing and processing missing-person related information.',
      problem: 'Editable placeholder — describe the problem this project addresses.',
      solution: 'Editable placeholder — describe the solution here.',
      architecture: 'Editable placeholder — describe the architecture here.',
      stack: [],
      features: 'Editable placeholder — add confirmed feature list here.',
      approach: 'Editable placeholder — describe your development approach here.',
      challenges: 'Editable placeholder — describe real challenges faced here.',
      future: 'Editable placeholder — list planned improvements here.',
    },
  },
]
