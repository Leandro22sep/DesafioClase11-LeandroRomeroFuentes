import React from 'react'
import Item from '../Item'

const ItemDetail = ({ producto }) => {
  return (
    <section className='itemsDetail'>
      <Item key={producto.id} producto={producto} detail={true} />
    </section>
  )
}

export default ItemDetail