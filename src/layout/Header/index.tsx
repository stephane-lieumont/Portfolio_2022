import RoutesApp from '../../routes/Routes.app';
import './style.scss'
import NavBarButton from '../NavBarSlider';
import Button from '../../components/Button';
import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Theme } from '../../interfaces/Theme.intf';
import Modal from '~/components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import cvPdf from '../../assets/pdf/CV_LIEUMONT-stephane_2022_FrontEnd.pdf';
import fileDownload from 'js-file-download';
import axios from 'axios';

type HeaderProps = {
  menuIsOpen?: boolean
  menuIsLigth?: boolean
  headerTitle?: string
  theme?: Theme
  onClick?: (isOpen: boolean) => void
}

const Header: React.FunctionComponent<HeaderProps> = ({menuIsOpen = false, menuIsLigth = false, headerTitle, theme, onClick = () => {}}) => {
  const [menuHide, setMenuHide] = useState<boolean>(false)
  const [modalContactVisible, setModalContactVisible] = useState<boolean>(false)
  const [modalCvVisible, setModalCvVisible] = useState<boolean>(false)
  const navigate = useNavigate()

  const homePageRoutePath = RoutesApp.getRouteByName('home')!.path 

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return (() => {
      document.removeEventListener('scroll', handleScroll);
    })
  })

  const handleScroll = () => {
    setMenuHide(window.scrollY > 70)
  } 

  const handleDownload = () => {
    axios.get(require('../../assets/pdf/CV_LIEUMONT-stephane_2022_FrontEnd.pdf'), {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, `CV_LIEUMONT-stephane_${ new Date().getFullYear() }_FrontEnd.pdf`)
    })
  }

  return (
    <header className={`header${ theme === Theme.dark ? ' header--dark' : ' header--ligth' }`} data-testid='layout-header'>
      <div className={`header__main${ menuIsOpen || menuHide ? ' header__main--hidden' : ''}`}>
        <h1>
          <span className='head-title'>
            <span className='text--primary'>P</span>
            <span>ortfolio </span>
            { headerTitle ? 
              <div className="head-title__append">
                <span className='text--primary'>{ headerTitle[0].toUpperCase() }</span>
                <span>{ headerTitle.slice(1) }</span>
              </div>
            : null}
          </span>
          <span className='head-subtitle' onClick={() => navigate(homePageRoutePath) }>
            <span>Stéphane</span>
            <span className='text--primary text--bold'>Lieumont</span>
          </span>
        </h1>
        <div className='navigation'>
          <ul className='navigation__buttons'>
            <li><Button label='Contact' outlined white={menuIsLigth || theme === Theme.dark} onClick={ () => setModalContactVisible(true) } /></li>
            <li><Button label='Mon CV' outlined white={menuIsLigth || theme === Theme.dark} onClick={ () => setModalCvVisible(true) } /></li>
          </ul>
        </div>   
      </div>
      <NavBarButton routeList={RoutesApp.routeList} ligth={menuIsLigth || theme === Theme.dark} onClick={onClick}/>
      <Modal title='Mon Parcours' width='40%' heigth='80%' displayOn={modalCvVisible} onClose={() => setModalCvVisible(false)}>
        <Fragment>
          <div className='modal__box__content__iframe'>
            <iframe height={'100%'} width={'100%'} src={`${cvPdf}#view=fitH&scrollbar=0&toolbar=0&statusbar=0&messages=0&navpanes=0`} title='CV stéphane Lieumont Developpeur Frontend'/>
          </div>
          <Button label='Télécharger' onClick={handleDownload} />
        </Fragment>
      </Modal>
      <Modal title='Contactez-moi' heigth='70%' displayOn={modalContactVisible} onClose={() => setModalContactVisible(false)}>
        <Fragment>
          <div className="modal__box__content__bg">
            <img src={require('../../assets/profile/profil-stephane-lieumont-contact.jpg')} alt="profil stéphane lieumont"/>
          </div>
          <p>
            Un projet, une question où juste un Hello World ?<br />
            <span>Je suis actuellement à la recherche d'un poste en entreprise.</span>
          </p>
          <ul className='modal__box__content__card'>
            <li><FontAwesomeIcon icon={faPhone} className={'fa-icon'}/> 06.37.35.35.79</li>
            <li><FontAwesomeIcon icon={faLocation} className={'fa-icon'}/> 31470 Fontenilles, FRANCE</li>
          </ul>
        </Fragment>
      </Modal>     
    </header>
  );
}

export default Header;