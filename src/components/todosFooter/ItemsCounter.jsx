import { useSelector } from 'react-redux'
import { selectTodosCount } from '../../slices/todoSlice'

const ItemsCounter = () => {
  const todosCount = useSelector(selectTodosCount)
  const items = todosCount === 1 ? 'item' : 'items'
  return (
    <span>
      {todosCount} {items}
    </span>
  )
}

export default ItemsCounter
