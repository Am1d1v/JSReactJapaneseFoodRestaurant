import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useContext } from 'react';
import CartContext from '../store/cart-context';

function HeaderCartButton({onClick}) {

  //Cart Context
  const cartContext = useContext(CartContext);

  // Quantity of Items in the Cart
  const numberOfCartItems = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount
  }, 0);

  return (
    <button className={styles.button} onClick={onClick}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Корзина</span>
        <span className={styles.badge}>
            {numberOfCartItems}
        </span>
    </button>
  )
}

export default HeaderCartButton