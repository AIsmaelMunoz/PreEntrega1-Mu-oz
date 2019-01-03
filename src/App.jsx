import NavBars from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.scss'
import ItemCount from './components/ItemCount/ItemCount'

function App() {

  return (
   <div id='app'>
      < NavBars/>
      <ItemListContainer greeting={"Bienvenido a eCommers!"} />
      <ItemCount stock={10}/>
   </div>
  )
}

export default App
