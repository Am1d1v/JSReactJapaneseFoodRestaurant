import styles from './Cart.module.css'
import Modal from '../UI/Modal';


function Cart({id}) {

    const cartItems = <ul className={styles['cart-items']}>
        {[{id}].map((item) => {
            <li>{item.name}</li>
        })}
    </ul>;

  return (
    <Modal>
        {cartItems}
        <div className={styles.total}>
            <span>Итого</span>
            <span>30.99</span>
        </div>
        <div>
            <button>Закрыть</button>
            <button>Заказать</button>
        </div>
    </Modal>
  )
}

export default Cart