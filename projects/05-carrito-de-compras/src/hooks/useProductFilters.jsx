import { useMemo, useContext } from "react";
import filterProductsHelper from "../helpers/filterProductsHelper";
import { FilterContext } from "../contexts/FilterContext";
  
export const useFilters = ({ products }) => {
  const {filters, setFilters} = useContext(FilterContext);

  const filteredProducts = useMemo(
    () => filterProductsHelper(products, filters),
    [products, filters]
  );

  return { filters, setFilters, filteredProducts };
};