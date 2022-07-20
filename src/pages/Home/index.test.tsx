import { render, screen } from '@testing-library/react';
import '../../config/config.jest';
import Home from '.';

describe('When call Home Page', () => {
  test('Should render component', () => {
    render(<Home />)
    
    const page = screen.getByTestId('page-home')

    expect(page).toBeInTheDocument()
  });
})