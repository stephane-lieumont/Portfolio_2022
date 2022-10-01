import { FunctionComponent, MouseEvent, useEffect, useState} from 'react'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router'
import { ModalProps } from '~/interfaces/component.intf'

import './style.scss'

const Modal: FunctionComponent<ModalProps> = ({
  children, 
  title = 'Title', 
  width = '50%', 
  heigth = '50%', 
  displayOn = true,
  dismissNavigator = false,
  duration = 300,
  onClose
}) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>()
  const [isAnimateClose, setIsAnimateClose] = useState<boolean>(false)

  useEffect(() => {
    if(displayOn) {
      setIsOpen(true)
    }
  }, [displayOn])

  const handleCloseModal = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsOpen(false)
    setIsAnimateClose(true)

    const timer = setTimeout(() => {
      setIsAnimateClose(false)
      if(dismissNavigator) onDismiss()
      
      onClose && onClose()
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
          <i onClick={handleCloseModal} data-testid="btn-close" ><FontAwesomeIcon icon={faClose} className={'fa-close-btn'} /></i>
        </div>
        <div className='modal__box__content'>
          { children }
        </div>
      </div>
    </div>
  )
}

export default Modal