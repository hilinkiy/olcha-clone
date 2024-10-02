import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

const getCategoryFromLocalStorage = () => {
	const storedData = localStorage.getItem('categoryData')
	return storedData ? JSON.parse(storedData) : []
}

const initialState = {
	data: getCategoryFromLocalStorage()
}

const baseURL = 'https://3017bc59251b04dd.mokky.dev/category'

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		addCategory: (state, action: PayloadAction<{ name: string; keyword: string }>) => {
			const newIndex = state.data.length + 1
			const newCategory = {
				id: Date.now(),
				key: newIndex,
				name: action.payload.name,
				keyword: action.payload.keyword,
			}

			state.data.push(newCategory)
			axios.post(baseURL, newCategory)
		},
	},
})

export const { addCategory } = categorySlice.actions
export const categoryReducer = categorySlice.reducer
