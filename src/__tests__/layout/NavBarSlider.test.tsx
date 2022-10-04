import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import NavBarSlider from '~/layout/NavBarSlider';

describe('When call Layout NavBar', () => {
  test('Should render NavBar default layout', () => {      
    render(
      <MemoryRouter>
        <NavBarSlider />
      </MemoryRouter>
    )      

    const component = screen.getByTestId('navbar')

    expect(component).toBeInTheDocument()
  });

  
  test('Should open NavBar to navigate on website', () => { 
    const handleClick = jest.fn()
    const callback = jest.fn()
    
    render(
      <MemoryRouter>
        <NavBarSlider onClick={callback}/>
      </MemoryRouter>
    )      

    const controllerBtn = screen.getByTestId('navbar-button')
    controllerBtn.addEventListener('click', handleClick)

    fireEvent.click(controllerBtn)

    expect(controllerBtn).toBeInTheDocument()
    expect(handleClick).toBeCalled()
    expect(callback).toBeCalled()
  });
})
