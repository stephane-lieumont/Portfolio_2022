import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Caroussel from '.'
import { SliderImagesData } from '~/__mocks__/datas/3d.projects.data';

import '../../config/config.jest'

describe('When call Component Caroussel', () => {
  test('Should render Caroussel default component', () => {   
    render(<Caroussel slides={SliderImagesData} />)

    const component = screen.getByTestId('caroussel')
    expect(component).toBeInTheDocument()
  });

  test('Should add first image slide on img url', async () => { 
    
    
    render(<Caroussel slides={SliderImagesData} />)

    const handleLoadImage = jest.fn() 
    const image = document.querySelector("img") as HTMLImageElement;
    image.addEventListener('onload', handleLoadImage)
    
    fireEvent.load(image);

    expect(image.src).toContain("maison-moderne-2014.jpg");
  });
})