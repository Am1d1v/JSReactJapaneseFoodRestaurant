import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'


function HeaderCartButton(props) {


  return (
    <button className={styles.button}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Корзина</span>
        <span className={styles.badge}>
            1
        </span>
    </button>
  )
}

export default HeaderCartButton