import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {

  const agregarAlCarrito = (contador)=>{
    console.log(contador)
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