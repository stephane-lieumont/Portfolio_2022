import Error from '../pages/Error'
import Home from '../pages/Home'
import PortfolioCGI from '../pages/PortfolioCGI'
import PortfolioDev from '../pages/PortfolioDev'
import { RouteAppObject } from '../interfaces/Routes.intf'
import { faUserPlus, faUsers, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'


const routeList: RouteAppObject[] = [
  { 
    path: '/', 
    name: 'home',
    label: 'Accueil',
    Component: Home,
    title: 'Portfolio | Stéphane Lieumont',
    icon: faUserPlus
  },
  { 
    path: '/portfolio-stephane-lieumont-developpeur', 
    name: 'dev',
    label: 'Portfolio Web',
    Component: PortfolioDev, 
    title: 'Portfolio Developpeur | Stéphane Lieumont',   
    icon: faUsers
  },
  { 
    path: '/portfolio-stephane-lieumont-cgi', 
    name: 'cgi',
    label: 'Portfolio CGI',
    Component: PortfolioCGI, 
    title: 'Portfolio CGI | Stéphane Lieumont',   
    icon: faUsers
  },
  {
    path: '*', 
    name: 'error',
    Component: Error,
    title: 'Error404',
    icon: faCircleExclamation
  }
]

const getRouteByName = (name: string):RouteAppObject | undefined => {
  return routeList.find(route => route.name === name)
}


const RoutesApp = {
  routeList,
  getRouteByName
}

export default RoutesApp