import { useState } from "react";

const ItemCount = ({ onAdd }) => {
  const [cantidad, setCantidad] = useState(1);

  const sumar = () => setCantidad(cantidad + 1);
  const restar = () => cantidad > 1 && setCantidad(cantidad - 1);

  return (
    <div>
      <button onClick={restar}>-</button>
      <span style={{ margin: "0 10px" }}>{cantidad}</span>
      <button onClick={sumar}>+</button>

      <div>
        <button
          onClick={() => onAdd(cantidad)}
          style={{ marginTop: "10px" }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
