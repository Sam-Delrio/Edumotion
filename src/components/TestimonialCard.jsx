export default function TestimonialCard({ t }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <p className="text-gray-600 italic mb-4">“{t.comment}”</p>
      <div className="flex items-center gap-3">
        <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-gray-800">{t.name}</p>
          <p className="text-xs text-gray-400">{t.role}</p>
        </div>
      </div>
    </div>
  )
}
