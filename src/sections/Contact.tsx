import { type FormEvent, useState } from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { socials } from '@/data/socials'

export function Contact() {
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setIsSending(true)
    setStatus('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/maewlwjg', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('Message sent successfully! I’ll get back to you soon.')
        form.reset()
      } else {
        setStatus('Something went wrong. Please try again.')
      }
    } catch {
      setStatus('Unable to send message. Please try again later.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="11"
          label="Contact"
          title="Let's Build Something Intelligent."
          description="Open to internship and software/AI engineering opportunities."
        />

        <div className="grid gap-12 md:grid-cols-5">
          {/* Contact Information */}
          <Reveal className="space-y-5 md:col-span-2">
            <a
              href={`mailto:${socials.email}`}
              className="flex items-center gap-3 text-dim transition-colors hover:text-accent focus-ring"
            >
              <Mail size={18} />
              {socials.email}
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-dim transition-colors hover:text-accent focus-ring"
            >
              <Linkedin size={18} />
              {socials.linkedin.replace('https://', '')}
            </a>

            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-dim transition-colors hover:text-accent focus-ring"
            >
              <Github size={18} />
              {socials.github.replace('https://', '')}
            </a>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.1} className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="grid gap-4 sm:grid-cols-2"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="cf-name"
                  className="mb-1.5 block font-mono text-xs text-faint"
                >
                  Name
                </label>

                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg px-4 py-3 text-sm focus-ring"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="cf-email"
                  className="mb-1.5 block font-mono text-xs text-faint"
                >
                  Email
                </label>

                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg px-4 py-3 text-sm focus-ring"
                />
              </div>

              {/* Subject */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="cf-subject"
                  className="mb-1.5 block font-mono text-xs text-faint"
                >
                  Subject
                </label>

                <input
                  id="cf-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  className="w-full rounded-lg px-4 py-3 text-sm focus-ring"
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="cf-message"
                  className="mb-1.5 block font-mono text-xs text-faint"
                >
                  Message
                </label>

                <textarea
                  id="cf-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Your message"
                  className="w-full rounded-lg px-4 py-3 text-sm focus-ring"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 focus-ring"
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>

                {status && (
                  <span
                    role="status"
                    aria-live="polite"
                    className="font-mono text-xs text-accent2"
                  >
                    {status}
                  </span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}