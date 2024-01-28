import styles from './MealItem.module.css';


function MealItem({name, description, price}) {


  return (
    <li className={styles.meal}>
        <div>
            <h3>
                {name}
            </h3>
            <div>
                {description}
            </div>
            <div className={styles.price}>
                {`${price} $`}
            </div>
        </div>
        <div>

        </div>
    </li>
  )
}

export default MealItem