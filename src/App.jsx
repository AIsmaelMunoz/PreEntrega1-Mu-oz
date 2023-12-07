import NavBars from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.scss'

function App() {

  return (
   <div id='app'>
      < NavBars/>
      <ItemListContainer greeting={"Bienvenido a eCommers!"} />
   </div>
  )
}

export default App
