import styles from './MealItem.module.css';


function MealItem({name, description, price}) {


  return (
    <li>
        <div>
            <h3>
                {name}
            </h3>
            <div>
                {description}
            </div>
            <div>
                {`${price}$`}
            </div>
        </div>
        <div>

        </div>
    </li>
  )
}

export default MealItem