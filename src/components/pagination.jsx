function getVisiblePages(page, totalPages) {
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - page) <= 1) {
      pages.push(i)
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...')
    }
  }
  return pages
}

function Pagination({ page, totalPages, onPageChange }) {
  const pages = getVisiblePages(page, totalPages)

  const baseClass =
    'min-w-10 px-3 py-2 rounded-lg text-sm font-medium transition-colors'

  return (
    <nav
      aria-label="Product pages"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
    >
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Go to previous page"
        className={`${baseClass} border border-indigo-200 bg-white text-indigo-700 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white`}
      >
        Previous
      </button>

      {pages.map((p, index) =>
        p === '...' ? (
          <span key={`dots-${index}`} aria-hidden="true" className="px-2 text-slate-400">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            aria-label={`Go to page ${p}`}
            aria-current={p === page ? 'page' : undefined}
            className={`${baseClass} ${
              p === page
                ? 'bg-indigo-700 text-white'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-indigo-50'
            } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Go to next page"
        className={`${baseClass} border border-indigo-200 bg-white text-indigo-700 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white`}
      >
        Next
      </button>
    </nav>
  )
}

export default Pagination