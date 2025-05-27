import { useDispatch } from 'react-redux'
import { toggleCompleted as toggleCompletedSlice } from '../../slices/todoSlice'

const ComplButton = ({ id, isComplete }) => {
  const dispatch = useDispatch()
  const complClass = isComplete
    ? ' bg-gradient-to-tl from-[#57ddff] to-[#c058f3]'
    : ''

  const toggleCompleted = () => {
    dispatch(toggleCompletedSlice(id))
  }

  console.log(isComplete)

  return (
    <div
      className={
        'w-[24px] h-[24px] rounded-full border-2 border-solid border-[#e3e4f1] dark:border-[#767992] mr-6' +
        complClass
      }
      style={{ cursor: "url('/cursor.png'), auto" }}
      onClick={toggleCompleted}
    ></div>
  )
}

export default ComplButton
