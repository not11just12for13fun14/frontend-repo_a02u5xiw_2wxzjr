import Spline from '@splinetool/react-spline'
import { ArrowRight, FolderOpen, Sparkles } from 'lucide-react'

export default function Hero({ onScheduleClick, onAssetsClick }) {
  return (
    <section className="relative min-h-[82vh] w-full overflow-hidden bg-[#0B0F14] text-white">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Color wash + vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_20%_10%,rgba(0,138,255,0.25),transparent),radial-gradient(800px_400px_at_80%_20%,rgba(255,69,168,0.2),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0F14]/30 via-[#0B0F14]/60 to-[#0B0F14]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36">
        {/* Fun badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
          <span>Fast, fun, WeWork-ready</span>
        </div>

        <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-[#7DD3FC] via-[#60A5FA] to-[#F472B6] bg-clip-text text-transparent">High-Energy Trivia</span>
          <br />
          for Your Community Night
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80">
          Book, promote, and host QED Express trivia events—purpose-built for Community Teams. Zero prep, max vibes.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onScheduleClick}
            className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-3 font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:from-blue-400 hover:to-pink-400 transition"
          >
            Schedule Event
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={onAssetsClick}
            className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-6 py-3 font-semibold backdrop-blur border border-white/20 hover:bg-white/15 transition"
          >
            View Marketing Assets
            <FolderOpen className="ml-2 h-4 w-4" />
          </button>
        </div>

        {/* Floating fun dots */}
        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center gap-2 opacity-60">
          <span className="h-2 w-2 rounded-full bg-blue-300 animate-pulse" />
          <span className="h-2 w-2 rounded-full bg-pink-300 animate-pulse [animation-delay:200ms]" />
          <span className="h-2 w-2 rounded-full bg-amber-300 animate-pulse [animation-delay:400ms]" />
        </div>
      </div>
    </section>
  )
}
