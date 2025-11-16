import { useState } from 'react'
import { CalendarPlus } from 'lucide-react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import SocialProof from './components/SocialProof'
import PromotionMaterials from './components/PromotionMaterials'
import QuickDemo from './components/QuickDemo'
import BuiltForCAs from './components/BuiltForCAs'
import Checklist from './components/Checklist'
import QuickGuide from './components/QuickGuide'
import LiveDemo from './components/LiveDemo'
import BookingForm from './components/BookingForm'
import TrophyOrder from './components/TrophyOrder'

function App() {
  const [showBooking, setShowBooking] = useState(false)
  const [showTrophy, setShowTrophy] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Sticky top CTA */}
      <div className="sticky top-0 z-40 backdrop-blur bg-white/75 border-b">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <div className="font-semibold">QED Express – WeWork Trivia</div>
          <button onClick={() => setShowBooking(true)} className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
            <CalendarPlus className="h-4 w-4" />
            Schedule Event
          </button>
        </div>
      </div>

      <Hero onScheduleClick={() => setShowBooking(true)} onAssetsClick={() => window.open('https://drive.google.com', '_blank')} />
      <HowItWorks />
      <SocialProof />
      <PromotionMaterials />
      <QuickDemo />
      <BuiltForCAs />
      <Checklist />

      {/* Optional trophy module CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Order Trophies (Optional)</h2>
            <button onClick={() => setShowTrophy(true)} className="rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-black">Order Trophies</button>
          </div>
          <p className="mt-2 text-gray-600">Minimum order: 10 units</p>
        </div>
      </section>

      <QuickGuide />
      <LiveDemo onRequest={() => setShowBooking(true)} />

      <footer className="border-t py-10 text-center text-sm text-gray-600">
        <div className="mx-auto max-w-6xl px-6 space-y-2">
          <p>QED Express</p>
          <p className="text-xs text-gray-500">QED Express is operated by a UK-registered company and is fully GDPR-compliant. No personal data is required for guests to play.</p>
        </div>
      </footer>

      {showBooking && <BookingForm onClose={() => setShowBooking(false)} />}
      {showTrophy && <TrophyOrder onClose={() => setShowTrophy(false)} />}
    </div>
  )
}

export default App
