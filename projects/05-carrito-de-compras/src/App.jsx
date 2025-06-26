import { StrictMode } from "react";
import { useProducts } from "./hooks/useProducts";
import { Container } from "./components/Container/Container";

function App() {
  const { products, loading, error } = useProducts();

  return (
    <StrictMode>
      <Container {...({products, loading, error})} />
    </StrictMode>

  );

}

export default App
