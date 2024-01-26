import NavBars from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.scss'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Carrito from './components/Carrito/Carrito'
import Checkout from './components/Checkout/Checkout'


function App() {

  

  return (
    <BrowserRouter>
      <CartProvider>

        < NavBars/>

        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenido a eCommers!"} />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer greeting={"Bienvenido a eCommers!"} />}></Route>
          <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<Navigate to="/" />}/>
          <Route path="/carrito" element={<Carrito/>}></Route>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>

      </CartProvider>

   </BrowserRouter>
  )
}

export default App
