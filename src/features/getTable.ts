import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const getDataFromLocalStorage = () => {
	const storedData = localStorage.getItem('tableData')
	return storedData ? JSON.parse(storedData) : []
}

const initialState = {
	data: getDataFromLocalStorage(),
	loading: false,
	error: null,
}

const baseURL = 'https://3017bc59251b04dd.mokky.dev/items'

export const fetchItem = createAsyncThunk(
	'getTable/fetchItem',
	async () => {
		const { data } = await axios.get(baseURL)
		return { data }
	}
)

const getTable = createSlice({
	name: 'getTable',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchItem.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchItem.fulfilled, (state, action) => {
				state.loading = false
				state.data = action.payload
			})
			.addCase(fetchItem.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
	},
})

export const getTableReducer = getTable.reducer
