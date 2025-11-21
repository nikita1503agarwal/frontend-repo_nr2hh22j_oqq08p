import React from 'react'
import { Menu, Sparkles, Rocket, Cpu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="relative flex items-center justify-between rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.15)]">
          <a href="#top" className="group inline-flex items-center gap-2 px-4 py-3">
            <div className="relative">
              <span className="absolute inset-0 rounded-lg bg-cyan-400/30 blur-md"></span>
              <Rocket className="relative h-6 w-6 text-cyan-400" />
            </div>
            <span className="font-semibold tracking-tight text-white">NeonNova</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 pr-2">
            {[
              { label: 'Vision', href: '#vision' },
              { label: 'Tech', href: '#tech' },
              { label: 'Showcase', href: '#showcase' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm text-cyan-100/80 hover:text-white transition-colors"
              >
                <span className="absolute inset-0 rounded-lg bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors"></span>
                <span className="relative">{item.label}</span>
              </a>
            ))}
          </nav>

          <button className="md:hidden p-3 text-cyan-100/80">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
