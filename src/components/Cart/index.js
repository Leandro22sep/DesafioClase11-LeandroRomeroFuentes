import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { carrito, deleteItem, emptyCart, getItemPrice } = useContext(CartContext)
  if (carrito.length > 0) {
    return (
      <>
        <section className='items items-carrito'>
          {
            carrito.map((element, index) => {
              return <section key={index} className="item">
                <div>{element.nombre}</div>
                <img src={element.imagen} alt={element.nombre} />
                <div>${element.precio}</div>
                <div>Cantidad: {element.cantidad}</div>
                <div><button onClick={() => deleteItem(element.id)} className="boton-grande">Eliminar</button></div>
              </section>


            })
          }
        </section>
        <div>
          <h3>Precio Total: ${getItemPrice()}</h3>
        </div>
        <div>
          <button onClick={() => {emptyCart()}} className="boton-grande">Vaciar Carrito</button>
        </div>
        <div>
          <Link to={"/checkout"}><button className='boton-grande'>Realizar Compra</button></Link>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div>Carrito Vacio</div>
        <Link to={"/"}><button className='boton-grande'>Volver a la tienda</button></Link>
      </>
    )
  }

}

export default Cart