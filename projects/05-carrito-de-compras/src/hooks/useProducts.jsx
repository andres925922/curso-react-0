import { useState, useEffect } from "react";
import { listProducts } from "../services/listProducts";

const URL = "https://dummyjson.com/products";

/**
 * This hook handle the list of products state and fetching using useEffect
 */
export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            listProducts().then(products => {
                setProducts(products);
            });
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }

        return () => {
            setProducts([]);
            setLoading(true);
            setError(null);
        };

    }, []); // we only fetch the products once the component is mounted and never again

    return { products, loading, error };
};