import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface searchState {
    loading: boolean,
    error: string | null,
    packages: string[]
}

const initialSearchState: searchState = {
    loading: false,
    error: null,
    packages: []
}

export const searchSlide = createSlice({
    name: 'search',
    initialState: initialSearchState,
    reducers: {
        search: (state) => {
            state.loading = true
            state.error = null
            state.packages = []
        },
        success: (state, action: PayloadAction<string[]>) => {
            state.loading = false
            state.packages = action.payload
        },
        error: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        }
    }
})
