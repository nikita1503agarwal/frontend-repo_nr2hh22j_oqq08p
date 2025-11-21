import React from 'react'
import { Cpu, Sparkles, Globe2, Shield, Zap, Cloud } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  { icon: Cpu, title: 'Neural Architectures', desc: 'Composable AI building blocks trained for your domain.' },
  { icon: Globe2, title: '3D Interfaces', desc: 'Hologram-inspired interactions rendered with modern WebGL.' },
  { icon: Shield, title: 'Zero-Trust Security', desc: 'Encryption out of the box with fine-grained policies.' },
  { icon: Zap, title: 'Edge Performance', desc: 'Latency sliced to milliseconds with edge compute.' },
  { icon: Cloud, title: 'Cloud Native', desc: 'Auto-scaling, observability, and reliability baked in.' },
  { icon: Sparkles, title: 'Delightful UX', desc: 'Micro-interactions and motion that feel like magic.' },
]

export default function Features() {
  return (
    <section id="tech" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(34,211,238,0.12)]"
            >
              <div className="absolute -inset-24 opacity-40 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.4),transparent_60%)] animate-[spin_8s_linear_infinite]" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="relative">
                  <span className="absolute inset-0 rounded-xl bg-cyan-400/30 blur" />
                  <f.icon className="relative h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{f.title}</h3>
                  <p className="text-sm text-cyan-100/80 mt-1">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
