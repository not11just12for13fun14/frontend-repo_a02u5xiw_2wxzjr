import { FolderOpen, ExternalLink } from 'lucide-react'

export default function PromotionMaterials() {
  const assetsUrl = 'https://drive.google.com' // placeholder folder link
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Promotion Materials</h2>
          <a href={assetsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-black">
            <FolderOpen className="h-4 w-4" />
            Open Assets Folder
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-3 text-gray-600">All posters, templates, event descriptions, and copy-paste text for the WeWork app.</p>

        <div className="mt-8 rounded-xl border p-6">
          <h3 className="font-medium text-gray-900">Reusable Poster</h3>
          <p className="mt-1 text-sm text-gray-600">Short explanation about dry-erase section for date/time so your team can reuse the same poster each month.</p>
        </div>
      </div>
    </section>
  )
}
