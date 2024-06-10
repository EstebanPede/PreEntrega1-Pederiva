import React, { useContext, useState } from 'react'
import { CartContext } from './context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase/config';

const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

  return (
    <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <div>
                    <input
                        type="text"
                        placeholder="Ingresá tu nombre"
                        {...register("nombre", {
                            required: "El nombre es obligatorio",
                            pattern: {
                                value: /^[A-Za-z\s]+$/,
                                message: "El nombre solo puede contener letras"
                            }
                        })}
                    />
                    {errors.nombre && <span>{errors.nombre.message}</span>}
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Ingresá tu e-mail"
                        {...register("email", {
                            required: "El email es obligatorio",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "El formato del email no es válido"
                            }
                        })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>

                <div>
                    <input
                        type="tel"
                        placeholder="Ingresá tu teléfono"
                        {...register("telefono", {
                            required: "El teléfono es obligatorio",
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "El teléfono solo puede contener números"
                            }
                        })}
                    />
                    {errors.telefono && <span>{errors.telefono.message}</span>}
                </div>


            <button className="enviar" type="submit">Comprar</button>

        </form>
    </div>
  )
}

export default Checkout