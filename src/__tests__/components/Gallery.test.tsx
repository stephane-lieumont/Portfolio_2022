import { fireEvent, render, screen } from '@testing-library/react';
import { PortfolioImagesData } from '~/datas/3d.projects.data';
import Gallery from '~/components/Gallery';

jest.mock('~/datas/3d.projects.data', () => jest.requireActual('~/__mocks__/datas/3d.projects.data'));

describe('When call Component Gallery', () => {
  test('Should render Gallery default component', () => {   
    render(<Gallery />)

    const component = screen.getByTestId('gallery')
    expect(component).toBeInTheDocument()
  });

  test('Should load images of Gallery component', async () => {     
    render(<Gallery portfolioData={PortfolioImagesData} />)

    const handleLoadImageTest = jest.fn() 
    const images = screen.getAllByRole('img');

    images.forEach(image => {
      image.addEventListener('load', handleLoadImageTest)   
    })

    images.forEach(image => {  
      fireEvent.load(image);
    })

    await new Promise((r) => setTimeout(r, 100))   


    expect(handleLoadImageTest).toBeCalledTimes(PortfolioImagesData.length)
  });

  test('Should click on first image with callback of Gallery component', () => {
    const callback = jest.fn()  

    render(<Gallery portfolioData={PortfolioImagesData} onClick={callback} />)

    const handleClickImage = jest.fn() 
    const image = screen.getAllByRole('img')[0];

    image.addEventListener('click', handleClickImage)
    fireEvent.click(image)

    expect(handleClickImage).toBeCalled()
  });

  test('Should click on first image without callback of Gallery component', () => {
    render(<Gallery portfolioData={PortfolioImagesData}/>)

    const handleClickImage = jest.fn() 
    const image = screen.getAllByRole('img')[0];

    image.addEventListener('click', handleClickImage)
    fireEvent.click(image)

    expect(handleClickImage).toBeCalled()
  });
})