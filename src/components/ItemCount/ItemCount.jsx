import { useState } from "react"
import "./ItemCount.scss"

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
          <button onClick={()=> agregarAlCarrito(contador)} className="finalizarCompra">Finalizar compra</button>
        </div>
    </div>
  )
}

export default ItemCount