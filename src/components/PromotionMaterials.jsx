import { FolderOpen, ExternalLink } from 'lucide-react'

export default function PromotionMaterials() {
  const assetsUrl = 'https://drive.google.com' // placeholder folder link
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-amber-50/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Promotion Materials</h2>
          <a href={assetsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 hover:from-black hover:to-black shadow">
            <FolderOpen className="h-4 w-4" />
            Open Assets Folder
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-3 text-gray-600">All posters, templates, event descriptions, and copy-paste text for the WeWork app.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6 bg-white hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900">Reusable Poster</h3>
            <p className="mt-1 text-sm text-gray-600">Dry-erase section for date/time so your team can reuse the same poster each month.</p>
          </div>
          <div className="rounded-2xl border p-6 bg-white hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900">WeWork App Copy</h3>
            <p className="mt-1 text-sm text-gray-600">One-click text you can paste directly into the app with QR and join code.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
