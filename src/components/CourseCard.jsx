export default function CourseCard({ course }) {
  return (
    <article className="group border border-gray-100 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform"
      />
      <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
      <p className="text-gray-500 text-sm mt-1">{course.short}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-400">{course.duration}</span>
        <button className="bg-brand-500 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-brand-600">
          Ver más
        </button>
      </div>
    </article>
  )
}
