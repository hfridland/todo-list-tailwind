import { useDispatch } from 'react-redux'
import { clearItems } from '../../slices/todoSlice'

const ActClearCompl = () => {
  const dispatch = useDispatch()

  const handlerOnClick = () => dispatch(clearItems())

  return (
    <span
      onClick={handlerOnClick}
      style={{ cursor: "url('/cursor.png'), auto" }}
    >
      Clear
    </span>
  )
}

export default ActClearCompl
