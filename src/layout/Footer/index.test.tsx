import { render, screen } from '@testing-library/react';
import '../../config/config.jest';

import Footer from '.';

describe('When call Footer Layout', () => {
  test('Should render component', () => {
    render(<Footer />)
    
    const layout = screen.getByTestId('layout-footer')

    expect(layout).toBeInTheDocument()
  });
})