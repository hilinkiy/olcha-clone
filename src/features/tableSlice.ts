import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

const getDataFromLocalStorage = () => {
  const storedData = localStorage.getItem('tableData')
  return storedData ? JSON.parse(storedData) : []
}

const initialState = {
  data: getDataFromLocalStorage()
}

const baseURL = 'https://3017bc59251b04dd.mokky.dev/items'

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ name: string; keyword: string; category: string; price: number | string; rating: number }>) => {
      const newIndex = state.data.length + 1
      const newItem = {
        id: Date.now(),
        key: newIndex,
        name: action.payload.name,
        keyword: action.payload.keyword,
        category: action.payload.category,
        price: action.payload.price,
        rating: action.payload.rating
      }

      state.data.push(newItem)
      axios.post(baseURL, newItem)
    },
  },
})

export const { addItem } = tableSlice.actions
export const tableReducer = tableSlice.reducer
