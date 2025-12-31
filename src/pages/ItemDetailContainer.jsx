import { useParams, Link } from "react-router-dom";
import { productos } from "../data/productos";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { addToCart } = useContext(CartContext);

  const item = productos.find(
    (p) => String(p.id) === String(itemId)
  );

  if (!item) {
    return <h2>Producto no encontrado</h2>;
  }

  const handleAdd = () => {
    console.log("CLICK BOTÓN");
    addToCart(item);
  };

  return (
    <div className="item-detail">
      <img src={item.img} alt={item.nombre} width={200} />

      <div>
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p><strong>${item.precio}</strong></p>

        <button onClick={handleAdd}>
          Agregar al carrito
        </button>

        <br />
        <Link to="/">← Volver</Link>
      </div>
    </div>
  );
};

export default ItemDetailContainer;

