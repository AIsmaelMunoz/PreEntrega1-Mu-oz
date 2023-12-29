import { useState } from "react";
import obtenerProductos from "../../utilidades/data"
import { useEffect } from "react";
import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {

  const [productos, setProductos] = useState([])
  console.log('render')

  const { categoria } = useParams()
  console.log(categoria)

  useEffect(()=>{
    obtenerProductos
    .then((respuesta)=>{
      if(categoria){
        const productoFiltrados = respuesta.filter((producto)=>producto.categoria === categoria)
        setProductos(productoFiltrados)
      }else
      setProductos(respuesta)
    })
    .catch((error)=>{
      console.log(error);
    })
    .finally(()=>{
      console.log('finalizo la promise')
    })
  }, [categoria])



  console.log(props)
  return (
    <div className="itemlistcontainer">
   
      <p>{props.greeting}</p>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer