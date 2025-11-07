import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X, Home, BookOpen, MessageSquare, Phone } from "lucide-react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 text-lg transition-colors ${
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

        {/* Menú Desktop */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={linkClass}>
            <Home size={18} /> Inicio
          </NavLink>
          <NavLink to="/courses" className={linkClass}>
            <BookOpen size={18} /> Cursos
          </NavLink>
          <NavLink to="/testimonials" className={linkClass}>
            <MessageSquare size={18} /> Testimonios
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            <Phone size={18} /> Contacto
          </NavLink>
        </nav>
      </div>

      {/* Menú Móvil */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 shadow-md animate-slide-down">
          <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>
            <Home size={18} /> Inicio
          </NavLink>
          <NavLink to="/courses" className={linkClass} onClick={() => setMenuOpen(false)}>
            <BookOpen size={18} /> Cursos
          </NavLink>
          <NavLink
            to="/testimonials"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            <MessageSquare size={18} /> Testimonios
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>
            <Phone size={18} /> Contacto
          </NavLink>
        </nav>
      )}
    </header>
  )
}
