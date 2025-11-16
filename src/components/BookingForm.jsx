import { useState } from 'react'

export default function BookingForm({ onClose }) {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({
    date: '',
    start_time: '',
    location: '',
    expected_attendance: '',
    languages: '',
    format: 'Standard',
    request_trophy_pack: false,
    notes: '',
    contact_name: '',
    contact_email: '',
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    const payload = {
      ...form,
      expected_attendance: form.expected_attendance ? Number(form.expected_attendance) : null,
      languages: form.languages
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
    }

    try {
      const res = await fetch(`${baseUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setResult({ ok: true, data })
    } catch (err) {
      setResult({ ok: false, error: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-0 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white">
          <h3 className="text-lg font-semibold">Schedule a Trivia Night</h3>
          <button onClick={onClose} className="rounded px-2 py-1 text-sm hover:bg-white/10">Close</button>
        </div>

        <form onSubmit={submit} className="px-6 pb-6 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-700">Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} required className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Start time</label>
            <input type="time" name="start_time" value={form.start_time} onChange={handleChange} required className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-gray-700">Location (building)</label>
            <input type="text" name="location" value={form.location} onChange={handleChange} required placeholder="WeWork – 123 Main St" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Expected attendance (optional)</label>
            <input type="number" name="expected_attendance" value={form.expected_attendance} onChange={handleChange} min="0" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Language(s)</label>
            <input type="text" name="languages" value={form.languages} onChange={handleChange} placeholder="e.g., English, Spanish" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
            <p className="mt-1 text-xs text-gray-500">English, German, Spanish — custom local content available on request.</p>
          </div>
          <div>
            <label className="text-sm text-gray-700">Format</label>
            <select name="format" value={form.format} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
              <option>Standard</option>
              <option>Themed</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="trophies" name="request_trophy_pack" checked={form.request_trophy_pack} onChange={handleChange} />
            <label htmlFor="trophies" className="text-sm text-gray-700">Request 10+ trophy pack with delivery</label>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-gray-700">Notes (optional)</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Your name</label>
            <input type="text" name="contact_name" value={form.contact_name} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Your email</label>
            <input type="email" name="contact_email" value={form.contact_email} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          </div>

          <div className="md:col-span-2 flex items-center justify-end gap-3 mt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border">Cancel</button>
            <button disabled={loading} className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-white disabled:opacity-60 shadow">
              {loading ? 'Submitting...' : 'Schedule Event'}
            </button>
          </div>
        </form>

        {result && (
          <div className={`mx-6 mb-6 rounded-lg border p-3 ${result.ok ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}>
            {result.ok ? (
              <div>
                <p className="font-medium text-green-800">Booked successfully.</p>
                <p className="text-sm text-green-700 mt-1">Host Panel link and promo kit are included in the auto-response.</p>
              </div>
            ) : (
              <p className="text-red-700">{result.error}</p>
            )}
          </div>
        )}

        <p className="mx-6 mb-6 text-[11px] text-gray-500">QED Express is operated by a UK-registered company and is fully GDPR-compliant. No personal data is required for guests to play.</p>
      </div>
    </div>
  )
}
