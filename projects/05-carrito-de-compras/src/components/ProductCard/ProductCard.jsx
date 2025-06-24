
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
    return (
        <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <img src={product.thumbnail} alt={product.title} />
            <button>Agregar al carrito</button>
        </div>
    );
};