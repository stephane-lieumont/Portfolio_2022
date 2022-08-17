import RoutesApp from '../../routes/Routes.app';
import './style.scss'
import NavBarButton from '../NavBarSlider';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Theme } from '../../interfaces/Theme.intf';
import { Link } from 'react-router-dom';

type HeaderProps = {
  menuIsOpen?: boolean
  menuIsLigth?: boolean
  headerTitle?: string
  theme?: Theme
  onClick?: (isOpen: boolean) => void
}

const Header: React.FunctionComponent<HeaderProps> = ({menuIsOpen = false, menuIsLigth = false, headerTitle, theme, onClick = () => {}}) => {
  const location = useLocation();

  const [menuHide, setMenuHide] = useState<boolean>(false)
  const navigate = useNavigate()

  const homePageRoutePath = RoutesApp.getRouteByName('home')
  const contactPage = RoutesApp.getRouteByName('contact')
  const cvPage = RoutesApp.getRouteByName('cv')

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return (() => {
      document.removeEventListener('scroll', handleScroll);
    })
  })

  const handleScroll = () => {
    setMenuHide(window.scrollY > 70)
  }

  return (
    <header className={`header${ theme === Theme.dark ? ' header--dark' : ' header--ligth' }${ menuIsOpen || menuHide ? ' header--eventnone' : ''}`} data-testid='layout-header'>
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
          <span className='head-subtitle' onClick={() => navigate(homePageRoutePath!.path) }>
            <span>Stéphane</span>
            <span className='text--primary text--bold'>Lieumont</span>
          </span>
        </h1>
        <div className='navigation'>
          <ul className='navigation__buttons'>
            <li><Link to={contactPage!.path} state={{ backgroundLocation: location }} ><Button label={contactPage!.label} outlined white={menuIsLigth || theme === Theme.dark} /></Link></li>
            <li><Link to={cvPage!.path} state={{ backgroundLocation: location }} ><Button label={cvPage!.label} outlined white={menuIsLigth || theme === Theme.dark} /></Link></li>
          </ul>
        </div>   
      </div>
      <NavBarButton routeList={RoutesApp.routeList} ligth={menuIsLigth || theme === Theme.dark} onClick={onClick}/>
    </header>
  );
}

export default Header;