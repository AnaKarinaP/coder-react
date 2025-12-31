import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Carrito vacío</h2>
        <Link to="/">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Carrito</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          <img
            src={item.img}
            alt={item.nombre}
            width={80}
          />

          <div>
            <h4>{item.nombre}</h4>
            <p>${item.precio}</p>

            <button
              onClick={() =>
                removeItem(item.id)
              }
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <hr />

      <button onClick={clearCart}>
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;
