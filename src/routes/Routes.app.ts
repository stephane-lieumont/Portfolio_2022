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
    label: 'Create Employee',
    Component: Home,
    title: 'Portfolio | Stéphane Lieumont',
    icon: faUserPlus
  },
  { 
    path: '/portfolio-stephane-lieumont-developpeur', 
    name: 'employees',
    label: 'View Employees',
    Component: PortfolioDev, 
    title: 'Portfolio Developpeur | Stéphane Lieumont',   
    icon: faUsers
  },
  { 
    path: '/portfolio-stephane-lieumont-cgi', 
    name: 'employees',
    label: 'View Employees',
    Component: PortfolioCGI, 
    title: 'Portfolio CGI | Stéphane Lieumont',   
    icon: faUsers
  },
  {
    path: '*', 
    name: 'Error',
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