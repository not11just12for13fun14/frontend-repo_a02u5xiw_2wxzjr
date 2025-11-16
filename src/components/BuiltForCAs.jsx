export default function BuiltForCAs() {
  const bullets = [
    'Zero event prep required',
    'Works with your existing AV',
    'Reusable monthly poster (dry-erase date section)',
    'Support in English, German, and Spanish (custom local content on request)',
  ]

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Built for Community Associates</h2>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
