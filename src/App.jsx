import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import Pagination from './components/pagination'

const LIMIT = 8

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  const totalPages = Math.ceil(total / LIMIT)

  useEffect(() => {
    const controller = new AbortController()

    async function loadProducts() {
      try {
        setLoading(true)
        setError(null)

        const skip = (page - 1) * LIMIT
        const response = await fetch(
          `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`,
          { signal: controller.signal }
        )
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }

        const data = await response.json()
        setProducts(data.products)
        setTotal(data.total)
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(
            err instanceof Error ? err.message : 'An unexpected error occurred.'
          )
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadProducts()
    return () => controller.abort()
  }, [page])

  function handlePageChange(newPage) {
    setPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  let content

  if (loading) {
    content = (
      <p className="text-center text-slate-500 py-20">Loading products...</p>
    )
  } else if (error) {
    content = (
      <p className="text-center text-red-600 py-20">Error: {error}</p>
    )
  } else if (products.length === 0) {
    content = (
      <p className="text-center text-slate-500 py-20">No products found.</p>
    )
  } else {
    content = <ProductList products={products} />
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main id="home" className="flex-1 max-w-6xl mx-auto w-full px-4 py-10">
        <section id="about" className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
            Curated for you
          </p>
          <h1
            id="products"
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Find your next favorite
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Explore our collection of everyday essentials, selected to make
            shopping simple.
          </p>
        </section>
        {content}
        {totalPages > 1 && (
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App