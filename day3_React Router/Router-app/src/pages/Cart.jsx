import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>No products added.</p>
      ) : (
        cart.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))
      )}
    </div>
  );
}

export default Cart;