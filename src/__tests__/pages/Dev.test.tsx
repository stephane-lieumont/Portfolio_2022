import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Dev from '~/pages/Dev';
import store from '~/store/main.store';

window.scrollTo = jest.fn()

describe('When call Dev Page', () => {
  test('Should render DevProject default', () => {      
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Dev />
        </MemoryRouter>
      </Provider>
    )      

    const component = screen.getByTestId('dev-page')

    expect(component).toBeInTheDocument()
  })
})