import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>

      <Link to={`/products/${product.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;