import { render, screen } from '@testing-library/react';
import BadgeContact from '.'

import '../../config/config.jest'

describe('When call Component BadgeContact', () => {
  test('Should render BadgeContact default component', () => {
    render(<BadgeContact />)
    const component = screen.getByTestId('badge-contact')
    expect(component).toBeInTheDocument()
  });
})