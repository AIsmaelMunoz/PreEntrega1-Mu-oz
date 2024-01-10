import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {
  const { añadirProducto } = useContext(CartContext)

  const agregarAlCarrito = (contador)=>{
    const productoNuevo = {...producto, cantidad: contador}
    añadirProducto(productoNuevo)
  }
  

  return (
    <div>
      <img src={producto.image} alt="" />
      <p>{producto.nombre}</p>
      <p>{producto.precio}</p>
      <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito}/>
    </div>
  )
}

export default ItemDetail