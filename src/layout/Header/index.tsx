import RoutesApp from '~/routes/routes.app';
import './style.scss'
import NavBarButton from '../NavBarSlider';
import Button from '~/components/Button';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Theme } from '~/interfaces/theme.intf';
import { Link } from 'react-router-dom';
import { HeaderProps } from '~/interfaces/component.intf';
import { layoutActions } from '~/store/layout.store';
import { useAppDispatch, useAppSelector } from '~/store/main.store';
import Screen from '~/sass/abstract/variables.module.scss'
import useWindowSize from '~/hooks/useWindowsSize';
import useScrollPosition from '~/hooks/useScrollPosition';
import { downloadCV } from '~/services/download.srv';

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
  const [navButtonLigth, setNavButtonLigth] = useState<boolean>(false)
  const refHeaderContainer = useRef<HTMLDivElement>(null)
  const headerheigth = useAppSelector((state) => state.layoutSlice.headerHeigth)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const windowsSize = useWindowSize()
  const scrollPosition = useScrollPosition()

  const homePageRoutePath = RoutesApp.getRouteByName('home')
  const contactPage = RoutesApp.getRouteByName('contact')

  useEffect(() => {    
    if(headerheigth !== refHeaderContainer.current?.clientHeight && refHeaderContainer) {
      dispatch(layoutActions.setHeaderHeigth(refHeaderContainer.current!.clientHeight))
    }

    // On path homepage with mobile device nav button become darkmode 
    if(location.pathname === RoutesApp.getRouteByName('home')?.path ) {
      windowsSize.width <  parseInt(Screen.screenLg) ? setNavButtonLigth(false) : setNavButtonLigth(true)
    } else {
      setNavButtonLigth(menuIsLigth || theme === Theme.dark)
    }
    
  }, [dispatch, headerheigth, location.pathname, menuIsLigth, refHeaderContainer, theme, windowsSize])

  useEffect(() => {
    window.scrollY > 20 ? setMenuHide(true) : setMenuHide(false)
  }, [scrollPosition])

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
          { headerButtonsEnabled !== false && (
            <ul className='navigation__buttons'>
              { contactPage && location.pathname !== contactPage.path && (
                <li>
                  <Link to={contactPage!.path} state={{ backgroundLocation: location }} >
                    <Button label={contactPage!.label} outlined white={menuIsLigth || theme === Theme.dark} />
                  </Link>
                </li>
              )}
              <li>
                <Button label={'Mon CV'} onClick={downloadCV} outlined white={menuIsLigth || theme === Theme.dark} />
              </li>
            </ul>
          )}
        </div>
      </div>
      <NavBarButton 
        routeList={RoutesApp.routeList} 
        ligth={navButtonLigth} 
        onClick={onClick}
      />
    </header>
  );
}

export default Header;