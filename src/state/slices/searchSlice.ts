import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface searchState {
    loading: boolean,
    error: string | null,
    name: string
}

const initialSearchState: searchState = {
    loading: false,
    error: null,
    name: ''
}

export const searchSlide = createSlice({
    name: 'search',
    initialState: initialSearchState,
    reducers: {
        search: (state, action: PayloadAction<string>) => {
            state.loading = true
            state.error = null
            state.name = action.payload
        },
        success: (state) => {
            state.loading = false
        },
        error: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        }
    }
})
