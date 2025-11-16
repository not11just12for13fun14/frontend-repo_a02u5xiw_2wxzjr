import { CalendarClock, Palette, Download } from 'lucide-react'

const steps = [
  {
    icon: CalendarClock,
    title: 'Choose date, time & languages',
    desc: 'Pick your slot and tell us your languages. We’ll localize the content.',
    color: 'from-sky-100 via-sky-50 to-white',
  },
  {
    icon: Palette,
    title: 'Select format (standard or themed)',
    desc: 'Keep it classic or go themed — both are plug-and-play.',
    color: 'from-pink-100 via-pink-50 to-white',
  },
  {
    icon: Download,
    title: 'Receive Host Panel + promo kit instantly',
    desc: 'Auto-generated quiz edition, poster, and WeWork app text in minutes.',
    color: 'from-amber-100 via-amber-50 to-white',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-50/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">How It Works</h2>
        <p className="mt-2 text-gray-600">Your quiz edition is auto-generated and pre-loaded. No manual setup or back-and-forth.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition bg-gradient-to-br ${s.color}`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white shadow">
                <s.icon className="h-5 w-5 text-blue-600" />
              </div>
              <p className="mt-4 font-semibold text-gray-900">{s.title}</p>
              <p className="mt-1.5 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
