import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      🛒 {cart.length}
    </div>
  );
};

export default CartWidget;
