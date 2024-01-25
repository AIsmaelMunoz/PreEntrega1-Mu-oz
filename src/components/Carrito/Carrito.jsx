import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, borrarCarrito, borrarProd, totalPrecio } = useContext(CartContext);

  if(carrito.length === 0 ){
    return(
    <div>
      <h2>El carrito esta vacio.</h2>
      <Link to="/">volver al inicio</Link>
    </div>
    )
  }

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
        <h3>Total de tu compra: ${totalPrecio()}</h3>
      <button onClick={borrarCarrito}>Eliminar carrito</button>
    </div>
  );
};
export default Carrito;
