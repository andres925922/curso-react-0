import { useState, useEffect } from "react";
import { listProducts } from "../services/listProducts";

const URL = "https://dummyjson.com/products";

/**
 * This hook handle the list of products state and fetching using useEffect
 */
export const useProducts = () => {
    const [state, setState] = useState(
        {
            products: [],
            loading: true,
            error: null
        }
    );

    useEffect(() => {
        try {
            listProducts().then(products => {
                setState((prevState) => ({...prevState, products, loading: false}));
            });
        } catch (error) {
            console.log(error)
            setState((prevState) => ({...prevState, error, loading: false}));
        }

    }, []); // we only fetch the products once the component is mounted and never again

    return {...state};
};