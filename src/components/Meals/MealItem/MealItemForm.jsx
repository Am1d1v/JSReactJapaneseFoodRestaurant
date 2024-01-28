import styles from './MealItemForm.module.css'
import Input from '../../UI/Input'


function MealItemForm({id}) {
  return (
    <form action="" className={styles.form}>
      <Input label='Количество: ' input={{
        id: id,
        type: 'number',
        min: '1',
        step: '1',
        defaultValue: '1'
      }}/>
      <button>Добавить</button>
    </form>
  )
}

export default MealItemForm