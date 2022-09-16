import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FunctionComponent, MouseEvent, useEffect, useState } from "react"
import { ImageViewerProps } from "~/interfaces/component.intf"
import { firstLetterUpper } from "~/utils/formatString"
import Loader from "../Loader"
import './style.scss'

const ImageViewer: FunctionComponent<ImageViewerProps> = ({
  imageData,
  displayOn = true, 
  duration = 300,
  onClose = () => {}
}) => {
  const [isOpen, setIsOpen] = useState<boolean>()
  const [isAnimateClose, setIsAnimateClose] = useState<boolean>(false)
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)

  useEffect(() => {
    if(displayOn) {
      setIsOpen(true)
    }
  }, [displayOn])

  const handleCloseModal = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault()
    setIsOpen(false)
    setIsAnimateClose(true)    

    const timer = setTimeout(() => {
      setIsAnimateClose(false)
      setImageLoaded(false)
      onClose()
      clearTimeout(timer)
    }, duration);
  }

  return imageData === undefined ? (
    null
  ) : (
    <div
      className={`image-viewer${ isOpen ? ' image-viewer--open' : isAnimateClose ? ' image-viewer--close' : '' }`} 
      style={{animationDuration: `${duration / 2}ms`}}
      data-testid='modal'    
    >
      { !imageLoaded && ( <Loader /> ) }  
      <div 
        className={`image-viewer__container${ imageLoaded ? ' loaded' : '' }`}
        style={{animationDuration: `${duration / 2}ms`, animationDelay: `${isOpen ? duration : 0}ms`}} 
      >
        <h2>{ firstLetterUpper(imageData?.title) } <span>{ imageData?.released.getFullYear() }</span></h2>
        <ul className='icon-custom__list'>
          {imageData?.stack.map((stackItem) => (
            <li key={stackItem.toString} className="icon-custom">
              <i className={`icon-custom__container ${ stackItem.iconClass }`}></i>
            </li>
          ))}
        </ul>
        <img onLoad={() => setImageLoaded(true)} src={imageData?.imgFile} alt={imageData?.imgAlt} />
        <FontAwesomeIcon icon={faClose} className={'image-viewer__container__close'} onClick={handleCloseModal} />
      </div>
    </div>
  );
}

export default ImageViewer;