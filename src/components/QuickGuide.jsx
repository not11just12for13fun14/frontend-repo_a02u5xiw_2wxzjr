export default function QuickGuide() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Hosting the Event</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="font-medium text-gray-900">Before the event (15 minutes):</h3>
            <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
              <li>Test audio</li>
              <li>Open Host Panel</li>
              <li>Select today’s edition</li>
              <li>Share presentation tab</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="font-medium text-gray-900">Players join:</h3>
            <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
              <li>Scan QR → download app → join team → Ready to play</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="font-medium text-gray-900">You control only 3 things:</h3>
            <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
              <li>Start rounds</li>
              <li>Keep time</li>
              <li>Follow built-in flow</li>
            </ul>
            <p className="mt-3 text-gray-700">Runtime: 45–60 minutes</p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="font-medium text-gray-900">Ending the Quiz</h3>
            <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
              <li>Reveal teams bottom → top</li>
              <li>Show final leaderboard</li>
              <li>Ask for feedback in the app</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border p-6">
          <h3 className="font-medium text-gray-900">Troubleshooting</h3>
          <p className="mt-2 text-gray-700">Troubleshooting video + FAQ coming soon.</p>
        </div>
      </div>
    </section>
  )
}
