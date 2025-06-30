import { useId } from "react";
import { ClearCartIcon, CartIcon } from "../Icons/Icons";
import "./ProductsCart.css";
import { useProductCart } from "../../hooks/useProductCart";

export const CartItem = ({ product, quantity }) => {
    const { addToCart, removeFromCart } = useProductCart();
    return (
        <li>
            <img
                src={product.thumbnail}
                alt={product.title}
            />
            <div>
                <strong>{product.title}</strong> - ${product.price}
            </div>

            <footer>
                <button onClick={() => removeFromCart(product)}>-</button>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={() => addToCart(product)}>+</button>
            </footer>
        </li>
    );
}


export const ProductsCart = () => {
    const cartCheckboxId = useId();
    const { state, clearCart } = useProductCart();

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    {[...new Map(state.products.map(product => [product.id, product])).values()].map(product => (
                        <CartItem
                            key={product.id}
                            product={product}
                            quantity={state.products.filter(p => p.id === product.id).length}
                        />
                    ))}
                </ul>

                <div>
                    <small>Total: $ {Math.abs(Number(state.total)).toFixed(2)}</small>
                    <br />
                    <small>Items: {state.products.length}</small>
                </div>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    );
};