import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/productService";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (err) {
        setError("Failed to fetch product");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2>Loading product...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        width="250"
      />

      <h3>Price: ${product.price}</h3>

      <p>
        <strong>Category:</strong>{" "}
        {product.category}
      </p>

      <p>{product.description}</p>

      <p>
        <strong>Rating:</strong>{" "}
        {product.rating.rate}
      </p>

      <p>
        <strong>Reviews:</strong>{" "}
        {product.rating.count}
      </p>
    </div>
  );
}

export default ProductDetail;