import { createRef, Fragment, FunctionComponent, MouseEvent, SyntheticEvent, useMemo, useState } from 'react';
import { GalleryProps } from '~/interfaces/component.intf';
import { PortfolioData } from '~/interfaces/data.intf';
import { firstLetterUpper } from '~/utils/formatString';
import './style.scss';



const Gallery: FunctionComponent<GalleryProps> = ({portfolioData = [], visible = true, onClick}) => { 
  let [imageLoadCounter, setImageLoadCounter] = useState<number>(0)
  const [displayLoader, setDisplayLoader] = useState<boolean>(true)
  
  const refsById = useMemo(() => {
    const refs: any = {}
    portfolioData.forEach((item) => {
        refs[item.id] = createRef<HTMLImageElement>()
    })
    return refs
  }, [portfolioData])

  const handleClick = (e: MouseEvent<HTMLDivElement>, imageData: PortfolioData) => {
    e.preventDefault()
    if(onClick) onClick(imageData)
  }

  const handleLoadImage= (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.classList.remove('loading')
    e.currentTarget.parentNode?.querySelector('.gallery__grid__item__desc')?.classList.remove('loading')
    imageLoadCounter++
    setImageLoadCounter(imageLoadCounter)
    if(imageLoadCounter >= portfolioData.length) {
      setDisplayLoader(false)
    }
  }

  return (
    <div className='gallery'>
      <div className='gallery__grid'>      
        { portfolioData.map((imageData, index) => (
          <div key={imageData.id} 
            onClick={(e) => handleClick(e, imageData)}
            className={`
              gallery__grid__item 
              ${ 
                index % 5 === 0 && index < portfolioData.length - 3 ? 'gallery__grid__item--double-row ' :
                (index ) % 3 === 0 && index < portfolioData.length - 7 ? 'gallery__grid__item--double-column ' :
                'gallery__grid__item--single '
              }`}      
            >
            { visible && (
              <Fragment>
                <img className='loading' src={imageData.imgFileThumb} alt={imageData.imgAlt} ref={refsById[imageData.id]} onLoad={handleLoadImage} />
                <div className='gallery__grid__item__desc loading'>
                  <h4>{ firstLetterUpper(imageData.title) }</h4>
                  <p>{ imageData.released.getFullYear() }</p>
                  <ul className='icon-custom__list'>
                    { imageData.stack.map((stackItem) => (
                      <li key={stackItem.toString} className="icon-custom">
                        <i className={`icon-custom__container ${ stackItem.iconClass }`}></i>
                      </li>
                    ))}
                  </ul>           
                </div>
              </Fragment>
            )}
          </div>
        ))}
      </div>
      <div 
        className='gallery gallery__fakegrid'
        style={{ display : displayLoader ? 'grid' : 'none'}}
      >
        { portfolioData.map((imageData, index) => (
          <div 
            key={`fake-${imageData.id}`}
            className={`
              gallery__grid__fakeitem 
              ${ 
                index % 5 === 0 && index < portfolioData.length - 3 ? 'gallery__grid__item--double-row ' :
                (index ) % 3 === 0 && index < portfolioData.length - 7 ? 'gallery__grid__item--double-column ' :
                'gallery__grid__item--single '
              }`}      
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
