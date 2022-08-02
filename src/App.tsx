import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import SocialSideBar from './layout/SocialSideBar';
import Header from './layout/Header';
import RoutesApp from './routes/Routes.app';
import MyRoute from './components/MyRoute';
import { RouteAppObject } from './interfaces/Routes.intf';
import { Theme } from './interfaces/Theme.intf';

const App: React.FunctionComponent = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const [menuIsLigth, setMenuIsLigth] = useState<boolean>(false)
  const [headerTitle, setHeaderTitle] = useState<string>()
  const [locationError, setLocationError] = useState<boolean>(false)
  const [currentRoute, setCurrentRoute] = useState<RouteAppObject>()

  const location = useLocation()

  // get routes navigation
  const globalRoutes = RoutesApp.routeList.filter(route => route.name !== 'error')
  const errorRoute = RoutesApp.routeList.filter(route => route.name === 'error')[0]

  // onChange location route to transition CSS
  useEffect(() => {
    setCurrentRoute( RoutesApp.getRouteByPath(location.pathname) )
    setLocationError( currentRoute ? false : true )
    setHeaderTitle(currentRoute?.headerTitle)
    setMenuIsLigth(currentRoute?.menuIconLigth ?? false)
  }, [location, currentRoute])  

  const handleClickMenu = (value: boolean) => {
    setMenuIsOpen(value)
    value ? 
    document.body.classList.add('heigth-auto') :
    document.body.classList.remove('heigth-auto')
  }

  return (
    <div data-testid="app" className="react-app">      
      <Header onClick={handleClickMenu} menuIsOpen={menuIsOpen} menuIsLigth={menuIsLigth} headerTitle={headerTitle} theme={ currentRoute?.params?.theme } />
      <main className={`${menuIsOpen ? 'scale' : ''}${ currentRoute?.params?.theme === Theme.dark ? ' theme-dark' : ' theme-ligth' }`}>
        { locationError === false ?
          globalRoutes.map(({ path, Component, title }) => (
            <MyRoute key={path} path={path} >
              <Component title={title} />
            </MyRoute>
          )) :
          <MyRoute key={errorRoute.path} path={errorRoute.path} >
            <errorRoute.Component title={errorRoute.title} />
          </MyRoute>
        }        
      </main>
      <SocialSideBar menuIsOpen={menuIsOpen} />     
    </div>
  );
}

export default App;
