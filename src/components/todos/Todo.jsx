import { useState } from 'react'
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa'
import ComplButton from './ComplButton'
import { useDispatch } from 'react-redux'
import { deleteTodo, setTodoText } from '../../slices/todoSlice'
import delTodoIcon from '/icon-cross.svg'

const Todo = ({
  id,
  text,
  isComplete,
  dragStart,
  dragEnter,
  dragOver,
  dragEnd,
  arrow,
  dragItemDst,
}) => {
  const dispatch = useDispatch()
  const [edText, setEdText] = useState(text)
  const [isEditing, setIsEditing] = useState(false)
  const handleChangeText = (e) => {
    setEdText(e.target.value)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false)
      dispatch(setTodoText({ id, text: edText }))
    } else if (e.key === 'Escape') {
      setIsEditing(false)
      setEdText(text)
    }
  }

  const handleDelete = () => {
    dispatch(deleteTodo(id))
  }

  const complClass = isComplete ? ' line-through' : ''

  return (
    <li
      draggable
      id={id}
      className="flex flex-col border-b-2 border-solid border-[#e3e4f1] dark:border-[#393a4b]"
      onDragStart={dragStart}
      onDragEnter={dragEnter}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
    >
      <div className="flex flex-col">
        <div className="flex justify-center">
          {arrow === 'up' && dragItemDst.current === id && <FaArrowCircleUp />}
        </div>
        <div className="h-[64px] bg-white dark:bg-[#494c6b] flex items-center p-6">
          <ComplButton id={id} isComplete={isComplete} />
          {!isEditing ? (
            <p
              className={'text-[#494c6b] dark:text-[#c8cbe7] grow' + complClass}
              style={{ cursor: "url('/cursor.png'), auto" }}
              onClick={setIsEditing}
            >
              {edText}
            </p>
          ) : (
            <input
              type="text"
              className="text-[#494c6b] dark:text-[#c8cbe7] grow"
              value={edText}
              onChange={handleChangeText}
              onKeyDown={handleKeyDown}
            />
          )}
          <div>
            <img
              src={delTodoIcon}
              alt="Delete Todo"
              onClick={handleDelete}
              style={{ cursor: "url('/cursor.png'), auto" }}
            />
          </div>
        </div>
        <div className="flex justify-center">
          {arrow === 'down' && dragItemDst.current === id && (
            <FaArrowCircleDown />
          )}
        </div>
      </div>
    </li>
  )
}

export default Todo
