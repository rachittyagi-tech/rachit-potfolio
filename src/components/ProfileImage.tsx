import { useState } from 'react'
import { UserRound } from 'lucide-react'
import { profile } from '@/data/profile'

/**
 * Displays the real profile photo from public/images/profile.jpg.
 * Falls back to a clearly labeled placeholder if the file is missing —
 * never substitutes a stock or AI-generated face.
 */
export function ProfileImage() {
  const [errored, setErrored] = useState(false)

  return (
    <div className="relative h-full w-full overflow-hidden rounded-full border border-line bg-surface shadow-2xl">
      {!errored ? (
        <img
          src={profile.photoPath}
          alt={profile.photoAlt}
          className="h-full w-full object-cover"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center text-faint">
          <UserRound size={40} strokeWidth={1.5} />
          <p className="font-mono text-xs leading-relaxed">
            Add your professional photo to
            <br />
            <span className="text-accent2">public/images/profile.jpg</span>
          </p>
        </div>
      )}
    </div>
  )
}
