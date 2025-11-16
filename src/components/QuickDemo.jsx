export default function QuickDemo() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">See How It Works (60 Seconds)</h2>
        <p className="mt-2 text-gray-600">Here’s a quick look at how Community Associates run QED Express: Host Panel → QR Join → First Question.</p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2 rounded-xl border border-gray-200 bg-gray-50 aspect-video flex items-center justify-center text-gray-500">
            <span>Loom-style video placeholder</span>
          </div>
          <div className="md:col-span-1 flex flex-col justify-between rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-700">Short walkthrough of the host flow and player join moment.</p>
            <button className="mt-4 w-fit rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-black">Watch Full Demo</button>
          </div>
        </div>
      </div>
    </section>
  )
}
