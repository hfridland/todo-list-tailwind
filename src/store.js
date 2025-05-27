import { configureStore } from '@reduxjs/toolkit'
import { theamReducer } from './slices/theamSlice'
import { todoReducer } from './slices/todoSlice'

const store = configureStore({
  reducer: {
    theam: theamReducer,
    todos: todoReducer,
  },
})

export default store
