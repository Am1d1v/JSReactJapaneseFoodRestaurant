import './App.css';
import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/store/CartContextProvider';

function App() {

  // Cart Visibility State
  const [cartIsVisible, serCartIsVisible] = useState(false);

  // Show Cart
  const showCartHandler = () => {
    serCartIsVisible(true);
  }

  // Hide Cart
  const hideCartHandler = () => {
    serCartIsVisible(false);
  }

  
  return (
    <>
      <CartContextProvider>
        {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartContextProvider>
    </>
  );
}

export default App;
