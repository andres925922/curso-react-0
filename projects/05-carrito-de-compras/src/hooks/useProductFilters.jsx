import { useState, useMemo } from "react";
import filterProductsHelper from "../helpers/filterProductsHelper";

// export const useFilters = ({ products }) => {
//   const [filters, setFilters] = useState({
//     minPrice: 0,
//     category: "all",
//   });

//   const [filteredProducts, setFIlteredProducts] = useState(products);

//   const handleFilters = (products, filters) => {
//     const filtered = filterProductsHelper(products, filters);
//     setFIlteredProducts(filtered);
//   }

//   useEffect(() => {
//     console.log("useFilters: products length", products.length);
//     handleFilters(products, filters)
//   }, [products, filters]); // This effect is not needed here, as we handle filtering with useMemo
//   // const filteredProducts = useMemo(() => {
//   //   return filterProductsHelper(products, filters);
//   // }, [products, filters]); // Only re-run when products or filters change

//   return { filters, setFilters, filteredProducts };
// };

export const useFilters = ({ products }) => {
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: "all",
  });

  const filteredProducts = useMemo(
    () => filterProductsHelper(products, filters),
    [products, filters]
  );

  return { filters, setFilters, filteredProducts };
};