import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <h3>₹{product.price}</h3>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductDetails;