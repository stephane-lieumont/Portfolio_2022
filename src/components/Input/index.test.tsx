import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from '.';
import '../../config/config.jest'


describe('When call Component Input', () => {
  test('Should render Input component', () => {
    render(
      <Input />
    )
    const inputComponent = screen.getByTestId('input-container')

    expect(inputComponent).toBeInTheDocument()
  });

  test('Should call actions inputs with callbacks', () => {
    const handleBlur = jest.fn()
    const handleChange= jest.fn()
    const handleClick = jest.fn()

    render(
      <Input 
        onBlur={handleBlur}
        onChange={handleChange}
        onClick={handleClick}
      />
    )

    const input = screen.getByTestId('input')

    input.addEventListener('click', handleClick)   
    fireEvent.click(input)
    expect(handleClick).toBeCalled()

    input.addEventListener('blur', handleBlur) 
    fireEvent.blur(input)
    expect(handleBlur).toBeCalled()

    input.addEventListener('change', handleChange) 
    fireEvent.change(input, {target: {value: 'test'}})
    expect(handleChange).toBeCalled()
  });

  test('Should call actions inputs without callbacks', () => {
    const handleBlur = jest.fn()
    const handleChange= jest.fn()
    const handleClick = jest.fn()

    render(
      <Input isFocus />
    )

    const input = screen.getByTestId('input')

    input.addEventListener('click', handleClick)   
    fireEvent.click(input)
    expect(handleClick).toBeCalled()

    input.addEventListener('blur', handleBlur) 
    fireEvent.blur(input)
    expect(handleBlur).toBeCalled()

    input.addEventListener('change', handleChange) 
    fireEvent.change(input, {target: {value: 'test'}})
    expect(handleChange).toBeCalled()
  });

  test('Should call actions inputs readOnly', () => {
    const handleBlur = jest.fn()
    const handleChange= jest.fn()
    const handleClick = jest.fn()

    render(
      <Input 
        readOnly
        onBlur={handleBlur}
        onChange={handleChange}
        onClick={handleClick}
      />
    )
       
    const inputWrapper = screen.getByTestId('wrapper')

    inputWrapper.addEventListener('click', handleClick)   
    fireEvent.click(inputWrapper)
    expect(handleClick).toBeCalled()
  });

  test('Should call actions inputs readOnly without callbacks', () => {
    const handleClick = jest.fn()

    render(
      <Input 
        readOnly
      />
    )
       
    const inputWrapper = screen.getByTestId('wrapper')

    inputWrapper.addEventListener('click', handleClick)   
    fireEvent.click(inputWrapper)
    expect(handleClick).toBeCalled()
  });

  test('Should render with append Icon and prepend Icon', () => {

    render(
      <Input 
        appendIcon={faCalendar}
        prependIcon={faCalendar}
      />
    )

    const appendIcon = screen.getByTestId('append-icon')
    const prependIcon = screen.getByTestId('prepend-icon')

    expect(appendIcon).toBeInTheDocument()
    expect(prependIcon).toBeInTheDocument()    
  });

  test('Should render message error', () => {

    render(
      <Input 
        error
        errorMessage='Test message error'
      />
    )

    const errorMessage = screen.getByText('Test message error')

    expect(errorMessage).toBeInTheDocument()   
  });
})