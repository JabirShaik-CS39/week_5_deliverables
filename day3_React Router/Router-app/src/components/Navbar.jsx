import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        background: "#333",
      }}
    >
      <NavLink to="/" style={{ color: "white" }}>
        Home
      </NavLink>

      <NavLink to="/products" style={{ color: "white" }}>
        Products
      </NavLink>

      <NavLink to="/dashboard" style={{ color: "white" }}>
        Dashboard
      </NavLink>

      <NavLink to="/login" style={{ color: "white" }}>
        Login
      </NavLink>
    </nav>
  );
}

export default Navbar;