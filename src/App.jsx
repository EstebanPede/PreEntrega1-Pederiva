import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Menu from './Menu' ;
import Contacto from './Contacto';
import './menu.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrito from './Carrito';
import { CartProvider } from './context/CartContext';
import Checkout from "./Checkout";


function App() {

  return (
<div>
  <CartProvider>
    <BrowserRouter>

      <Menu />
      <Routes>
    
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
      </Routes>
    </BrowserRouter>
  </CartProvider>
</div>  
  );
}


export default App
