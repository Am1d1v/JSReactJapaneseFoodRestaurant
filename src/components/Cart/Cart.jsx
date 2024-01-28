import styles from './Cart.module.css'


function Cart({id}) {

    const cartItems = <ul className={styles['cart-items']}>
        {[{id}].map((item) => {
            <li>{item.name}</li>
        })}
    </ul>;

  return (
    <div>
        {cartItems}
        <div className={styles.total}>
            <span>Итого</span>
            <span>30.99</span>
        </div>
        <div>
            <button>Закрыть</button>
            <button>Заказать</button>
        </div>
    </div>
  )
}

export default Cart