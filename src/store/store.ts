import { configureStore } from '@reduxjs/toolkit'
import { tableReducer } from '@/features/tableSlice'
import { categoryReducer } from '@/features/categorySlice'
import { getTableReducer } from '@/features/getTable'

export const store = configureStore({
  reducer: {
    table: tableReducer,
    category: categoryReducer,
    getTable: getTableReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
