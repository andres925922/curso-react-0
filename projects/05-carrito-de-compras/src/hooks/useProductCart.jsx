import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const useProductCart = () => {
    const { state, cartDispatch } = useContext(CartContext);

    const clearCart = () => {
        cartDispatch({ type: 'CLEAR_CART' });
    }

    const addToCart = (product) => {
        cartDispatch({ type: 'ADD_TO_CART', product });
    }

    const removeFromCart = (product) => {
        cartDispatch({ type: 'REMOVE_FROM_CART', product });
    }

    return { state, clearCart, addToCart, removeFromCart };
};