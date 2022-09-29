import { render, screen } from '@testing-library/react';
import Background from '.'

import '../../config/config.jest'

describe('When call Component Background', () => {
  test('Should render Background default component', () => {
    render(<Background />)
    const component = screen.getByTestId('background')
    expect(component).toBeInTheDocument()
  });
  
  test('Should render Background ligthen component', () => {
    render(<Background ligthen />)
    const component = screen.getByTestId('background')
    expect(component).toBeInTheDocument()
  });

  test('Should render Background darken component', () => {
    render(<Background darken />)
    const component = screen.getByTestId('background')
    expect(component).toBeInTheDocument()
  });

  test('Should render Background without SVG items', () => {
    render(<Background triangle={false} circle={false} points={false} />)
    const component = screen.getByTestId('background')
    expect(component).toBeInTheDocument()
  });
})