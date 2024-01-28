import styles from './MealList.module.css'

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
  const mealList = DUMMY_MEALS.map((meal) => {
    return <li>{meal.name}</li>
  })

  return (
    <section className={styles.meals}>
      <ul>
        {mealList}
      </ul>
    </section>
  )
}

export default MealList