import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h2>Tienda</h2>

      <div>
        <Link to="/">Inicio</Link>{" "}
        <Link to="/cart">
          🛒 Carrito ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
