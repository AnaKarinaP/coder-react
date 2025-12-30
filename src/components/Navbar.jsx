import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <p>Items: {cart.length}</p>
    </nav>
  );
};

export default Navbar;
