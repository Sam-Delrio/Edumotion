import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 text-lg transition-colors ${
      isActive ? "text-brand-500 font-semibold" : "text-gray-700 hover:text-brand-500"
    }`

  return (
    <header className="bg-white/70 backdrop-blur border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-bold text-brand-500 tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          Edumotion
        </Link>
        <button
          className="md:hidden text-brand-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={linkClass}>
            Inicio
          </NavLink>
          <NavLink to="/courses" className={linkClass}>
            Cursos
          </NavLink>
          <NavLink to="/testimonials" className={linkClass}>
            Testimonios
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contacto
          </NavLink>
        </nav>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 shadow-md animate-slide-down">
          <NavLink
            to="/"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/courses"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Cursos
          </NavLink>
          <NavLink
            to="/testimonials"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Testimonios
          </NavLink>
          <NavLink
            to="/contact"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </NavLink>
        </nav>
      )}
    </header>
  )
}
