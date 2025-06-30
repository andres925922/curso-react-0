
import "./ProductCard.css";
import { useProductCart } from "../../hooks/useProductCart";

export const ProductCard = ({ product }) => {
    const { addToCart } = useProductCart();

    return (
        <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <img src={product.thumbnail} alt={product.title} />
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
    );
};