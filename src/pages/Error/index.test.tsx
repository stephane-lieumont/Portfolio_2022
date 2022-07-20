import { render, screen } from '@testing-library/react';
import '../../config/config.jest';

import Error from '.';

describe('When call Error Page', () => {
  test('Should render component', () => {
    render(<Error />)
    
    const page = screen.getByTestId('page-error')

    expect(page).toBeInTheDocument()
  });
})