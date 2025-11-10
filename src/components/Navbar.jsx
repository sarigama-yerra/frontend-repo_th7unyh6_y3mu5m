import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-zinc-900/70 border border-white/20 dark:border-white/10 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
              <span className="text-sm font-semibold tracking-tight text-zinc-900">FinTouch</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-zinc-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="inline-flex items-center rounded-xl bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 transition-colors">
                Get started
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-zinc-200 px-3 py-2 text-zinc-700"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-zinc-200 px-4 sm:px-6 py-4">
              <div className="flex flex-col gap-3 text-sm text-zinc-700">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="py-2" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-white">
                  Get started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
