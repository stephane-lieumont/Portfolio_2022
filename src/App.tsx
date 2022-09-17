import React, { Fragment, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SocialSideBar from '~/layout/SocialSideBar';
import Header from '~/layout/Header';
import Modal from '~/components/Modal';
import RoutesApp from '~/routes/routes.app';
import { CacheImages } from './datas/cache.img.data';
import { RouteAppObject } from '~/interfaces/routes.intf';
import { Theme } from '~/interfaces/theme.intf';
import PageLoader from './components/PageLoader';
import Contact from './pages/Contact';
import useWindowSize from './hooks/useWindowsSize';
import Screen from '~/sass/abstract/variables.module.scss'

const App: React.FunctionComponent = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const [menuIsLigth, setMenuIsLigth] = useState<boolean>(false)
  const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.ligth)
  const [currentSocialTheme, setCurrentSocialTheme] = useState<Theme>(Theme.ligth)
  const [headerTitle, setHeaderTitle] = useState<string>()
  const [currentRoute, setCurrentRoute] = useState<RouteAppObject>()
  const [appCacheLoaded, setAppCacheLoaded] = useState<boolean>(false)
  const [appLoaderVisible, setAppLoaderVisible] = useState<boolean>(false)
  const location = useLocation()
  const windowsSize = useWindowSize()

  let state = location.state as { backgroundLocation?: Location };
  const globalRoutes = RoutesApp.routeList
  const contactRoute = RoutesApp.getRouteByName('contact')
  const cvRoute = RoutesApp.getRouteByName('cv')

  useEffect(() => {
    setAppLoaderVisible(true)
    cacheImages(CacheImages)
  }, [])

  useEffect(() => {
    let route = RoutesApp.getRouteByPath(location.pathname)    
    route ? setCurrentRoute(route) : setCurrentRoute(RoutesApp.getRouteByName('error'))
    if(!state) setMenuIsLigth(route?.params?.menuIconLigth ?? false)
    if(!state) setCurrentTheme(route?.params?.theme ?? Theme.ligth)
    if(!state) setCurrentSocialTheme(route?.params?.socialTheme ?? route?.params?.theme ?? Theme.ligth)
    if(!state) setHeaderTitle(route?.headerTitle)
  }, [location, state])

  // Specific theme layout change for responsive design
  useEffect(() => {
    if(location.pathname === RoutesApp.getRouteByName('home')?.path ) {
      windowsSize.width <  parseInt(Screen.screenLg) ? setMenuIsLigth(false) : setMenuIsLigth(true)
    }
    if(location.pathname === RoutesApp.getRouteByName('contact')?.path ) {
      windowsSize.width <  parseInt(Screen.screenLg) ? setCurrentSocialTheme(Theme.ligth) : setCurrentSocialTheme(Theme.dark)      
    }
  }, [windowsSize, location])

  const handleClickMenu = (value: boolean) => {
    setMenuIsOpen(value)
  }

  const cacheImages = async (srcArray: string[]) => {
    const promises = srcArray.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = (e) => resolve()
        img.onerror = (e) => reject()
      })
    })

    await Promise.all(promises)

    // Hide loader app
    setAppLoaderVisible(false)

    // Display content
    let timer = setTimeout(() => {
      setAppCacheLoaded(true)
      clearTimeout(timer)
    }, 700);
  }

  return (
    <div data-testid="app" className={`react-app${ currentTheme === Theme.dark || menuIsOpen ? ' dark' : '' }`}>
      { appCacheLoaded && (
        <Header 
          onClick={handleClickMenu}
          menuIsOpen={menuIsOpen} 
          menuIsLigth={menuIsLigth} 
          headerTitle={headerTitle} 
          theme={ currentTheme } 
          headerButtonsEnabled={ currentRoute?.params?.headerButtonsEnabled }
        />
      )}
      { appCacheLoaded ? (
        <Fragment>
          <main className={`${menuIsOpen ? 'scale' : ''}${ currentTheme === Theme.dark ? ' theme-dark' : ' theme-ligth' }`}>
            { globalRoutes.length > 0 && (
              <Routes location={state?.backgroundLocation || location}>
                { globalRoutes.map(({ path, Component }) => (              
                  <Route 
                    key={path}
                    path={path} 
                    element={Component}
                  />
                ))} 
              </Routes>
            )}            
            {state?.backgroundLocation && (
              <Routes>
                { contactRoute != null && (
                  <Route 
                    path={contactRoute?.path} 
                    element={
                      <Modal 
                        title={contactRoute?.headerTitle} 
                        heigth='70%'
                        width='100%' 
                        dismissNavigator
                      >
                        <Contact title={contactRoute?.headerTitle} isModal/>
                      </Modal>
                    } 
                  />
                )}
                { cvRoute != null && (
                  <Route 
                    path={cvRoute?.path}
                    element={
                      <Modal 
                        title={cvRoute?.headerTitle}  
                        width='40%' 
                        heigth='80%'
                        dismissNavigator 
                      >
                        {cvRoute?.Component}
                      </Modal>
                    }
                  />
                )}
              </Routes>
            )}
          </main>
          <SocialSideBar 
            menuIsOpen={menuIsOpen} 
            ligthen={currentSocialTheme === Theme.dark}
          />
        </Fragment>
      ) : <PageLoader visible={appLoaderVisible} />}
    </div>
  )
}

export default App;
