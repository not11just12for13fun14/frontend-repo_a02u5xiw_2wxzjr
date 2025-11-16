import Spline from '@splinetool/react-spline'
import { ArrowRight, FolderOpen } from 'lucide-react'

export default function Hero({ onScheduleClick, onAssetsClick }) {
  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden bg-[#0B0F14] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/40 via-[#0B0F14]/60 to-[#0B0F14] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16 md:pt-36">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Run Effortless, High-Energy Trivia Nights
        </h1>
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80">
          Book, promote, and host QED Express trivia events—designed specifically for WeWork Community Teams.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button onClick={onScheduleClick} className="inline-flex items-center justify-center rounded-md bg-white text-[#0B0F14] px-5 py-3 font-medium shadow hover:bg-white/90 transition">
            Schedule Event
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button onClick={onAssetsClick} className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-5 py-3 font-medium backdrop-blur border border-white/15 hover:bg-white/15 transition">
            View Marketing Assets
            <FolderOpen className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
