import { FunctionComponent, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import Background from '~/components/Background';
import BadgeContact from '~/components/BadgeContact';
import useWindowSize from '~/hooks/useWindowsSize';
import { PageProps } from '~/interfaces/Component.intf';
import Footer from '~/layout/Footer';
import RoutesApp from '~/routes/Routes.app';
import { useAppSelector } from '~/store/main.store';
import FormContact from './FormContact';

import './style.scss'

const Contact: FunctionComponent<PageProps> = ({ title = 'titre de la page', isModal = false }) => {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false)
  const currentPage = useRef<HTMLDivElement>(null)
  const headerheigth = useAppSelector((state) => state.layoutSlice.headerHeigth)

  const windowSize = useWindowSize()
  const navigate = useNavigate()

  useEffect(() => {
    document.title = title
  })

  useEffect(() => {
    if(windowSize.width < 700 && isModal) {
      navigate(RoutesApp.getRouteByName('contact')!.path)
    }
  }, [isModal, navigate, windowSize])
  
  return (
    <div ref={currentPage} className={`${isModal ? ' contact-modal' : 'page'} contact`}>
      <div className={!isModal ? `page__content limit-width-content` : ''} style={{ paddingTop: isModal ? '2rem' : headerheigth + 30 + 'px' }}>
      <Background 
          ligthen
          triangleProperties = {{
            top: `10%`,
            rigth: '60%',
            rotate: '260deg',
            size: '120px',
            delayAnimation: 0
          }}
          pointsProperties = {{
            top: `50%`,
            rigth: '90%',
            size: '350px',
            delayAnimation: 300
          }}
          circle={false}
        />  
        <section className='contact__content'>
          <p>
            Un projet, une question où juste un Hello World ?
          </p>
          <FormContact />          
        </section> 
        <BadgeContact className='contact__card'/>       
        <div className="contact__bg">
          <img className={imgLoaded ? '' : 'loading'} onLoad={() => setImgLoaded(true)} src={require('../../assets/profile/profil-stephane-lieumont-contact.jpg')} alt="profil stéphane lieumont"/>
        </div>
      </div>
      { !isModal && (
        <Footer />
      )}      
    </div>
  );
}

export default Contact;