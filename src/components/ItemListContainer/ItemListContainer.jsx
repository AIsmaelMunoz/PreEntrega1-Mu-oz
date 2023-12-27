import { useState } from "react";
import obtenerProductos from "../../utilidades/data"
import { useEffect } from "react";
import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList";


const ItemListContainer = (props) => {

  const [productos, setProductos] = useState([])
  console.log('render')

  useEffect(()=>{
    obtenerProductos
    .then((respuesta)=>{
      setProductos(respuesta)
    })
    .catch((error)=>{
      console.log(error);
    })
    .finally(()=>{
      console.log('finalizo la promise')
    })
  }, [])



  console.log(props)
  return (
    <div className="itemlistcontainer">
   
      <p>{props.greeting}</p>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer