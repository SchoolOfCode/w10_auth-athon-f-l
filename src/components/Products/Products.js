import React, { useEffect,useState } from 'react'
import Item from '../Item/Item';
import './Products.css'

export default function Products() {

  const [products, setProducts] = useState([]);

  useEffect( ()  => {
    // Update the document title using the browser API
    async function getProducts(){
      const data = await fetch('https://fakestoreapi.com/products')
      const response = await data.json()
      setProducts(response)

    }
    getProducts();
    

  },[]);

  return (
    <div className='products'>
      {products.map(function (product) {
          return (
            <Item key={product.id}
              product={product}
            />
          );
})}
    </div>

  )
}
