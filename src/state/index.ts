import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { searchSlide } from './slices/searchSlice'
import { npmApi } from '../services/npmApi'

export const store = configureStore({
    reducer: {
        search: searchSlide.reducer,
        [npmApi.reducerPath]: npmApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(npmApi.middleware),
})

export const { search: searchPackage, success: searchPackageSuccess, error: searchPackageError } = searchSlide.actions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
