import { useMemo, useState } from 'react'

export default function TrophyOrder({ onClose }) {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const UNIT_PRICE = 9.0
  const [form, setForm] = useState({
    quantity: 10,
    delivery_address: '',
    contact_name: '',
    contact_email: '',
    add_to_invoice: true,
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const total = useMemo(() => Math.max(10, Number(form.quantity || 0)) * UNIT_PRICE, [form.quantity])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    const payload = { ...form, quantity: Math.max(10, Number(form.quantity || 10)) }
    try {
      const res = await fetch(`${baseUrl}/api/trophy-orders`, {
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
          <h3 className="text-lg font-semibold">Order Trophies</h3>
          <button onClick={onClose} className="rounded px-2 py-1 text-sm hover:bg-white/10">Close</button>
        </div>

        <form onSubmit={submit} className="px-6 pb-6 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-700">Quantity (min 10)</label>
            <input type="number" name="quantity" min="10" value={form.quantity} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500/40" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Add to invoice</label>
            <div className="mt-1 flex items-center gap-2">
              <input type="checkbox" name="add_to_invoice" checked={form.add_to_invoice} onChange={handleChange} />
              <span className="text-sm text-gray-700">Add to invoice / uncheck for separate charge</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-gray-700">Delivery address</label>
            <textarea name="delivery_address" value={form.delivery_address} onChange={handleChange} rows={3} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500/40" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Your name</label>
            <input type="text" name="contact_name" value={form.contact_name} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500/40" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Your email</label>
            <input type="email" name="contact_email" value={form.contact_email} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500/40" />
          </div>

          <div className="md:col-span-2 flex items-center justify-between mt-2">
            <p className="text-gray-800">Total: <span className="font-semibold">${'{'}total.toFixed(2){'}'}</span></p>
            <div className="flex items-center gap-3">
              <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border">Cancel</button>
              <button disabled={loading} className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-white disabled:opacity-60 shadow">
                {loading ? 'Submitting...' : 'Order Trophies'}
              </button>
            </div>
          </div>
        </form>

        {result && (
          <div className={`mx-6 mb-6 rounded-lg border p-3 ${result.ok ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}>
            {result.ok ? (
              <div>
                <p className="font-medium text-green-800">Order received.</p>
                <p className="text-sm text-green-700 mt-1">We will confirm delivery details and invoicing.</p>
              </div>
            ) : (
              <p className="text-red-700">{result.error}</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
