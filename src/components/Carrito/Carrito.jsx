import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Carrito = () => {
  const { carrito, borrarCarrito, borrarProd } = useContext(CartContext);

  return (
    <div>
      <ul>
        {
        carrito.map((producto) => (
            <li key={producto.id}>
                <p>{producto.nombre}</p>
                <img src={producto.image} alt={producto.nombre} />
                <button onClick={()=> borrarProd(producto.id)}>Eliminar Producto</button>
            </li>
        ))
        }
      </ul>

      <button onClick={borrarCarrito}>Eliminar carrito</button>
    </div>
  );
};
export default Carrito;
