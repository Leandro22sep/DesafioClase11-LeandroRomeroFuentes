import { NavLink } from "react-router-dom"
import ItemCount from '../ItemCount'
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Item = (props) => {

    const [contador, setContador] = useState(1);
    
    const {isInCart, addItem} = useContext(CartContext)


    const onAdd = () =>{
        isInCart(props.producto.id)
        addItem(props.producto,contador)
    }
    if (props.detail === false) {
        return (

            <section className="item">
                <div>{props.producto.nombre}</div>
                <img src={props.producto.imagen} alt={props.producto.nombre} />
                <div>${props.producto.precio}</div>
                <NavLink to={`/detalle/${props.producto.id}`}><button className="boton-grande">Ver detalle</button></NavLink>
            </section>

        )
    } else {
        return (
            <section className="item">
                <div>{props.producto.nombre}</div>
                <img src={props.producto.imagen} alt={props.producto.nombre} />
                <div>${props.producto.precio}</div>
                <div>{props.producto.detalle}</div>
                <div>Stock disponible:{props.producto.stock}</div>
                <ItemCount onAdd={onAdd} contador={contador} setContador={setContador} stock={props.producto.stock} initial={1}></ItemCount>
            </section>
        )
    }
}
export default Item