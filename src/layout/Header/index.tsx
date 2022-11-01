import { FunctionComponent, useEffect, useRef, useState, MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import useScrollPosition from '~/hooks/useScrollPosition';
import NavBarButton from '../NavBarSlider';
import Button from '~/components/Button';
import { layoutActions } from '~/store/layout.store';
import { useAppDispatch, useAppSelector } from '~/store/main.store';
import { Theme } from '~/interfaces/theme.intf';
import { HeaderProps } from '~/interfaces/component.intf';

import './style.scss'
import { downloadCV } from '~/utils/downloadCV';
import { getRouteByName, RouteList } from '~/routes/routes.app';

const Header: FunctionComponent<HeaderProps> = ({
  menuIsOpen = false, 
  menuIsLigth = false, 
  headerTitle,
  headerButtonsEnabled = true, 
  theme,
  onClick
}) => {

  const location = useLocation();
  const [menuHide, setMenuHide] = useState<boolean>(false)
  const [navButtonLigth, setNavButtonLigth] = useState<boolean>(false)
  const [isLoadingCV, setIsLoadingCV] = useState(false)
  const [isDownloadCV, setIsDownloadCV] = useState(false)
  const refHeaderContainer = useRef<HTMLDivElement>(null)
  const headerheigth = useAppSelector((state) => state.layoutSlice.headerHeigth)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const scrollPosition = useScrollPosition()

  const homePageRoutePath = getRouteByName('home')
  const contactPage = getRouteByName('contact')

  useEffect(() => {    
    if(headerheigth !== refHeaderContainer.current?.clientHeight && refHeaderContainer) {
      dispatch(layoutActions.setHeaderHeigth(refHeaderContainer.current!.clientHeight))
    }

    setNavButtonLigth(menuIsLigth || theme === Theme.dark)    
  }, [dispatch, headerheigth, location.pathname, menuIsLigth, refHeaderContainer.current?.clientHeight, theme])

  useEffect(() => {
    window.scrollY > 20 ? setMenuHide(true) : setMenuHide(false)
  }, [scrollPosition])

  const handleClickCV = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsLoadingCV(true)
    downloadCV(() => {
      setIsLoadingCV(false)
      setIsDownloadCV(true)
    })    
  }

  return (
    <header ref={refHeaderContainer} className={`header${ theme === Theme.dark ? ' header--dark' : ' header--ligth' }${ menuIsOpen || menuHide ? ' header--eventnone' : ''}`} data-testid='header'>
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
                <li  data-testid="contact-btn">
                  <Link to={contactPage!.path} state={{ backgroundLocation: location }} className="no-style" >
                    <Button label={contactPage!.label} outlined white={menuIsLigth || theme === Theme.dark} link />
                  </Link>
                </li>
              )}
              <li data-testid="cv-btn">
                <Button 
                  label={'Mon CV'}
                  onClick={(e) => handleClickCV(e)}
                  loading={isLoadingCV}
                  downloaded={isDownloadCV}
                  downloadIcon={true}
                  outlined                   
                  white={menuIsLigth || theme === Theme.dark}                  
                />
              </li>
            </ul>
          )}
        </div>
      </div>
      <NavBarButton 
        routeList={RouteList} 
        ligth={navButtonLigth} 
        onClick={onClick}
      />
    </header>
  );
}

export default Header;