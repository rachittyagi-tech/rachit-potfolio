# Rachit Tyagi — Portfolio (React + TypeScript + Vite)

A production-structured personal portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Requirements
- Node.js 18+ and npm

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview   # optional — serve the production build locally to sanity-check it
```

`npm run build` runs a TypeScript project check (`tsc -b`) before bundling with Vite, so type errors will fail the build rather than ship silently.

## Add your content

| What | Where |
|---|---|
| Photo | `public/images/profile.jpg` |
| Resume PDF | `public/resume/Rachit-Tyagi-Resume.pdf` |
| Name, role, About text, hero copy | `src/data/profile.ts` |
| GitHub / LinkedIn / email | `src/data/socials.ts` |
| Skills | `src/data/skills.ts` |
| Projects + case studies | `src/data/projects.ts` |
| Education | `src/data/education.ts` |
| Certifications | `src/data/certifications.ts` |
| Learning journey steps | `src/data/journey.ts` |
| GitHub repo cards | `src/data/repos.ts` |

None of these files require touching component code — every section reads from its matching data file.

## Project structure

```
src/
├── components/     # reusable, presentational pieces (Navbar, Button, Chip, cards, ...)
├── sections/        # page sections composed from components + data (Hero, About, Projects, ...)
├── data/            # centralized content — the only files you should need to edit
├── pages/           # Home.tsx assembles all sections in order
├── hooks/           # useTheme (dark/light + localStorage), useScrolled
├── lib/             # shared TypeScript types
├── App.tsx          # wraps Home in ThemeProvider
├── main.tsx         # React root
└── index.css        # design tokens (CSS variables), agent-graph animation, shared utility classes

public/
├── images/profile.jpg          # add your photo here
├── resume/Rachit-Tyagi-Resume.pdf  # add your resume here
└── favicon/favicon.svg
```

## Notes
- Dark mode is the default; the toggle persists the choice to `localStorage`.
- The contact form is UI-only — it does not send email. Wire `handleSubmit` in `src/sections/Contact.tsx` to a service like Formspree/EmailJS or your own API.
- No fabricated experience, stats, or testimonials are included anywhere. Certifications, GitHub repo details, unconfirmed project internals, and social handles are clearly marked as editable placeholders in the data files.
- `prefers-reduced-motion` is respected globally via `src/index.css`.

## Premium upgrade — what's new

This project was upgraded from its initial version without deleting or replacing anything working. New additions:

**New sections** (see `src/pages/Home.tsx` for order): What I Build, How I Build (horizontal timeline on desktop, vertical on mobile), Developer Snapshot (technology relationship chains, not fake percentages), Currently Exploring, Quick Facts.

**New data files:** `src/data/whatIBuild.ts`, `howIBuild.ts`, `techClusters.ts`, `currentlyExploring.ts`.

**New components:** `AgentGraph` (now a labeled Manager → Research/Coding/Writer → Review orchestration graph in the hero), `MagneticButton` (subtle cursor-pull on hero CTAs, desktop-only), `ArchitectureDiagram` (renders a project's conceptual architecture flow), `ProjectScreenshot` (lazy-loaded, graceful "coming soon" placeholder).

**Hero upgrade:** glass-panel frame around the photo, floating motion, mouse-follow ambient glow, scroll indicator, magnetic CTA buttons.

**Project cards:** now show a screenshot area (`public/images/projects/`) with hover zoom, and the case-study modal includes a Project Overview field plus an architecture diagram for the Multi-Agent AI Platform project (explicitly labeled "Conceptual Architecture" since it isn't a claim about a deployed system).

**Resume section:** added a "View Resume" button (opens in a new tab) alongside the existing download button.

**Background:** subtle grid + low-opacity radial glow, theme-aware, added globally in `src/index.css`.

**SEO:** added `public/robots.txt` and `public/sitemap.xml` (update the placeholder domain in the sitemap once you have one).

**Intentionally not added:** a custom cursor. The brief said to remove it if it risks performance or accessibility, and a project already this animation-rich doesn't need one more moving part — the magnetic buttons and mouse-follow glow cover the "premium interactivity" goal without it.

### New asset paths
- `public/images/projects/multi-agent-platform.png`
- `public/images/projects/repogpt-ai.png`
- `public/images/projects/creator-ai.png`
- `public/images/projects/missing-person-ai.png`

Missing screenshots don't break anything — each card shows a "Project screenshot coming soon" placeholder instead.
