import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Contact from '~/pages/Contact';
import { ServiceEmailJs } from '~/services/emailjs.srv';
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

  test('Should click on Button CV', () => {      
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Contact />
        </MemoryRouter>
      </Provider>
    )      

    const handleClick = jest.fn()
    const button = screen.getByText('Mon CV')
    expect(button).toBeInTheDocument()

    button.addEventListener('click', handleClick)
    fireEvent.click(button)

    expect(handleClick).toBeCalled()
  })

  test('Should submit form with error', () => {      
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Contact />
        </MemoryRouter>
      </Provider>
    )      

    const handleClick = jest.fn()
    const button = screen.getByText('Envoyer')
    expect(button).toBeInTheDocument()

    button.addEventListener('click', handleClick)
    fireEvent.click(button)

    expect(handleClick).toBeCalled()
  })

  test('Should fill form submit end send email', async () => {
    jest.spyOn(ServiceEmailJs, 'sendFormData').mockResolvedValue({ status: 200, text: '' })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Contact />
        </MemoryRouter>
      </Provider>
    )      

    const handleClick = jest.fn()
    const handleInpuChange = jest.fn()

    const button = screen.getByText('Envoyer')
    const inputName = screen.getByLabelText('Nom')
    const inputEmail = screen.getByLabelText('Email')
    const inputMessage = screen.getByLabelText('Message')

    expect(button).toBeInTheDocument()
    expect(inputName).toBeInTheDocument()
    expect(inputEmail).toBeInTheDocument()
    expect(inputMessage).toBeInTheDocument()

    inputName.addEventListener('change', handleInpuChange)
    inputEmail.addEventListener('change', handleInpuChange)
    inputMessage.addEventListener('change', handleInpuChange)
    button.addEventListener('click', handleClick)

    fireEvent.change(inputName, {target: {value: 'test'}})
    fireEvent.change(inputEmail, {target: {value: 'test@test.com'}})
    fireEvent.change(inputMessage, {target: {value: 'test de message pour simulation jest avec minimum 20 charactères'}})

    fireEvent.click(button)

    await new Promise((r) => setTimeout(r, 2000))

    expect(handleClick).toBeCalled()
    expect(handleInpuChange).toBeCalled()
  })
})