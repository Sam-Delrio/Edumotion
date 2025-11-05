import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-10 mt-8">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl font-bold text-brand-500 leading-tight">
          Aprende, crea y evoluciona con <span className="text-gray-800">Edumotion</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Formación digital inspirada en el futuro: tecnología, creatividad y propósito.
        </p>
        <Link
          to="/courses"
          className="inline-block mt-6 bg-brand-500 text-white px-8 py-3 rounded-full text-lg hover:bg-brand-600 transition"
        >
          Explorar Cursos
        </Link>
      </div>
      <div className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
          alt="Aprendizaje digital"
          className="rounded-3xl shadow-lg"
        />
      </div>
    </section>
  )
}
