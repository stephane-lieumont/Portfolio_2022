import { render, screen } from '@testing-library/react';
import Loader from '~/components/Loader';

describe('When call Component Loader', () => {
  test('Should render Loader default component', () => {      
    render(<Loader />)

    const component = screen.getByTestId('loader')

    expect(component).toBeInTheDocument()
  });
})
