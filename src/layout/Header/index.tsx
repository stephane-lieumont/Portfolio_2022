import RoutesApp from '~/routes/Routes.app';
import './style.scss'
import NavBarButton from '../NavBarSlider';
import Button from '~/components/Button';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Theme } from '~/interfaces/Theme.intf';
import { Link } from 'react-router-dom';
import { HeaderProps } from '~/interfaces/Component.intf';
import { layoutActions } from '~/store/layout.store';
import { useAppDispatch, useAppSelector } from '~/store/main.store';
import useWindowSize from '~/hooks/useWindowsSize';

const Header: FunctionComponent<HeaderProps> = ({
  menuIsOpen = false, 
  menuIsLigth = false, 
  headerTitle, 
  headerButtonsEnabled, 
  theme,
  onClick = () => {}
}) => {

  const location = useLocation();
  const [menuHide, setMenuHide] = useState<boolean>(false)
  const refHeaderContainer = useRef<HTMLDivElement>(null)
  const headerheigth = useAppSelector((state) => state.layoutSlice.headerHeigth)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const windowsSize = useWindowSize()

  const homePageRoutePath = RoutesApp.getRouteByName('home')
  const contactPage = RoutesApp.getRouteByName('contact')
  const cvPage = RoutesApp.getRouteByName('cv')

  // Init event Header
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return (() => {
      document.removeEventListener('scroll', handleScroll);
    })
  }, [])

  useEffect(() => {    
    if(headerheigth !== refHeaderContainer.current?.clientHeight && refHeaderContainer) {
      dispatch(layoutActions.setHeaderHeigth(refHeaderContainer.current!.clientHeight))
    }
  }, [dispatch, headerheigth, refHeaderContainer, windowsSize])

  // Handle scroll event
  const handleScroll = () => {
    setMenuHide(window.scrollY > 70)
  }

  return (
    <header ref={refHeaderContainer} className={`header${ theme === Theme.dark ? ' header--dark' : ' header--ligth' }${ menuIsOpen || menuHide ? ' header--eventnone' : ''}`} data-testid='layout-header'>
      <div className={`header__main${ menuIsOpen || menuHide ? ' header__main--hidden' : ''}`}>
        <h1>
          <span className='head-title'>
            Portfolio
            { headerTitle ? 
              <span className="head-title__append">
                { headerTitle[0].toUpperCase() }{ headerTitle.slice(1) }
              </span>
            : null}
          </span>
          <span className='head-subtitle' onClick={() => navigate(homePageRoutePath!.path) }>
            <span>Stéphane</span>
            <span className="head-subtitle--primary">Lieumont</span>
          </span>
        </h1>                
        <div className='navigation'>
          { headerButtonsEnabled !== false && contactPage != null && cvPage != null && (
            <ul className='navigation__buttons'>
              <li>
                <Link to={contactPage!.path} state={{ backgroundLocation: location }} >
                  <Button label={contactPage!.label} outlined white={menuIsLigth || theme === Theme.dark} />
                </Link>
              </li>
              <li>
                <Link to={cvPage!.path} state={{ backgroundLocation: location }} >
                  <Button label={cvPage!.label} outlined white={menuIsLigth || theme === Theme.dark} />
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <NavBarButton 
        routeList={RoutesApp.routeList} 
        ligth={menuIsLigth || theme === Theme.dark} 
        onClick={onClick}
      />
    </header>
  );
}

export default Header;