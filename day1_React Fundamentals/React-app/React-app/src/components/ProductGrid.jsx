import Product from "./Product";

function ProductGrid({ products }) {
  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid;