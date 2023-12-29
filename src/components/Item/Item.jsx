import './Item.scss'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {
  return (
    <div className='item'>
      {
        <article className='card'>
          <div>
            <img src={producto.image} alt={producto.nombre} />
            <h5>{producto.nombre}</h5>
            </div>
            <div>
              <p>{producto.description}</p>
              <li>${producto.precio}</li>
              <li>{producto.talle}</li>
              <Link to={`/detalle/${producto.id}`}>Ver detalles</Link>
            </div>
        </article>
      }
      
    </div>
  )
}
export default Item