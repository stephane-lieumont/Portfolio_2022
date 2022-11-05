import { fireEvent, render, screen } from '~/config/config.jest'
import { act } from 'react-dom/test-utils';
import ProjectCard from '~/components/ProjectCard';
import { ProjectsDevData } from '~/__mocks__/datas/dev.projects.data';

describe('When call Component PageLoader', () => {
  test('Should render PageLoader default component', () => {      
    render(<ProjectCard projectData={ ProjectsDevData[0]  } />)
    const component = screen.getByTestId('project-card')

    expect(component).toBeInTheDocument()
  });

  test('Should add first image slide on img url', async () => { 
    act(() => {
      render(<ProjectCard projectData={ ProjectsDevData[0]  } />);
    })

    const handleLoadImage = jest.fn() 
    const image = document.querySelector("img") as HTMLImageElement;
    image.addEventListener('onload', handleLoadImage)
    
    act(() => {
      fireEvent.load(image);
    })

    expect(image.alt).toContain("case tes potes - appication mobile");
  });
})
