import { ProductList } from "./components/ProductList/ProductList";
import { useProducts } from "./hooks/useProducts";

function App() {
  const {products, loading, error} = useProducts();

  return (
    <>
      <h1>Carrito de compras</h1>
      <ProductList products={products} loading={loading} error={error} />
    </>
  )
}

export default App
