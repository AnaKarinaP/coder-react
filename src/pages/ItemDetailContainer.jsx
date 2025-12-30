import { useParams, Link } from "react-router-dom";
import { productos } from "../data/productos";

const ItemDetailContainer = () => {
  const { id } = useParams();

  // 👇 CLAVE: convertir id a número
  const producto = productos.find(
    (prod) => prod.id === Number(id)
  );

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <img
        src={producto.img}
        alt={producto.nombre}
        style={{ width: "300px" }}
      />

      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>

      <Link to="/">⬅ Volver</Link>
    </div>
  );
};

export default ItemDetailContainer;
