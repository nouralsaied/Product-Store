function ProductCard({ title, price, rating, image }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-square bg-gradient-to-br from-slate-50 to-indigo-50/70 p-4">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <h2 className="line-clamp-2 min-h-12 font-semibold leading-6 text-slate-800">
          {title}
        </h2>

        <div
          role="img"
          className="flex items-center gap-1.5 text-sm text-slate-600"
          aria-label={`Rated ${rating} out of 5`}
        >
          <span className="text-amber-400" aria-hidden="true">★</span>
          <span>{rating}</span>
        </div>

        <p className="mt-auto text-xl font-bold text-indigo-700">
          ${Number(price).toFixed(2)}
        </p>
      </div>
    </article>
  )
}

export default ProductCard