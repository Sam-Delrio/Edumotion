import courses from "../data/courses"
import CourseCard from "../components/CourseCard"

export default function Courses() {
  return (
    <section>
      <h1 className="text-4xl font-bold text-brand-500 mb-8 text-center">Nuestros Cursos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  )
}
