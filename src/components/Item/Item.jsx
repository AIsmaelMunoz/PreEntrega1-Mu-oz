import './Item.scss'

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
            </div>
        </article>
      }
      
    </div>
  )
}
export default Item