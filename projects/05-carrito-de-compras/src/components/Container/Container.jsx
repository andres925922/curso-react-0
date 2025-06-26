import { ProductList } from "../ProductList/ProductList";
import { useFilters } from "../../hooks/useProductFilters";
import { ProductFilter } from "../ProductFilter/ProductFilter";

export const Container = ({products, loading, error}) => {
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