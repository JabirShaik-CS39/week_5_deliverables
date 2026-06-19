import { Routes, Route, Link } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import ProductPage from "./pages/ProductPage";

import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Register</Link>
        <Link to="/product">Product</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<RegisterPage />}
        />

        <Route
          path="/product"
          element={<ProductPage />}
        />
      </Routes>
    </>
  );
}

export default App;