import { render, screen } from '@testing-library/react';
import { ProjectsDevData } from '~/__mocks__/datas/dev.projects.data';
import ProjectCard from '.'

import '../../config/config.jest'

describe('When call Component PageLoader', () => {
  test('Should render PageLoader default component', () => {      
    render(<ProjectCard projectData={ ProjectsDevData[0]  } />)
    const component = screen.getByTestId('project-card')

    expect(component).toBeInTheDocument()
  });
})
