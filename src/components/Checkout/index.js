import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {

    const [costumer, setCostumer] = useState({
        nombre: '',
        apellido: '',
        email: '',
        domicilio: '',
    })

    const { carrito, getItemPrice } = useContext(CartContext)
    
    const navigate = useNavigate()

    const handlerChangeInput = (e) =>{
        setCostumer({
            ...costumer,
            [e.target.name]: e.target.value
        })
    }

    const handlerSubmit = (e) => {
        e.preventDefault()

        const ordenCompra = {
            productos: carrito,
            comprador: {...costumer},
            precio: getItemPrice(),
        }

        console.log(ordenCompra)
    }

    if(carrito.length === 0){
        setTimeout(() => {
            navigate("/")
        },3000)

        return(
            <>
                <h2>Tu carrito esta vacio</h2>
                <h3>Redirigiendo al Home...</h3>
            </>
        )
    }

    return (
        <div>
            <h2>Complete sus datos</h2>
            <form onSubmit={handlerSubmit}>
                <input placeholder='Nombre' name='nombre' value={costumer.nombre} onChange={handlerChangeInput}/>
                <input placeholder='Apellido' name='apellido' value={costumer.apellido} onChange={handlerChangeInput}/>
                <input placeholder='Correo Electronico' name='email' value={costumer.email} onChange={handlerChangeInput}/>
                <input placeholder='Domicilio' name='domicilio' value={costumer.domicilio} onChange={handlerChangeInput}/>
                <button type='submit' className='boton-grande'>Confirmar Compra</button>
            </form>
        </div>
    )
}

export default Checkout