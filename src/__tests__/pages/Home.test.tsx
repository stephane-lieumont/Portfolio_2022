import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Home from '~/pages/Home';
import store from '~/store/main.store';

window.scrollTo = jest.fn()

describe('When call Home Page', () => {
  test('Should render Home Page default', () => {      
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    )      

    const component = screen.getByTestId('homepage')

    expect(component).toBeInTheDocument()
  });
  
  test('Should navigate with buttons', () => { 
    const handleClick = jest.fn()
    
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    )      

    const buttons = screen.getAllByTestId('button')

    buttons.forEach( item => {
      item.addEventListener('click', handleClick)
      fireEvent.click(item)
    })

    expect(handleClick).toBeCalledTimes(buttons.length)
  });  

  test('Should load main image', () => { 
    const handleLoad = jest.fn()
    
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    )      

    const component = screen.getByTestId('homepage')
    const img = component.querySelectorAll('img')[0]
    img.addEventListener('load', handleLoad)

    fireEvent.load(img)

    expect(handleLoad).toBeCalled()
  });  
})