// import React, { useEffect } from "react";
import "./Item.css";

export default function Item({ product, basket, setBasket }) {

  // useEffect(() => {
    async function addToBasket() {
      await setBasket([...basket, product]);
      console.log(basket);
    }
    // addToBasket();
  // }, []);

  return (
    <div className="Item">
      <div className="item-image">
        <img src={product.image} alt={product.title}></img>
      </div>
      <div className="product-details">
        <h3>{product.title.substring(0, 60)}...</h3>
        <h3>£{product.price}</h3>
        <p>{product.description.substring(0, 100)}...</p>
        <button className="view-item-button">View Item</button>
        <button onClick={addToBasket} className="add-to-basket-button">
          Add To Basket
        </button>
      </div>
    </div>
  );
}
