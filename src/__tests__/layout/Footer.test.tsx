import { render, screen } from '@testing-library/react';
import Footer from '~/layout/Footer';

describe('When call Layout Footer', () => {
  test('Should render Footer default layout', () => {      
    render(<Footer />)
    const component = screen.getByTestId('footer')

    expect(component).toBeInTheDocument()
  });
})
