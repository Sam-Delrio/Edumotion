import { Link, NavLink } from "react-router-dom"

export default function Header() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 transition-colors ${
      isActive ? "text-brand-500 font-semibold" : "text-gray-600 hover:text-brand-500"
    }`

  return (
    <header className="bg-white/70 backdrop-blur border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-brand-500 tracking-tight">
          Edumotion
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={linkClass}>Inicio</NavLink>
          <NavLink to="/courses" className={linkClass}>Cursos</NavLink>
          <NavLink to="/testimonials" className={linkClass}>Testimonios</NavLink>
          <NavLink to="/contact" className={linkClass}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  )
}
