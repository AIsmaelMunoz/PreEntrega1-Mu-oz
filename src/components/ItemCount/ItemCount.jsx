import { useState } from "react"
import "./ItemCount.scss"

const ItemCount = ({stock}) => {
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
    </div>
  )
}

export default ItemCount