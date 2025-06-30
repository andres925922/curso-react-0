import { ProductList } from "../ProductList/ProductList";
import { useFilters } from "../../hooks/useProductFilters";
import { ProductFilter } from "../ProductFilter/ProductFilter";
import { ProductsCart } from "../ProductsCart/ProductsCart";
import { CartProvider } from "../../contexts/CartContext";

export const Container = ({products, loading, error}) => {
  const { filteredProducts } = useFilters({ products });  
  return (
    <CartProvider>
      <header>
        <h1>Carrito de compras</h1>
        <ProductFilter />
      </header>
      <ProductsCart />
      <ProductList products={filteredProducts} loading={loading} error={error} />
    </CartProvider>
  );
}