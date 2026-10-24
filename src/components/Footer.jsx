import Logo from './Logo'

function Footer() {
  const year = new Date().getFullYear()

  const linkClass =
    'text-indigo-200 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'

  return (
    <footer className="bg-indigo-950 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Footer navigation" className="flex gap-6 text-sm">
          <a href="#home" className={linkClass}>Home</a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#products" className={linkClass}>Products</a>
        </nav>

        <div className="text-center text-sm text-indigo-300 md:text-right">
          <p>Product data provided by DummyJSON.</p>
          <p className="mt-1">© {year} Product Store.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer