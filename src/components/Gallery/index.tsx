import { FunctionComponent, useState } from 'react';
import { PortfolioData } from '~/interfaces/Data.intf';
import { firstLetterUpper } from '~/utils/formatString';
import './style.scss';

type GalleryProps = {
 portfolioData?: PortfolioData[]
}

const Gallery: FunctionComponent<GalleryProps> = ({portfolioData = []}) => {
  const [imgPopup, setImgPopup] = useState<PortfolioData>()

  return (
    <div className='gallery'>
      { imgPopup ? (
        <div className='gallery__popup'>
          <div className='gallery__popup__content'>
            <div className='gallery__popup__content__close'></div>
            <img src={imgPopup?.imgFile} alt={imgPopup?.imgAlt} />
          </div>
        </div>
      ) : null }     
      <div className='gallery__grid'>
        { portfolioData.map(({ id, imgFileThumb, imgAlt, title, released, stack }, index) => (
          <div key={id} 
            className={
              `gallery__grid__item
              ${ 
                index % 5 === 0 && index < portfolioData.length - 3 ? ' gallery__grid__item--double-row' :
                (index ) % 3 === 0 && index < portfolioData.length - 7 ? ' gallery__grid__item--double-column' :
                ' gallery__grid__item--single' }          
              `}>
            <img src={imgFileThumb} alt={imgAlt} />
            <div className='gallery__grid__item__desc'>
              <h4>{ firstLetterUpper(title) }</h4>
              <p>{ released.getFullYear() }</p>
              <ul className='icon-custom__list'>
                { stack.map((stackItem) => (
                  <li key={stackItem.toString} className="icon-custom">
                    <i className={`icon-custom__container ${ stackItem.iconClass }`}></i>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
