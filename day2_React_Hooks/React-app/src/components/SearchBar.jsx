import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");

  const products = [
    "Laptop",
    "Mobile",
    "Keyboard",
    "Mouse",
    "Monitor"
  ];

  const filteredProducts = products.filter(product =>
    product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search Products</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredProducts.map(product => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;