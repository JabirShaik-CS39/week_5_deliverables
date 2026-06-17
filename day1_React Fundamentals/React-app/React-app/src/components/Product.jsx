function Product({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        width="150"
      />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default Product;