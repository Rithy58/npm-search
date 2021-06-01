import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { searchSlide } from './slices/searchSlice'

export const store = configureStore({
    reducer: searchSlide.reducer
})

export const { search: searchPackage, success: searchPackageSuccess, error: searchPackageError } = searchSlide.actions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
