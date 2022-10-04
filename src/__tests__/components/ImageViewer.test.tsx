import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ImageViewer from '~/components/ImageViewer';
import { PortfolioImagesData } from '~/__mocks__/datas/3d.projects.data';

describe('When call Component ImageViewer', () => {
  test('Should render ImageViewer default component', () => {       
    const handleLoadImageTest = jest.fn() 
    
    render(<ImageViewer imageData={PortfolioImagesData[0]}  />)

    const image = document.querySelector("img") as HTMLImageElement;
    const component = screen.getByTestId('image-viewer')
    image.addEventListener('load', handleLoadImageTest)

    act(() => {
      fireEvent.load(image);
    })
    
    expect(component).toBeInTheDocument()
    expect(handleLoadImageTest).toBeCalled()
  });

  test('Should not render ImageViewer without image data', () => {       
    render(<ImageViewer />)
    
    expect(document.querySelector('.image-viewer')).not.toBeInTheDocument()
  });

  test('Should click on next button', async () => {
    const handleclick = jest.fn() 
    jest.useRealTimers()
    jest.spyOn(global, 'setTimeout')

    render(<ImageViewer imageData={PortfolioImagesData[0]}  />)

    const component = screen.getByTestId('image-viewer')
    const nextButton = screen.getByTestId('btn-next')
    const previousButton = screen.getByTestId('btn-previous')
    const closeButton = screen.getByTestId('btn-close')

    nextButton.addEventListener('click', handleclick)
    previousButton.addEventListener('click', handleclick)
    closeButton.addEventListener('click', handleclick)

    await act(async () => {
      fireEvent.click(previousButton);
      fireEvent.click(nextButton);
      fireEvent.click(closeButton);

      await new Promise((r) => setTimeout(r, 600))   
    })

    

    expect(component).toBeInTheDocument()
    expect(handleclick).toBeCalled()
  });
})
