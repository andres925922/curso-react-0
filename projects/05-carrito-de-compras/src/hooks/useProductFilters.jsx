import { useState, useMemo } from "react";
import filterProductsHelper from "../helpers/filterProductsHelper";

export const useFilters = ({ products }) => {
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: "all",
  });

  const filteredProducts = useMemo(() => {
    return filterProductsHelper(products, filters);
  }, [products, filters]); // Only re-run when products or filters change

  return { filters, setFilters, filteredProducts };
};