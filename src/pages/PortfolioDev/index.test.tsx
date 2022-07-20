import { render, screen } from '@testing-library/react';
import '../../config/config.jest';
import PortfolioDev from '.';

describe('When call PortfolioDev Page', () => {
  test('Should render component', () => {
    render(<PortfolioDev />)
    
    const page = screen.getByTestId('page-portfolio-dev')

    expect(page).toBeInTheDocument()
  });
})