import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Contact from '~/pages/Contact';
import store from '~/store/main.store';

window.scrollTo = jest.fn()

describe('When call Contact Page', () => {
  test('Should render Contact default', () => {      
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Contact />
        </MemoryRouter>
      </Provider>
    )      

    const component = screen.getByTestId('contact-page')

    expect(component).toBeInTheDocument()
  })
})