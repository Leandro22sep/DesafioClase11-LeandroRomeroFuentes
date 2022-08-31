import React from 'react'
import ItemDetail from '../ItemDetail';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { db } from "../../assets/firebase"
import { collection, getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {

  const [productoDetail, setProductoDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    
    const productosCollection = collection(db,"productos")
    const referencia = doc(productosCollection, id)
    const consulta = getDoc(referencia)
    
    consulta
    .then((res) => {
      setProductoDetail(res.data())
      setLoading(true)
    })
    .catch((error) =>
      console.log(error)
    )
  }, [id])

  return (
    <>
      {!loading && <div>cargando...</div>}
      {loading && <ItemDetail producto={productoDetail} />}
    </>
  )
}

export default ItemDetailContainer