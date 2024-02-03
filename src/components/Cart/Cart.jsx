import styles from './Cart.module.css'
import Modal from '../UI/Modal';


function Cart({id, onHideCart}) {

    const cartItems = <ul className={styles['cart-items']}>
        {[{id}].map((item) => {
           return <li>{item.name}</li>
        })}
    </ul>;

  return (
    <Modal onHideCart={onHideCart}>
        {cartItems}
        <div className={styles.total}>
            <span>Итого</span>
            <span>30.99</span>
        </div>
        <div className={styles.buttonsContainer}>
            <button onClick={onHideCart}>Закрыть</button>
            <button>Заказать</button>
        </div>
    </Modal>
  )
}

export default Cart