import { render, screen } from '~/config/config.jest'
import PageLoader from '~/components/PageLoader';

describe('When call Component PageLoader', () => {
  test('Should render PageLoader default component', () => {      
    render(<PageLoader />)

    const component = screen.getByTestId('page-loader')

    expect(component).toBeInTheDocument()
  });

  test('Should render PageLoader not visible component', () => {      
    render(<PageLoader visible={false} />)

    const component = screen.getByTestId('page-loader')

    expect(component).toBeInTheDocument()
  });
})
