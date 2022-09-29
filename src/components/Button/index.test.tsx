import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.'

import '../../config/config.jest'

describe('When call Component Button', () => {
  test('Should render Button default component', () => {
    render(<Button />)
    const component = screen.getByTestId('button')
    expect(component).toBeInTheDocument()
  });


  test('Should render Button outlined component', () => {
    render(<Button outlined />)
    const component = screen.getByTestId('button')
    expect(component).toBeInTheDocument()
  });

  test('Should render Button white component', () => {
    render(<Button white />)
    const component = screen.getByTestId('button')
    expect(component).toBeInTheDocument()
  });

  test('Should render Button loading component', () => {
    render(<Button loading />)
    const component = screen.getByTestId('button')
    expect(component).toBeInTheDocument()
  });

  test('Should render Button valid component', () => {
    render(<Button valid />)
    const component = screen.getByTestId('button')
    const icon = screen.getByTestId('icon')
    expect(component).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  });

  test('Should render Button download component', () => {
    render(<Button downloadIcon downloaded />)
    const component = screen.getByTestId('button')
    const icon = screen.getByTestId('icon')
    expect(component).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  });

  test('Should render Button onClick callback', () => {
    const handleClick = jest.fn()

    render(<Button onClick={handleClick} />)

    const component = screen.getByTestId('button')
    expect(component).toBeInTheDocument()
    
    fireEvent.click(component)

    expect(handleClick).toBeCalled()
  });



  test('Should render Button link component', () => {
    render(<Button link />)
    const component = screen.getByTestId('button')
    expect(component).toBeInTheDocument()
  });

  test('Should render Button link outlined component', () => {
    render(<Button link outlined />)
    const component = screen.getByTestId('button')
    expect(component).toBeInTheDocument()
  });

  test('Should render Button link white component', () => {
    render(<Button link white />)
    const component = screen.getByTestId('button')
    expect(component).toBeInTheDocument()
  });

  test('Should render Button link loading component', () => {
    render(<Button link loading />)
    const component = screen.getByTestId('button')
    expect(component).toBeInTheDocument()
  });

  test('Should render Button link valid component', () => {
    render(<Button link valid />)
    const component = screen.getByTestId('button')
    const icon = screen.getByTestId('icon')
    expect(component).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  });

  test('Should render Button link download component', () => {
    render(<Button link downloadIcon downloaded />)
    const component = screen.getByTestId('button')
    const icon = screen.getByTestId('icon')
    expect(component).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  });
})