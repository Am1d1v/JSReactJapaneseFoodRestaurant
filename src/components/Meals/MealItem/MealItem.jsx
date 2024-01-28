import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

function MealItem({name, description, price, id}) {


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
            <MealItemForm id={id}/>
        </div>
    </li>
  )
}

export default MealItem