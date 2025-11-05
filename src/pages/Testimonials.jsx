import testimonials from "../data/testimonials"
import TestimonialCard from "../components/TestimonialCard"

export default function Testimonials() {
  return (
    <section>
      <h1 className="text-4xl font-bold text-brand-500 mb-8 text-center">Lo que dicen nuestros estudiantes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} t={t} />
        ))}
      </div>
    </section>
  )
}
