import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-2xl p-10 shadow-[0_0_60px_rgba(34,211,238,0.15)]">
          <div className="absolute -inset-40 opacity-30 bg-[conic-gradient(from_90deg,rgba(34,211,238,0.3),transparent_60%)] animate-[spin_16s_linear_infinite]" />
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>Let’s build something unreal</h3>
              <p className="mt-3 text-cyan-100/80">Tell us about your vision. We’ll design, prototype, and ship a neon-slick product that feels like the future.</p>
            </div>
            <form className="grid grid-cols-1 gap-3">
              <input className="rounded-xl bg-white/5 border border-cyan-400/20 px-4 py-3 text-white placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Your email" />
              <input className="rounded-xl bg-white/5 border border-cyan-400/20 px-4 py-3 text-white placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Company or project" />
              <button type="button" className="relative inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-slate-950">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-400" />
                <span className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-60" />
                <span className="relative">Request access</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
