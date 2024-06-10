import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>{prod.titulo}</h3>
                    <p>Precio unit: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <button onClick={() => eliminarProducto(prod.id)} className="btn btn-danger">Eliminar</button>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?(
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
                <Link to="/checkout">Finalizar compra</Link>
            </> 
              ) : (
                <>
                    <h2>Carrito vacío</h2>
                    <Link to="/" className="btn btn-primary">Volver a la página de inicio</Link>
                </>
            )
            
        }
        
    </div>
  )
}

export default Carrito