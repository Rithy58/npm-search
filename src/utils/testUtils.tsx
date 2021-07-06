// https://redux.js.org/usage/writing-tests#components
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { searchSlide } from '../state/slices/searchSlice'
import { npmApi } from '../services/npmApi'

const render = (ui: React.ReactElement<any>, {
    preloadedState,
    store = configureStore({
        reducer: {
            search: searchSlide.reducer,
            [npmApi.reducerPath]: npmApi.reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(npmApi.middleware),
        preloadedState,
      }),
    ...renderOptions
  }: any = {}
) => {
  const Wrapper = ({ children }: { children: React.ReactElement<any> }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
