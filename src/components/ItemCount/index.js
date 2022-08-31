import React from 'react'
import { Link } from 'react-router-dom';

const ItemCount = ({ onAdd, contador, setContador, stock, initial }) => {
  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }
  const disminuirContador = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  }

  return (
    <>
      <div className='botonesItemCount'>
        <button onClick={disminuirContador} className='inline botonItemCount'>-</button>
        <p className='inline'>{contador}</p>
        <button onClick={aumentarContador} className='inline botonItemCount'>+</button>
      </div>
      <div>
        <Link to="/carrito" onClick={onAdd}><button className='boton-grande'>Agregar al Carrito</button></Link>
      </div>
    </>
  )
}

export default ItemCount