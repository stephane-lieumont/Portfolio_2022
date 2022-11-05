/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from '~/config/config.jest'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Header from '~/layout/Header';
import store from '~/store/main.store';

window.scrollTo = jest.fn()

describe('When call Layout Header', () => {
  test('Should render Header default layout', () => {      
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    )
      

    const component = screen.getByTestId('header')

    expect(component).toBeInTheDocument()
  });

  test('Should Click on CV download button & Contact button', () => {      
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    )

    const handleClick = jest.fn()
     
    const wrapperBtnCV = screen.getByTestId('cv-btn')
    const wrapperBtnContact = screen.getByTestId('contact-btn')
    const buttonCV = wrapperBtnCV.querySelector('.button')
    const buttonContact = wrapperBtnContact.querySelector('.button')

    buttonCV?.addEventListener('click', handleClick)
    buttonContact?.addEventListener('click', handleClick)

    buttonCV && fireEvent.click(buttonCV)
    buttonContact && fireEvent.click(buttonContact)

    expect(handleClick).toBeCalledTimes(2)
  });
})
