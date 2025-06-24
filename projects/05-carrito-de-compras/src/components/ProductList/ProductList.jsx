import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";

export const ProductList = ({products, loading, error}) => {
  return (
    <main className="product-list">
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <ProductCard key={product.id} product={product} />
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}