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
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Trusted by WeWork Spain</h2>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-5 bg-white">
              <p className="text-gray-900">{t.quote}</p>
              <p className="mt-3 text-sm text-gray-500">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
