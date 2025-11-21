import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}
            >
              Building tomorrow in neon
              <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">technology</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-6 text-lg md:text-xl text-cyan-100/80 max-w-2xl"
            >
              A cyberpunk-inspired studio crafting intelligent products with immersive interfaces and delightful performance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#showcase" className="relative group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-slate-950 font-semibold overflow-hidden">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-400"></span>
                <span className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-50 group-hover:opacity-80 transition" />
                <span className="relative">Explore the work</span>
              </a>
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-cyan-400/30 text-cyan-100/90 hover:text-white">
                <span className="relative">Get in touch</span>
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative grid grid-cols-3 gap-4">
              {['AI Systems', '3D Interfaces', 'Edge Compute', 'Vision', 'Realtime', 'APIs'].map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="relative aspect-square rounded-2xl bg-white/5 border border-cyan-400/20 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_30px_rgba(34,211,238,0.15)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]" />
                  <div className="absolute -inset-12 animate-[spin_12s_linear_infinite] opacity-30">
                    <div className="h-full w-full bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(34,211,238,0.75)_360deg)]" />
                  </div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <span className="text-cyan-200 text-sm font-medium">{label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
