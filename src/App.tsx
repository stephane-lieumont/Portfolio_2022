import React, { Fragment, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SocialSideBar from '~/layout/SocialSideBar';
import Header from '~/layout/Header';
import Modal from '~/components/Modal';
import RoutesApp from '~/routes/Routes.app';
import { CacheImages } from './datas/cache.img.data';
import { RouteAppObject } from '~/interfaces/Routes.intf';
import { Theme } from '~/interfaces/Theme.intf';

const App: React.FunctionComponent = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const [menuIsLigth, setMenuIsLigth] = useState<boolean>(false)
  const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.ligth)
  const [headerTitle, setHeaderTitle] = useState<string>()
  const [currentRoute, setCurrentRoute] = useState<RouteAppObject>()
  const [appCacheLoaded, setAppCacheLoaded] = useState<boolean>(false)
  const location = useLocation()

  let state = location.state as { backgroundLocation?: Location };
  const globalRoutes = RoutesApp.routeList
  const contactRoute = RoutesApp.getRouteByName('contact')
  const cvRoute = RoutesApp.getRouteByName('cv')

  useEffect(() => {
    cacheImages(CacheImages)
  }, [])

  useEffect(() => {
    let route = RoutesApp.getRouteByPath(location.pathname)    
    if(!route) setCurrentRoute(RoutesApp.getRouteByName('error'))
    if(!state) setMenuIsLigth(route?.params?.menuIconLigth ?? false)
    if(!state) setCurrentTheme(route?.params?.theme ?? Theme.ligth)    
    if(!state) setHeaderTitle(route?.headerTitle)    
  }, [location, state])

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
    setAppCacheLoaded(true)
  }

  return (
    <div data-testid="app" className="react-app">
      { appCacheLoaded ? (
        <Fragment>    
          <Header 
            onClick={handleClickMenu}
            menuIsOpen={menuIsOpen} 
            menuIsLigth={menuIsLigth} 
            headerTitle={headerTitle} 
            theme={ currentTheme } 
            headerButtonsEnabled={ currentRoute?.params?.headerButtonsEnabled }
          />
          <main className={`${menuIsOpen ? 'scale' : ''}${ currentRoute?.params?.theme === Theme.dark ? ' theme-dark' : ' theme-ligth' }`}>
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
            {/* Show the modal when a `backgroundLocation` is set */}
              {state?.backgroundLocation && (
                <Routes>
                  { contactRoute != null && (
                    <Route 
                      path={contactRoute?.path} 
                      element={
                        <Modal 
                          title={contactRoute?.headerTitle} 
                          heigth='70%' 
                          dismissNavigator 
                        >
                          {contactRoute?.Component}
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
            ligthen={currentRoute?.params?.theme === Theme.dark}
          />
        </Fragment>
      ) : null /** PLACEHOLDER GENERAL LOADER */}
    </div>
  )
}

export default App;
