import styles from './MealList.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';


// Temporary Array of Meals
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Roll "Nomi"',
    description: 'Meal 1 Description',
    price: 11.99
  },
  {
    id: 'm2',
    name: 'Fish Roll',
    description: 'Meal 2 Description',
    price: 3.99
  },
  {
    id: 'm3',
    name: 'Big Fish Roll',
    description: 'Meal 3 Description',
    price: 10.99
  },
  {
    id: 'm4',
    name: 'Salad "Poke"',
    description: 'Meal 4 Description',
    price: 14.99
  },
];


function MealList(props) {

  // Cover every meal element in li
  const mealList = DUMMY_MEALS.map((meal, index) => {
    return <MealItem name={meal.name} description={meal.description} price={meal.price} key={index} id={index}/>
  })

  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {mealList}
        </ul>
      </Card>
     
    </section>
  )
}

export default MealList