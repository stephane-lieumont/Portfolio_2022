import { FunctionComponent, MouseEvent } from 'react';
import { PortfolioData } from '~/interfaces/Data.intf';
import { firstLetterUpper } from '~/utils/formatString';
import './style.scss';

type GalleryProps = {
 portfolioData?: PortfolioData[],
 onClick?: (imageData: PortfolioData) => void
}

const Gallery: FunctionComponent<GalleryProps> = ({portfolioData = [], onClick}) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>, imageData: PortfolioData) => {
    e.preventDefault()
    if(onClick) onClick(imageData)
  }

  return (
    <div className='gallery gallery__grid'>   
      { portfolioData.map((imageData, index) => (
        <div key={imageData.id} 
          onClick={(e) => handleClick(e, imageData)}
          className={
            `gallery__grid__item
            ${ 
              index % 5 === 0 && index < portfolioData.length - 3 ? ' gallery__grid__item--double-row' :
              (index ) % 3 === 0 && index < portfolioData.length - 7 ? ' gallery__grid__item--double-column' :
              ' gallery__grid__item--single' }          
            `}>
          <img src={imageData.imgFileThumb} alt={imageData.imgAlt} />
          <div className='gallery__grid__item__desc'>
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
        </div>
      ))}
    </div>
  );
}

export default Gallery;
