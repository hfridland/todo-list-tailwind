import { createSlice } from '@reduxjs/toolkit'

const theamSlice = createSlice({
  name: 'theam',
  initialState: 'light',
  reducers: {
    setTheam: (_, action) => action.payload,
  },
})

export const { setTheam } = theamSlice.actions
export const theamReducer = theamSlice.reducer
