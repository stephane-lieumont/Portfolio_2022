import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FunctionComponent, MouseEvent, ReactElement, useEffect, useState} from 'react'
import { useNavigate } from 'react-router'
import './style.scss'

export type ModalProps = {
  title?: string, 
  children?: ReactElement,
  width?: string,
  heigth?: string,
  displayOn?: boolean,
  dismissNavigator?: boolean
  duration?: number,
  onClose?: CallableFunction
}

const Modal: FunctionComponent<ModalProps> = ({
  children, 
  title = 'Title', 
  width = '50%', 
  heigth = '50%', 
  displayOn = true,
  dismissNavigator = false,
  duration = 300,
  onClose = () => {}
}) => {
  const navigate = useNavigate();

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
      if(dismissNavigator) onDismiss()
      onClose()
      clearTimeout(timer)
    }, duration);
  }

  const onDismiss = () => {
    navigate(-1);
  }

  return (
    <div 
      className={`modal${ isOpen ? ' modal--open' : isAnimateClose ? ' modal--close' : '' }`} 
      style={{animationDuration: `${duration / 2}ms`}}
      data-testid='modal'
    >
      <div 
        className='modal__box' 
        style={{width: width, height: heigth, animationDuration: `${duration / 2}ms`, animationDelay: `${isOpen ? duration : 0}ms`}}        
      >
        <div className='modal__box__header'>
          <h2>{ title }</h2>
          <FontAwesomeIcon icon={faClose} className={'fa-close-btn'} onClick={handleCloseModal} />
        </div>
        <div className='modal__box__content'>
          { children }
        </div>
      </div>
    </div>
  )
}

export default Modal