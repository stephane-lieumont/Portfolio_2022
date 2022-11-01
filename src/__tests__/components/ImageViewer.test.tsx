import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ImageViewer from '~/components/ImageViewer';
import { PortfolioImagesData } from '~/datas/3d.projects.data';

jest.mock('~/datas/3d.projects.data', () => jest.requireActual('~/__mocks__/datas/3d.projects.data'))
jest.useFakeTimers()

describe('When call Component ImageViewer', () => {
  test('Should render ImageViewer default component', () => {       
    const handleLoadImageTest = jest.fn() 
    
    render(<ImageViewer imageData={PortfolioImagesData[0]}  />)

    const image = screen.getAllByRole('img')[0] as HTMLImageElement;
    const component = screen.getByTestId('image-viewer')
    image.addEventListener('load', handleLoadImageTest)

    fireEvent.load(image);    
    
    expect(component).toBeInTheDocument()
    expect(handleLoadImageTest).toBeCalled()
  });

  test('Should not render ImageViewer without image data', () => {       
    render(<ImageViewer />)
    
    expect(screen.queryByTestId('image-viewer')).not.toBeInTheDocument()
  });

  test('Should click on next button', async () => {
    const handleclick = jest.fn() 
    jest.spyOn(global, 'setTimeout')

    render(<ImageViewer imageData={PortfolioImagesData[0]}  />)

    const component = screen.getByTestId('image-viewer')
    const nextButton = screen.getByTestId('btn-next')
    const previousButton = screen.getByTestId('btn-previous')
    const closeButton = screen.getByTestId('btn-close')

    nextButton.addEventListener('click', handleclick)
    previousButton.addEventListener('click', handleclick)
    closeButton.addEventListener('click', handleclick)

    fireEvent.click(previousButton);
    fireEvent.click(nextButton);
    fireEvent.click(closeButton);

    await waitFor(async () => {
      await new Promise((r) => setTimeout(r, 600))   
    })    

    expect(component).toBeInTheDocument()
    expect(handleclick).toBeCalled()
  });
})
