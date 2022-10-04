import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router';
import Modal from '~/components/Modal';

describe('When call Component Modal', () => {
  test('Should render Modal default component', () => {      
    render(
      <MemoryRouter>
        <Modal><div>Test</div></Modal>
      </MemoryRouter>      
    )

    const component = screen.getByTestId('modal')

    expect(component).toBeInTheDocument()
  });

  test('Should render Modal display off component', () => {      
    render(
      <MemoryRouter>
        <Modal displayOn={false}><div>Test</div></Modal>
      </MemoryRouter>      
    )

    const component = screen.getByTestId('modal')

    expect(component).toBeInTheDocument()
  });

  test('Should close Modal component', async () => { 
    jest.useRealTimers()
    jest.spyOn(global, 'setTimeout')

    const callbackOnClose = jest.fn()
    const handleCloseModal = jest.fn()
    
    render(
      <MemoryRouter>
        <Modal displayOn={true} onClose={callbackOnClose} duration={50} dismissNavigator><div>Test</div></Modal>
      </MemoryRouter>      
    )

    const closeBtn = screen.getByTestId('btn-close')

    closeBtn.addEventListener('click', handleCloseModal)
    
    await act(async () => {
      fireEvent.click(closeBtn)
      await new Promise((r) => setTimeout(r, 60))   
    })

    expect(handleCloseModal).toBeCalled()
    expect(setTimeout).toBeCalled()
  });
})
