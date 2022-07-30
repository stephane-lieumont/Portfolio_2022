import Error from '../pages/Error'
import Home from '../pages/Home'
import PortfolioCGI from '../pages/PortfolioCGI'
import PortfolioDev from '../pages/PortfolioDev'
import { RouteAppObject } from '../interfaces/Routes.intf'


const routeList: RouteAppObject[] = [
  { 
    path: '/', 
    name: 'home',
    label: 'Accueil',
    Component: Home,
    title: 'Portfolio | Stéphane Lieumont',
    menuIconLigth: true
  },
  { 
    path: '/portfolio-stephane-lieumont-developpeur', 
    name: 'dev',
    label: 'Portfolio Dev',
    Component: PortfolioDev, 
    title: 'Portfolio Developpeur | Stéphane Lieumont',
    headerTitle: "developpeur Web & mobile",
    menuIconLigth: false
  },
  { 
    path: '/portfolio-stephane-lieumont-cgi', 
    name: 'cgi',
    label: 'Portfolio CGI',
    Component: PortfolioCGI, 
    title: 'Portfolio CGI | Stéphane Lieumont',   
    headerTitle: "graphiste 3D",
    menuIconLigth: false
  },
  {
    path: '*', 
    name: 'error',
    Component: Error,
    title: 'Error404',
    menuIconLigth: false
  }
]

const getRouteByName = (name: string):RouteAppObject | undefined => {
  return routeList.find(route => route.name === name)
}

const getRouteByPath = (path: string):RouteAppObject | undefined => {
  return routeList.find(route => route.path.includes(path))
}


const RoutesApp = {
  routeList,
  getRouteByName,
  getRouteByPath
}

export default RoutesApp