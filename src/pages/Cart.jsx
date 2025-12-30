import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Carrito</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}
        >
          <h4>{item.nombre}</h4>
          <p>Cantidad: {item.cantidad}</p>
          <p>Precio: ${item.precio}</p>

          <button onClick={() => removeFromCart(item.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
