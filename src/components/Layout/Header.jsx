import styles from './Header.module.css'
import sushiImage from '../../assets/sushi.jpg'
import HeaderCartButton from './HeaderCartButton'

function Header({onShowCart}) {


  return (
    <>
      <header className={styles.header}>
        <h1>Seafood Restaurant</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt="SushiImage" />
      </div>
    </>
  )
}

export default Header