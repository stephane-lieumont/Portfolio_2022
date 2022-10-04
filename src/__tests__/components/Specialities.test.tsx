import { render, screen } from '@testing-library/react';
import Specialities from '~/components/Specialities';
import { SpecialitiesDevData } from '~/__mocks__/datas/dev.projects.data';

describe('When call Component Specialities', () => {
  test('Should render Specialities default component', () => {      
    render(<Specialities />)
    const component = screen.getByTestId('specialities')

    expect(component).toBeInTheDocument()
  });

  test('Should render Specialities with params component', () => {      
    render(<Specialities specialities={SpecialitiesDevData} contentLoaded  />)
    const component = screen.getByTestId('specialities')

    expect(component).toBeInTheDocument()
  });
})
