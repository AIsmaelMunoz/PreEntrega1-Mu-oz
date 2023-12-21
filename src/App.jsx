import NavBars from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.scss'
import ItemCount from './components/ItemCount/ItemCount'
import obtenerProductos from './utilidades/data'

function App() {

  

  return (
   <div id='app' className='app'>
      < NavBars/>
      <ItemCount stock={10}/>
      <ItemListContainer greeting={"Bienvenido a eCommers!"} />

   </div>
  )
}

export default App
