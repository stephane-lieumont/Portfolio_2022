import { render, screen } from '~/config/config.jest'
import Loader from '~/components/Loader';

describe('When call Component Loader', () => {
  test('Should render Loader default component', () => {      
    render(<Loader />)

    const component = screen.getByTestId('loader')

    expect(component).toBeInTheDocument()
  });
})
