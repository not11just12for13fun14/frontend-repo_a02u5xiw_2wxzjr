export default function Checklist() {
  const items = {
    Space: [
      'Comfortable common area or event space',
      'Seating for teams',
    ],
    Tech: [
      'Laptop with Chrome',
      'Projector or screen',
      'Optional mic & background music',
    ],
    Materials: [
      'Prize options including Owl Trophies (ordering link below)',
    ],
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">What You Need</h2>
        <div className="mt-6 divide-y rounded-xl border">
          {Object.entries(items).map(([group, lines]) => (
            <details key={group} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between p-5">
                <span className="font-medium text-gray-900">{group}</span>
                <span className="text-gray-500 group-open:rotate-180 transition">▾</span>
              </summary>
              <div className="space-y-2 p-5 text-gray-700">
                {lines.map((l, i) => (
                  <p key={i}>• {l}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
