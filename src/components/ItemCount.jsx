import { useParams, Link } from "react-router-dom";
import { productos } from "../data/productos";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { addItem } = useContext(CartContext);

  const item = productos.find((p) => p.id === itemId);

  if (!item) return <h2>Producto no encontrado</h2>;

  return (
    <div className="item-detail">
      <img src={item.img} alt={item.nombre} />
      <div>
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <strong>${item.precio}</strong>

        <ItemCount onAdd={(cantidad) => addItem(item, cantidad)} />

        <Link to="/">← Volver</Link>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
