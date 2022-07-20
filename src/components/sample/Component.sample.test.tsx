import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './Component.sample'

import '../../config/config.jest'

test('renders component simple', () => {
  render(<Component />);
  const Element = screen.getByText('Test');
  console.log('element :' + Element.innerHTML )
  expect(Element).toBeInTheDocument();
});
