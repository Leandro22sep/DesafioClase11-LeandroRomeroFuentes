import { createContext, useState } from "react";

export const CartContext = createContext()

const { Provider } = CartContext

const MyProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const isInCart = (id) => {
        return carrito.some(producto => producto.id === id)
    }

    const addItem = (producto,cantidad) => {
        const nuevoProducto = {
            ...producto,
            cantidad
        }
        if(isInCart(nuevoProducto.id)){
            const findProducto = carrito.find(producto => producto.id === nuevoProducto.id)
            const productoIndex = carrito.indexOf(findProducto)
            const auxArray = [...carrito]
            auxArray[productoIndex].cantidad += cantidad
            setCarrito(auxArray)
        }else{
            setCarrito([...carrito, nuevoProducto])
            
        }
    }

    const emptyCart = () => {
        return setCarrito([])
    }

    const deleteItem = (id) => {
        return setCarrito(carrito.filter(producto => producto.id !== id))
    }

    const getItemQty = () => {
        return carrito.reduce((acc,producto) => acc += producto.cantidad, 0)
    }

    const getItemPrice = () => {
        return carrito.reduce((acc,producto) => acc += producto.cantidad * producto.precio, 0)
    }


    return <Provider value={{carrito,isInCart,addItem,emptyCart,deleteItem,getItemQty,getItemPrice}}>{children}</Provider>
}

export default MyProvider