import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Caroussel from '.'
import { SliderImagesData } from '~/__mocks__/datas/3d.projects.data';

import '../../config/config.jest'
import * as hooks from '~/hooks/useOnLoadImages';
import { act } from 'react-dom/test-utils';


describe('When call Component Caroussel', () => {
  test('Should render Caroussel default component', () => {   
    render(<Caroussel slides={SliderImagesData} />)

    const component = screen.getByTestId('caroussel')
    expect(component).toBeInTheDocument()
  });

  test('Should render Caroussel unvisible component', () => {   
    render(<Caroussel slides={SliderImagesData} visible={false} />)

    const component = screen.getByTestId('caroussel')
    expect(component).toBeInTheDocument()
  });

  test('Should render Caroussel with custom delay component', async () => {   
    render(<Caroussel slides={SliderImagesData} delay={200} />)

    const component = screen.getByTestId('caroussel')
    expect(component).toBeInTheDocument()
  });

  test('Should add first image slide on img url', async () => { 
    jest.spyOn(hooks, 'useOnLoadImages' ).mockImplementation(() => true)
    
    act(() => {
      render(<Caroussel slides={SliderImagesData} />);
    })

    const handleLoadImage = jest.fn() 
    const image = document.querySelector("img") as HTMLImageElement;
    image.addEventListener('onload', handleLoadImage)
    
    act(() => {
      fireEvent.load(image);
    })

    expect(image.src).toContain("maison-moderne-2014.jpg");
  });

  test('Should render Caroussel with timer event', async () => { 
    const delay = 100
    const delayTest = delay * (SliderImagesData.length * 2)

    jest.spyOn(hooks, 'useOnLoadImages' ).mockImplementation(() => true)

    jest.useRealTimers()
    jest.spyOn(global, 'setTimeout')
    
    act(() => {
    render(<Caroussel slides={SliderImagesData} delay={delay} />)
    })

    const image = document.querySelector("img") as HTMLImageElement;
    
    await act(async () => {
      fireEvent.load(image);
      await new Promise((r) => setTimeout(r, delayTest))   
    })
        
    expect(setTimeout).toBeCalled()
  });
})