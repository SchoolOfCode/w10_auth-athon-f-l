import React from 'react'
import './Item.css'

export default function Item({product}) {

  return (
    <div className='Item'>
      <div className='item-image'>
        <img src={product.image} alt={product.title}></img>
      </div>
      <div className='product-details'>
        <h3>{product.title}</h3>
        <h3>£{product.price}</h3>
        <p>{product.description.substring(0, 150)}...</p>
        <button className='view-item-button'>View Item</button>
        <button className='add-to-basket-button'>Add To Basket</button>
      </div>
    </div>
  )
}
