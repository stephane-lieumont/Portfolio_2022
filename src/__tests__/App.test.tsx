import { render, screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import App from '~/App';
import store from '~/store/main.store';

window.scrollTo = jest.fn()

describe('When call React App', () => {
  
  test('Should render App default', () => {      
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )      

    const component = screen.getByTestId('app')

    expect(component).toBeInTheDocument()
  });
})