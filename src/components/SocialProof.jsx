export default function SocialProof() {
  const points = [
    'Already hosting trivia nights in Madrid and Valencia',
    'Built specifically around Community Team workflows',
    'High attendance and strong member feedback',
    'Proven 45–60 minute format that reliably boosts after-work engagement',
  ]

  const testimonials = [
    { quote: '“Great turnout and zero setup stress.”', name: 'Community Associate, Madrid' },
    { quote: '“Members asked to make it monthly.”', name: 'Community Lead, Valencia' },
    { quote: '“Fast, fun, and easy to host.”', name: 'Senior CA, Spain' },
    { quote: '“Exactly what we needed after work.”', name: 'Front Desk, Castellana' },
  ]

  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-pink-50/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Trusted by WeWork Spain</h2>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500"></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-blue-500/10 to-pink-500/10 p-4 text-sm text-gray-700 border border-blue-200/40">
            <p className="font-medium text-gray-900">Why it works</p>
            <p className="mt-1">Short, energetic rounds + zero admin time = consistent attendance and happy members.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 p-5 bg-white hover:shadow-md transition">
              <p className="text-gray-900">{t.quote}</p>
              <p className="mt-3 text-sm text-gray-500">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
