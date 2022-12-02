import './App.css';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Profile from '../Profile/Profile';
import Basket from '../Basket/Basket';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Products />
        <div>
          <Profile />
          <Basket />
        </div>
      </main>
    </div>
  );
}

export default App;
