import { useState } from 'react'
import Logo from './Logo'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass =
    'text-indigo-100 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="bg-indigo-700 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />

        <nav aria-label="Main navigation" className="hidden md:flex gap-8 font-medium">
          <a href="#home" className={linkClass}>Home</a>
          <a href="#products" className={linkClass}>Products</a>
        </nav>

        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="md:hidden flex flex-col gap-3 px-4 pb-4 font-medium"
        >
          <a href="#home" className={linkClass} onClick={closeMenu}>Home</a>
          <a href="#products" className={linkClass} onClick={closeMenu}>Products</a>
        </nav>
      )}
    </header>
  )
}

export default Header