export interface SkillGroup {
  category: string
  items: string[]
}

export interface ArchitectureStep {
  label: string
  sublabels?: string[]
}

export interface ProjectCaseStudy {
  overview: string
  problem: string
  solution: string
  architecture: string
  stack: string[]
  features: string
  approach: string
  challenges: string
  future: string
  /** Optional step-by-step flow rendered as an ArchitectureDiagram. Label it conceptual in `architecture` text if it isn't fully implemented yet. */
  architectureFlow?: ArchitectureStep[]
  isConceptualArchitecture?: boolean
}

export interface Project {
  id: string
  name: string
  category: string
  description: string
  tech: string[]
  github: string
  demo: string | null
  /** Path under public/ — e.g. /images/projects/multi-agent-platform.png. Shows a "coming soon" placeholder if missing. */
  screenshot: string | null
  caseStudy: ProjectCaseStudy
}

export interface EducationEntry {
  period: string
  title: string
  institution: string
  detail: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
  link: string
}

export interface Repo {
  name: string
  desc: string
  tags: string[]
}

export interface SocialLinks {
  github: string
  linkedin: string
  email: string
}
