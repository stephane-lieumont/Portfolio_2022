import { faArrowCircleLeft, faArrowCircleRight, faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FunctionComponent, MouseEvent, useEffect, useState } from "react"
import { ImageViewerProps } from "~/interfaces/component.intf"
import { firstLetterUpper } from "~/utils/formatString"
import { PortfolioImagesData } from '~/datas/3d.projects.data';
import Loader from "../Loader"
import './style.scss'
import { PortfolioData } from "~/interfaces/data.intf"

const ImageViewer: FunctionComponent<ImageViewerProps> = ({
  imageData,
  displayOn = true, 
  duration = 300,
  onClose = () => {}
}) => {
  const [imageIndex, setImageIndex] = useState<number>(0)
  const [imageDataSelected, setImageDataSelected] = useState<PortfolioData>()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isAnimateClose, setIsAnimateClose] = useState<boolean>(false)
  const [isAnimateChange, setIsAnimateChange] = useState<boolean>(false)
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)
  const [refreshImg, setRefreshImg] = useState<boolean>(false)

  useEffect(() => {
    setRefreshImg(false)
  }, [isOpen])

  useEffect(() => {
    setImageIndex(PortfolioImagesData.findIndex((item) => item.id === imageData?.id))
    setImageDataSelected(imageData)
  }, [imageData])

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
      setRefreshImg(true)
      onClose()
      clearTimeout(timer)
    }, duration);
  }

  const handleNextImg = () => {
    let index: number
    imageIndex + 1 < PortfolioImagesData.length ? index = imageIndex + 1 : index = 0
    loadNewImage(index)
  }

  const handlePreviousImg = () => {
    let index: number
    imageIndex > 0 ? index = imageIndex - 1 : index = PortfolioImagesData.length - 1
    loadNewImage(index)
    setImageLoaded(false)
  }

  const loadNewImage = (index: number) => {
    const nextImageData = PortfolioImagesData[index]
    setIsAnimateChange(true)
    setImageIndex(index)

    let timer = setTimeout(() => {     
      setImageDataSelected(nextImageData)      
      setIsAnimateChange(false)      
      setImageLoaded(false)
      clearTimeout(timer)
    }, duration*2);
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
        className={`image-viewer__container${ isAnimateChange ? ' image-viewer__container--hide' : '' }${ imageLoaded ? ' loaded' : '' }`}
        style={{animationDuration: `${duration / 2}ms`}} 
      >
        <h2>{ firstLetterUpper(imageDataSelected?.title ?? '') } <span>{ imageDataSelected?.released.getFullYear() }</span></h2>
        <ul className='icon-custom__list'>
          {imageData?.stack.map((stackItem) => (
            <li key={stackItem.toString} className="icon-custom">
              <i className={`icon-custom__container ${ stackItem.iconClass }`}></i>
            </li>
          ))}
        </ul>
        { !refreshImg && <img onLoad={() => setImageLoaded(true)} src={imageDataSelected?.imgFile} alt={imageDataSelected?.imgAlt} /> }
        <FontAwesomeIcon icon={faClose} className={'image-viewer__container__close'} onClick={handleCloseModal} />
      </div>
      <div className="image-viewer__controllers">
        <i><FontAwesomeIcon icon={faArrowCircleLeft} onClick={handlePreviousImg} /></i>
        <div>{ imageIndex + 1 } / { PortfolioImagesData.length }</div>
        <i><FontAwesomeIcon icon={faArrowCircleRight} onClick={handleNextImg} /></i>
      </div>
    </div>
  );
}

export default ImageViewer;