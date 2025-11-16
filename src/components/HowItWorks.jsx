import { CalendarClock, Palette, Download } from 'lucide-react'

const steps = [
  {
    icon: CalendarClock,
    title: 'Choose date, time & languages',
  },
  {
    icon: Palette,
    title: 'Select format (standard or themed)',
  },
  {
    icon: Download,
    title: 'Receive Host Panel + promo kit instantly',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">How It Works</h2>
        <p className="mt-2 text-gray-600">Your quiz edition is auto-generated and pre-loaded. No manual setup or back-and-forth.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-6 hover:shadow transition bg-white">
              <s.icon className="h-6 w-6 text-blue-600" />
              <p className="mt-4 font-medium text-gray-900">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
