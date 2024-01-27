import styles from './Header.module.css'

function Header(props) {

  

  return (
    <>
      <header className={styles.header}>
        <h1>Seafood Restaurant</h1>
        <button>Корзина</button>
      </header>
      <div>
        <img src="" alt="" />
      </div>
    </>
  )
}

export default Header