
import { ProductList } from "./components/ProductList/ProductList";
import { useProducts } from "./hooks/useProducts";
import { useFilters } from "./hooks/useProductFilters";
import { ProductFilter } from "./components/ProductFilter/ProductFilter";

function App() {
  const { products, loading, error } = useProducts();
  const { filters, setFilters, filteredProducts } = useFilters({ products });

  return (
    <>
      <header>
        <h1>Carrito de compras</h1>
        <ProductFilter filters={filters} setFilters={setFilters} />
      </header>
      <ProductList products={filteredProducts} loading={loading} error={error} />
    </>
  );
}

export default App
