import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productos } from "../data/productos";

const ItemListContainer = () => {
  const { categoriaId } = useParams();

  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      if (categoriaId) {
        setProductosFiltrados(
          productos.filter((p) => p.categoria === categoriaId)
        );
      } else {
        setProductosFiltrados(productos);
      }

      setLoading(false);
    }, 800);
  }, [categoriaId]);

  if (loading) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Cargando productos...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de productos</h2>

      <div style={{ marginBottom: "20px" }}>
        <Link to="/">Todos</Link> |{" "}
        <Link to="/categoria/remeras">Remeras</Link> |{" "}
        <Link to="/categoria/zapatillas">Zapatillas</Link>
      </div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {productosFiltrados.map((prod) => (
          <div
            key={prod.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "250px",
              borderRadius: "8px",
            }}
          >
            <img
              src={prod.img}
              alt={prod.nombre}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
              }}
            />

            <h3>{prod.nombre}</h3>
            <p>Precio: ${prod.precio}</p>

            <Link to={`/item/${prod.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
