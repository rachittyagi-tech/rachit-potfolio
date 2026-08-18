export interface WorkflowStep {
  number: string
  title: string
  description: string
  icon: 'Search' | 'BookOpen' | 'Blocks' | 'Server' | 'BrainCircuit' | 'MonitorSmartphone' | 'FlaskConical' | 'Rocket'
}

export const howIBuild: WorkflowStep[] = [
  { number: '01', title: 'Understand', description: 'Clarify the real problem before writing any code.', icon: 'Search' },
  { number: '02', title: 'Research', description: 'Explore approaches, tools, and prior art.', icon: 'BookOpen' },
  { number: '03', title: 'Design Architecture', description: 'Plan how the pieces fit together.', icon: 'Blocks' },
  { number: '04', title: 'Build Backend', description: 'Implement the core logic and data layer.', icon: 'Server' },
  { number: '05', title: 'Integrate AI', description: 'Wire in LLMs, retrieval, or agent logic where needed.', icon: 'BrainCircuit' },
  { number: '06', title: 'Build Frontend', description: 'Create the interface that ties it together.', icon: 'MonitorSmartphone' },
  { number: '07', title: 'Test', description: 'Verify behavior and fix what breaks.', icon: 'FlaskConical' },
  { number: '08', title: 'Deploy', description: 'Ship it so it can actually be used.', icon: 'Rocket' },
]
