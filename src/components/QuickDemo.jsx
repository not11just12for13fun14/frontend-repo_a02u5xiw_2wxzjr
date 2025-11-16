export default function QuickDemo() {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-50/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">See How It Works (60 Seconds)</h2>
        <p className="mt-2 text-gray-600">Here’s a quick look at how Community Associates run QED Express: Host Panel → QR Join → First Question.</p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 aspect-video flex items-center justify-center text-gray-500 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-pink-100/40" />
            <span className="relative">Loom-style video placeholder</span>
          </div>
          <div className="md:col-span-1 flex flex-col justify-between rounded-2xl border border-gray-200 p-5 bg-white">
            <p className="text-sm text-gray-700">Short walkthrough of the host flow and player join moment.</p>
            <button className="mt-4 w-fit rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2 hover:from-blue-400 hover:to-pink-400 shadow">
              Watch Full Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
