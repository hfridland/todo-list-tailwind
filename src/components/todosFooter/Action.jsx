import { useDispatch, useSelector } from 'react-redux'
import { selectShowItems } from '../../slices/todoSlice'
import { setShowItems } from '../../slices/todoSlice'

const Action = ({ text }) => {
  const dispatch = useDispatch()
  const showItems = useSelector(selectShowItems)

  const handlerOnClick = () => {
    dispatch(setShowItems(text.toLowerCase()))
  }

  let cls = 'grow text-center'
  if (text === 'Active') {
    cls += ' px-5'
  }
  if (showItems === text.toLowerCase()) {
    cls += ' text-[#3a7cfd] dark:text=[#3a7cfd]'
  }
  return (
    <span className={cls} onClick={handlerOnClick}>
      {text}
    </span>
  )
}

export default Action
