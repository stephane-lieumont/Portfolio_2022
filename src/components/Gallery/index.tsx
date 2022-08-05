import { FunctionComponent, useState } from 'react';
import { PortfolioData } from '~/interfaces/Data.intf';
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
        { portfolioData.map(({ id, imgFileThumb, imgAlt }) => (
          <div key={id} className='gallery__grid__item'>
            <img src={imgFileThumb} alt={imgAlt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
