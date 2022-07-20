import { render, screen } from '@testing-library/react';
import '../../config/config.jest';

import Header from '.';

describe('When call Header Layout', () => {
  test('Should render component', () => {
    render(<Header />)
    
    const layout = screen.getByTestId('layout-header')

    expect(layout).toBeInTheDocument()
  });
})