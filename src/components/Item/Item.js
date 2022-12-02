import React from 'react'
import './Item.css'

export default function Item({product}) {
  return (
    <div className='Item'>
    <img src={product.image} alt={product.title}></img>
    <h2>{product.title}</h2>
    <h3>£{product.price}</h3>
    <p>{product.description}</p>


    </div>
  )
}
