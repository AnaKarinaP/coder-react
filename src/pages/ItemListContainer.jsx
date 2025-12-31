import { Link, useParams } from "react-router-dom";
import { productos } from "../data/productos";

const ItemListContainer = () => {
  const { categoriaId } = useParams();

  const filtrados = categoriaId
    ? productos.filter((p) => p.categoria === categoriaId)
    : productos;

  return (
    <div className="product-grid">
      {filtrados.map((prod) => (
        <div key={prod.id} className="product-card">
          <img src={prod.img} alt={prod.nombre} />
          <h3>{prod.nombre}</h3>
          <p>${prod.precio}</p>
          <Link to={`/item/${prod.id}`}>Ver detalle</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
