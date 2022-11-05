import { render, screen } from '~/config/config.jest'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Cgi from '~/pages/Cgi';
import store from '~/store/main.store';

window.scrollTo = jest.fn()

describe('When call Cgi Page', () => {
  test('Should render Cgi default', () => {      
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cgi />
        </MemoryRouter>
      </Provider>
    )      

    const component = screen.getByTestId('cgi-page')

    expect(component).toBeInTheDocument()
  })
})