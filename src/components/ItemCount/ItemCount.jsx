import { useState } from "react"
import "./ItemCount.scss"
import { Link } from "react-router-dom"

const ItemCount = ({stock, agregarAlCarrito}) => {
    const[contador, setContador] = useState (1)
    
    const sumar = () =>{
      if(contador < stock){
        setContador(contador + 1)
    }
  }

    const restar = () =>{
        if(contador > 1){
        setContador(contador - 1)
        }
    }


  return (
    <div className="itemcount">
        <button onClick={sumar}>+</button>
        <p>{contador}</p>
        <button onClick={restar}>-</button>
        <div>
          <Link onClick={()=> agregarAlCarrito(contador)} className="finalizarCompra" to="/carrito">Finalizar compra</Link>
          
        </div>
    </div>
  )
}

export default ItemCount