import RoutesApp from '../../routes/Routes.app';
import './style.scss'
import NavBarButton from '../NavBarSlider';
import Button from '../../components/Button';
import { Fragment, useEffect, useState } from 'react';

type HeaderProps = {
  menuIsOpen?: boolean
  menuIsLigth?: boolean
  headerTitle?: string
  onClick?: (isOpen: boolean) => void
}

const Header: React.FunctionComponent<HeaderProps> = ({menuIsOpen = false, menuIsLigth = false, headerTitle, onClick = () => {}}) => {
  const [menuHide, setMenuHide] = useState<boolean>(false)

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
              <Fragment>
                <span className='text--primary'>{ headerTitle[0].toUpperCase() }</span>
                <span>{ headerTitle.slice(1) }</span>
              </Fragment>
            : null}
          </span>
          <span className='head-subtitle'>
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