import NavBars from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.scss'
import ItemCount from './components/ItemCount/ItemCount'
import obtenerProductos from './utilidades/data'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  

  return (
    <BrowserRouter>
      <div id='app' className='app'>
      < NavBars/>

      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenido a eCommers!"} />} />
         <Route path="/categorias/:categoria" element={<ItemListContainer greeting={"Bienvenido a eCommers!"} />}></Route>
      </Routes>
      </div>
   </BrowserRouter>
  )
}

export default App
