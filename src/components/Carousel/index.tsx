import { FunctionComponent, useState, Fragment } from "react"
import './style.scss'

type CarouselProps = {
  pictures?: string[],
  handleLoad?: CallableFunction
}

const Carousel: FunctionComponent<CarouselProps> = ({pictures = [], handleLoad = () => {}}: CarouselProps) => {
  const [index, setIndex] = useState<number>(0)
  const [loadPicture, setLoadPicture] = useState<boolean>(false)

  const onLoadPicture = () => {
    setLoadPicture(true)
  }

  return (
    <div className="carousel">
      <div className="carousel__container">
        <ul className="carousel__group" style={{width: 100 * pictures.length + '%'}}>
          {pictures?.map((picture, index) => (
            <li key={index} className="carousel__item" style={{
              flexBasis: 100 / pictures.length + '%',
              width: 100 / pictures.length + '%'
            }}>
              <img src={picture} onLoad={onLoadPicture} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Carousel;