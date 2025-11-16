export default function BuiltForCAs() {
  const bullets = [
    'Zero event prep required',
    'Works with your existing AV',
    'Reusable monthly poster (dry-erase date section)',
    'Support in English, German, and Spanish (custom local content on request)',
  ]

  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-violet-50/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Built for Community Associates</h2>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500"></span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
