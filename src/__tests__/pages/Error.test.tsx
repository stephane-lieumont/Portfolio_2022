import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Error from '~/pages/Error';
import store from '~/store/main.store';

window.scrollTo = jest.fn()

describe('When call Error Page', () => {
  test('Should render Error Page default', () => {      
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Error />
        </MemoryRouter>
      </Provider>
    )      

    const component = screen.getByTestId('error-page')

    expect(component).toBeInTheDocument()
  });

  test('Should load main image', () => { 
    const handleLoad = jest.fn()
    
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Error />
        </MemoryRouter>
      </Provider>
    )      

    const component = screen.getByTestId('error-page')
    const img = component.querySelectorAll('img')[0]
    img.addEventListener('load', handleLoad)

    fireEvent.load(img)

    expect(handleLoad).toBeCalled()
  });
})