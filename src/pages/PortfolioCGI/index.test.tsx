import { render, screen } from '@testing-library/react';
import '../../config/config.jest';
import PortfolioCGI from '.';

describe('When call PortfolioCGI Page', () => {
  test('Should render component', () => {
    render(<PortfolioCGI />)
    
    const page = screen.getByTestId('page-portfolio-cgi')

    expect(page).toBeInTheDocument()
  });
})