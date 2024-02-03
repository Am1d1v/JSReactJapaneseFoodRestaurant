import './App.css';
import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';


function App() {

  // Cart Visibility State
  const [cartIsVisible, serCartIsVisible] = useState(false);

  // Show Cart
  const showCartHandler = () => {
    serCartIsVisible(true);
  }


  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
