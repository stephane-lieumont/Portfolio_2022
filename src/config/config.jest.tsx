// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import formContactSlice from '~/store/formContact.store';
import layoutSlice from '~/store/layout.store';

function render(
  ui: any,
  {
    preloadedState,
    store = configureStore({reducer: { formContactSlice: formContactSlice.reducer, layoutSlice: layoutSlice.reducer }, preloadedState }),
    ...renderOptions
  }:any = {}
) {
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export type AppDispatch = ReturnType<typeof configureStore>['dispatch'];

// re-export everything
export * from '@testing-library/react'


// override render method
export { render }


