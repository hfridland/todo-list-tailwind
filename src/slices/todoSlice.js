import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  showItems: 'all',
  todoItems: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    toggleCompleted: (state, action) => {
      const todo = state.todoItems.find((todo) => todo.id === action.payload)
      if (todo !== undefined) {
        todo.isComplete = !todo.isComplete
      }
    },
    addTodo: (state, action) => {
      state.todoItems.push({
        id: uuidv4(),
        isComplete: false,
        text: action.payload,
      })
    },
    setTodoText: (state, action) => {
      const todo = state.todoItems.find((todo) => todo.id === action.payload.id)
      if (todo !== undefined) {
        todo.text = action.payload.text
      }
    },
    deleteTodo: (state, action) => {
      state.todoItems = state.todoItems.filter(
        (todo) => todo.id !== action.payload
      )
    },
    setShowItems: (state, action) => {
      state.showItems = action.payload
    },
    clearItems: (state, _) => {
      switch (state.showItems) {
        case 'active':
          state.todoItems = state.todoItems.filter((todo) => todo.isComplete)
          break
        case 'completed':
          state.todoItems = state.todoItems.filter((todo) => !todo.isComplete)
          break
        default:
          state.todoItems.length = 0
      }
    },
    changeTodos: (state, action) => {
      const todos = state.todoItems
      const { srcId, dstId, direction } = action.payload

      if (srcId === dstId) return

      const dragSrcIdx = todos.findIndex((item) => item.id === srcId)
      const dragSrc = todos[dragSrcIdx]
      todos.splice(dragSrcIdx, 1)

      let dstIdx = todos.findIndex((item) => item.id === dstId)

      if (direction === 'down') {
        dstIdx++
      }

      todos.splice(dstIdx, 0, dragSrc)
    },
  },
})

export const todoReducer = todoSlice.reducer

export const selectTodos = (state) => {
  switch (state.todos.showItems) {
    case 'active':
      return state.todos.todoItems.filter((todo) => !todo.isComplete)
    case 'completed':
      return state.todos.todoItems.filter((todo) => todo.isComplete)
    default:
      return state.todos.todoItems
  }
}
export const selectTodosCount = (state) => selectTodos(state).length

export const selectShowItems = (state) => state.todos.showItems

export const {
  toggleCompleted,
  addTodo,
  setTodoText,
  deleteTodo,
  setShowItems,
  clearItems,
  changeTodos,
} = todoSlice.actions
