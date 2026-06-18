import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import AddProductDialog from "./components/AddProductDialog";

import { products } from "./data/products";

function App() {
  return (
    <>
      <Navbar />

      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Products
          </h1>

          <AddProductDialog />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;