export default function LiveDemo({ onRequest }) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Want a Quick Team Demo?</h2>
        <p className="mt-2 text-gray-700">We can run a 10-minute mini-round in your building. No setup needed — just a screen and a laptop.</p>
        <button onClick={onRequest} className="mt-5 rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">Request Demo</button>
      </div>
    </section>
  )
}
