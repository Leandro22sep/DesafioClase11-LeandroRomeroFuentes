import React from 'react'
import ItemList from '../ItemList'
import { useState, useEffect } from 'react'
import { db } from "../../assets/firebase"
import { collection, getDocs } from "firebase/firestore"

const ItemListContainer = (props) => {

  const[listProductos,setListProductos] = useState([])
  
  useEffect(() => {
    
    const productosCollection = collection(db,"productos")
    
    const consulta = getDocs(productosCollection)
    consulta
    .then(snapshot => {
      const productos = snapshot.docs.map(doc => {
        return{
          ...doc.data(),
          id: doc.id
        }
      })
      setListProductos(productos)
    })
    .catch(error => {
      console.log(error)
    })
  },[])

  return (
    <ItemList listProductos = {listProductos}/>
  )
  
}

export default ItemListContainer