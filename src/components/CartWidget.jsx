import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <Link to="/cart">
      🛒 Items: {totalItems}
    </Link>
  );
};

export default CartWidget;
