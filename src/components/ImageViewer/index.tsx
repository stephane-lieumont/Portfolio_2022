import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FunctionComponent, MouseEvent, useEffect, useState } from "react"
import { PortfolioData } from "~/interfaces/Data.intf"
import { firstLetterUpper } from "~/utils/formatString"
import './style.scss'

type ImageViewerProps = {
  imageData?: PortfolioData,
  displayOn?: boolean,
  duration?: number,
  onClose?: CallableFunction
}

const ImageViewer: FunctionComponent<ImageViewerProps> = ({
  imageData,
  displayOn = true, 
  duration = 300,
  onClose = () => {}
}) => {
  const [isOpen, setIsOpen] = useState<boolean>()
  const [isAnimateClose, setIsAnimateClose] = useState<boolean>(false)

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
      <div 
        className="image-viewer__container"
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
        <img src={imageData?.imgFile} alt={imageData?.imgAlt} />
        <FontAwesomeIcon icon={faClose} className={'image-viewer__container__close'} onClick={handleCloseModal} />
      </div>      
    </div>
  );
}

export default ImageViewer;