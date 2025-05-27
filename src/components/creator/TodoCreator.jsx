import { useDispatch } from 'react-redux'
import { addTodo as addTodoSlice } from '../../slices/todoSlice'
import { useState } from 'react'

const TodoCreator = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChangeText = (e) => {
    setText(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const addTodo = () => {
    if (text === '') return
    dispatch(addTodoSlice(text))
    setText('')
  }

  return (
    <div className="xs:w-[540px] w-[330px] h-[64px] bg-white dark:bg-[#25273d]  mt-6 mx-auto rounded flex items-center p-6">
      <div
        className="w-[24px] h-[24px] border-2 border-solid border=[#e3e4f1] dark:border-[#767992] rounded-full"
        style={{ cursor: "url('/cursors/fancy.cur'), auto" }}
        onClick={addTodo}
      ></div>
      <input
        type="text"
        className="ml-6 w-[80%] border-0 font-normal text-[#9495a5] dark:text-[#767992] bg-white dark:bg-[#25273d]"
        placeholder="Create a new todo"
        value={text}
        onChange={handleChangeText}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default TodoCreator

/* className="create-todo-input" */
