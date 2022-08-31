import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CartWidget from "../CartWidget";
import { db } from "../../assets/firebase"
import { collection, getDocs } from 'firebase/firestore'

const NavBar = (props) => {
    const [navLinks, setNavLinks] = useState([]);
    

    useEffect(() => {
        const productosCollection = collection(db, "productos")
        const consulta = getDocs(productosCollection)
        consulta
        .then(snapshot => {
            const productos = snapshot.docs.map(doc => {
                return{
                    ...doc.data()
                }
            })
        const customFetch = (productos) => {
            return new Promise((resolve,rej) => {
                resolve(productos)
            })
        }
        customFetch(productos)
        .then(arrayProductos => arrayProductos.map(producto => producto.categoria))
        .then(arrayCategorias => setNavLinks([...new Set(arrayCategorias)]))
        })
    .catch(error => {
      console.log(error)
    })
    },[])
    
    if(props.type === "header"){
        return(
            <>
                <nav className="nav">
                    {navLinks.map((element, index) => {
                        return <Link to={`/categoria/${element}`} key={index}>{element}</Link>
                    })}
                    <CartWidget></CartWidget>
                </nav>
            </>
        )
    }else if(props.type === "footer"){
        return(
            <>
                <nav className="nav">
                {navLinks.map((element, index) => {
                        return <Link to={`/categoria/${element}`} key={index}>{element}</Link>
                    })}
                </nav>
            </>
        )
    }
    
}

export default NavBar;