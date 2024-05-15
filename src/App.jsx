import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Menu from './Menu' ;
import Contacto from './Contacto';
import './menu.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  return (
   <div>
    <BrowserRouter>

      <Menu />
      <Routes>
    
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </BrowserRouter>
   </div>  
  );
}


export default App
