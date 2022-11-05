import { fireEvent, render, screen } from '~/config/config.jest'
import SocialSideBar from '~/layout/SocialSideBar';

describe('When call Layout SocialSlider', () => {
  test('Should render SocialSlider default layout', () => {      
    render(
        <SocialSideBar />
    )      

    const component = screen.getByTestId('social-slider')

    expect(component).toBeInTheDocument()
  });

  test('Should render SocialSlider default layout', () => {
    const handleHover = jest.fn()
    const handleOut = jest.fn()
    
    render(
        <SocialSideBar />
    )

    const component = screen.getByTestId('social-slider')
    const items = component.querySelectorAll('li')
    
    items.forEach( item => {
        item.addEventListener('mouseenter', handleHover)
        item.addEventListener('mouseleave', handleOut)

        fireEvent.mouseEnter(item)
        fireEvent.mouseLeave(item)
    })

    expect(component).toBeInTheDocument()
    expect(handleHover).toHaveBeenCalledTimes(items.length)
    expect(handleOut).toHaveBeenCalledTimes(items.length)
  });
})