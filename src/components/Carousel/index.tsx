import { FunctionComponent, useEffect, useState } from "react"
import { CarouselProps } from "~/interfaces/Component.intf"
import './style.scss'



const Carousel: FunctionComponent<CarouselProps> = ({slides = [], parralaxScrollY = 0, visible = true, delay = 5000, handleLoad = () => {}}: CarouselProps) => {
  const [indexImg, setIndexImg] = useState<number>(-1)
  const [parallaxValue, setParallaxValue] = useState<number>()

  useEffect(() => {
    const timer = setTimeout(() => {
      indexImg < slides.length - 1 ? setIndexImg(indexImg + 1) : setIndexImg(0) 
      clearTimeout(timer)
    }, delay);    
  }, [indexImg, slides, delay]);

  useEffect(() => {
    setParallaxValue(- parralaxScrollY * 0.18)
  }, [parralaxScrollY])

  const onLoadPicture = () => {

  }

  return (
    <div className={`carousel${ visible ? ' carousel--visible' : ''}`}>
      <div className={`carousel__container`}>
        <div className={`carousel__container__progress`} style={{animationDuration: delay + 'ms'}}></div>
        <ul className="carousel__group" style={{transform: 'translateY(' + parallaxValue + 'px)'  }}>
          {slides?.map(({title, released, imgFile, imgAlt}, index) => (
            <li 
              key={index} 
              className={`carousel__item${ index === indexImg ? ' carousel__item--animate-show' : '' }`}
              style={
                index === indexImg ?
                {zIndex: 2} :
                index === indexImg + 1 || index === 0?
                {zIndex: 1} :
                {zIndex: 0}
              }
            >
              <img width={500} src={imgFile} alt={imgAlt} onLoad={onLoadPicture} />
              <p className={`carousel__item__alt${parallaxValue !== 0 ? ' carousel__item__alt--hide' : ''}`}>{ title } © { released.getFullYear() }</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Carousel;