import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  useEffect(() => {
    const handleHashScroll = () => {
      const { hash } = window.location
      if (hash) {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    window.addEventListener('hashchange', handleHashScroll)
    return () => window.removeEventListener('hashchange', handleHashScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-400/30 selection:text-white">
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-32 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/2 -right-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Showcase />
        <CTA />
        <footer className="py-10 text-center text-cyan-100/60">© {new Date().getFullYear()} NeonNova Labs. All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
