import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext';
import carritoimg from './assets/carrito.jpg';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/carrito">
        <img className="cart-icon" src={carritoimg} alt="Carrito" />
            <span className=" numerito">{cantidadEnCarrito()}</span>
        </Link>
    </div>
  )
}

export default CartWidget


