import { Navbar } from '@/components/Navbar'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { WhatIBuild } from '@/sections/WhatIBuild'
import { Skills } from '@/sections/Skills'
import { Projects } from '@/sections/Projects'
import { HowIBuild } from '@/sections/HowIBuild'
import { DeveloperSnapshot } from '@/sections/DeveloperSnapshot'
import { Education } from '@/sections/Education'
import { Certifications } from '@/sections/Certifications'
import { LearningJourney } from '@/sections/LearningJourney'
import { GithubSection } from '@/sections/GithubSection'
import { CurrentlyExploring } from '@/sections/CurrentlyExploring'
import { QuickFacts } from '@/sections/QuickFacts'
import { ResumeSection } from '@/sections/ResumeSection'
import { Contact } from '@/sections/Contact'
import { Footer } from '@/sections/Footer'

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <Skills />
        <Projects />
        <HowIBuild />
        <DeveloperSnapshot />
        <Education />
        <Certifications />
        <LearningJourney />
        <GithubSection />
        <CurrentlyExploring />
        <QuickFacts />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
