import { useState } from "react";
import ProductGrid from "./components/ProductGrid";
import laptopImage from "./assets/Hp laptop 1.webp";
import phoneImage from "./assets/Hp laptop.webp";
import tabletImage from "./assets/Hp laptop2.webp";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
      image: laptopImage,
    },
    {
      id: 2,
      name: "Phone",
      price: 700,
      image: phoneImage,
    },
    {
      id: 3,
      name: "Tablet",
      price: 500,
      image: tabletImage,
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1 className="main-title">Product Store</h1>

      <div className="section">
        <h2>Search Products</h2>

        <input
          className="search-input"
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="product-grid">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;