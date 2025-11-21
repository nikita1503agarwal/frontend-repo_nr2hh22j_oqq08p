import React from 'react'
import { motion } from 'framer-motion'

export default function Showcase() {
  const items = [
    { title: 'Atlas', desc: 'Multimodal agent orchestrating data across your stack.' },
    { title: 'Haze', desc: 'Spatial UI kit for holographic dashboards.' },
    { title: 'Pulse', desc: 'Realtime telemetry streamed with millisecond latency.' },
  ]
  return (
    <section id="showcase" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>Selected Work</h2>
          <p className="mt-2 text-cyan-100/80">Snapshots from recent builds and experiments.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-6 group"
            >
              <div className="absolute -inset-24 opacity-30 bg-[radial-gradient(circle_at_30%_70%,rgba(34,211,238,0.35),transparent_60%)]" />
              <div className="relative z-10">
                <div className="h-40 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 mb-4" />
                <h3 className="text-white font-semibold">{it.title}</h3>
                <p className="text-sm text-cyan-100/80 mt-1">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
