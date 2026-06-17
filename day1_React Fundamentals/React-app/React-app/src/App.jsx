import ProductGrid from "./components/ProductGrid";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
      image:
        "https://www.flipkart.com/lenovo-ideapad-slim-3-intel-core-i3-12th-gen-1215u-8-gb-512-gb-ssd-windows-11-home-15iau7-thin-light-laptop/p/itmdea7d038d535b"
    },
    {
      id: 2,
      name: "Phone",
      price: 700,
      image:
        "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Tablet",
      price: 500,
      image:
        "https://via.placeholder.com/200"
    }
  ];

  return (
    <div>
      <h1>Product Store</h1>

      <ProductGrid products={products} />
    </div>
  );
}

export default App;