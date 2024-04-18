import Menub from './Menub' ;
import Greeting from "./ItemListContainer";
import './menu.css';
function App() {

  return (
     <div>
      <Menub />
      <h1 class='titulo'>Tienda de Aberturas</h1>
      <Greeting firstName="Aberturas" lastName="Oeste" />
     </div>
  )
}

export default App
