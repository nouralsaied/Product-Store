import ProductCard from './ProductCard'

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.thumbnail}
        />
      ))}
    </div>
  )
}

export default ProductList