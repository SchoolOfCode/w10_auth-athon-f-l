import './App.css';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Profile from '../Profile/Profile';
import Basket from '../Basket/Basket';
import React, { useState } from 'react';

function App() {

  const [basket, setBasket] = useState([])


  return (
    <div className="App">
      <Header />
      <main>
        <Products basket={basket} setBasket={setBasket} />
        <div className='sidebar'>
          <Profile />
          <Basket basket={basket} />
        </div>
      </main>
    </div>
  );
}

export default App;
