import { useState } from 'react'
import { ImageOff } from 'lucide-react'

export function ProjectScreenshot({ src, alt, className = '' }: { src: string | null; alt: string; className?: string }) {
  const [errored, setErrored] = useState(false)
  const showPlaceholder = !src || errored

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-t-2xl bg-surface-2 ${className}`}>
      {!showPlaceholder ? (
        <img
          src={src ?? undefined}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-faint">
          <ImageOff size={22} strokeWidth={1.5} />
          <p className="font-mono text-xs">Project screenshot coming soon</p>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  )
}
