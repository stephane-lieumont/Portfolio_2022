import RoutesApp from '../../routes/Routes.app';
import './style.scss'
import NavBarButton from '../NavBarSlider';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

type HeaderProps = {
  menuIsOpen?: boolean
  menuIsLigth?: boolean
  headerTitle?: string
  onClick?: (isOpen: boolean) => void
}

const Header: React.FunctionComponent<HeaderProps> = ({menuIsOpen = false, menuIsLigth = false, headerTitle, onClick = () => {}}) => {
  const [menuHide, setMenuHide] = useState<boolean>(false)
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

  return (
    <header className='header' data-testid='layout-header'>
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
            <li><Button label='Contact' outlined white={menuIsLigth} /></li>
            <li><Button label='Mon CV' outlined white={menuIsLigth} /></li>
          </ul>
        </div>   
      </div>
      <NavBarButton routeList={RoutesApp.routeList} ligth={menuIsLigth} onClick={onClick}/>  
    </header>
  );
}

export default Header;