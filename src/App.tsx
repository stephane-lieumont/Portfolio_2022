import React, { Fragment, useEffect, useState } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import SocialSideBar from '~/layout/SocialSideBar';
import Header from '~/layout/Header';
import RoutesApp from '~/routes/Routes.app';
import { RouteAppObject } from '~/interfaces/Routes.intf';
import { Theme } from '~/interfaces/Theme.intf';
import Modal from '~/components/Modal';

const App: React.FunctionComponent = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const [menuIsLigth, setMenuIsLigth] = useState<boolean>(false)
  const [headerTitle, setHeaderTitle] = useState<string>()
  const [currentRoute, setCurrentRoute] = useState<RouteAppObject>()

  const location = useLocation()
  let state = location.state as { backgroundLocation?: Location };
  const globalRoutes = RoutesApp.routeList
  const contactRoute = RoutesApp.getRouteByName('contact')
  const cvRoute = RoutesApp.getRouteByName('cv')

  useEffect(() => {
    const route = RoutesApp.getRouteByPath(location.pathname)

    if(!state) setMenuIsLigth(route?.params?.menuIconLigth ?? false)
    setCurrentRoute(route)
    setHeaderTitle(route?.headerTitle)

  }, [location, state])

  const handleClickMenu = (value: boolean) => {
    setMenuIsOpen(value)
    value ? 
    document.body.classList.add('heigth-auto') :
    document.body.classList.remove('heigth-auto')
  }

  return (
    <div data-testid="app" className="react-app"> 
      <Fragment>    
      <Header onClick={handleClickMenu} menuIsOpen={menuIsOpen} menuIsLigth={menuIsLigth} headerTitle={headerTitle} theme={ currentRoute?.params?.theme } headerButtonsEnabled={ currentRoute?.params?.headerButtonsEnabled } />
        <main className={`${menuIsOpen ? 'scale' : ''}${ currentRoute?.params?.theme === Theme.dark ? ' theme-dark' : ' theme-ligth' }`}>
          <Routes location={state?.backgroundLocation || location}>
            { globalRoutes.map(({ path, Component }) => (              
              <Route key={path} path={path} element={Component} />
            ))} 
          </Routes>
          {/* Show the modal when a `backgroundLocation` is set */}
          {state?.backgroundLocation && (
            <Routes>
              <Route path={contactRoute?.path} element={<Modal title={contactRoute?.headerTitle} heigth='70%' dismissNavigator >{contactRoute?.Component}</Modal>} />
              <Route path={cvRoute?.path} element={<Modal title={cvRoute?.headerTitle}  width='40%' heigth='80%' dismissNavigator >{cvRoute?.Component}</Modal>} />
            </Routes>
          )}
        </main>
        <SocialSideBar menuIsOpen={menuIsOpen} ligthen={currentRoute?.params?.theme === Theme.dark} />
      </Fragment>
    </div>
  )
}

export default App;
