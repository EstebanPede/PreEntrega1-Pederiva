import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext';
import carritoImage from './assets/carrito.jpg';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/carrito">
        <img className="cart-icono" src={carritoImage} alt="Carrito" />
            <span className="numerito">{cantidadEnCarrito()}</span>
        </Link>
        {cantidadEnCarrito() > 0 && (
                <Link to="/checkout" className="btn btn-success mt-2">Finalizar compra</Link>
            )}
    </div>
  )
}

export default CartWidget