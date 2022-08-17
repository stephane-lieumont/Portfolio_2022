import Error from '../pages/Error'
import Home from '../pages/Home'
import PortfolioCGI from '../pages/PortfolioCGI'
import PortfolioDev from '../pages/PortfolioDev'
import { RouteAppObject } from '../interfaces/Routes.intf'
import { Theme } from '../interfaces/Theme.intf'
import Contact from '~/pages/Contact'
import CV from '~/pages/CV'
import Modal from '~/components/Modal'



const routeList: RouteAppObject[] = [
  { 
    path: '/', 
    name: 'home',
    label: 'Accueil',
    Component: <Home title='Portfolio | Stéphane Lieumont' />,
    menuIconLigth: true,
    params: {
      theme: Theme.ligth
    }
  },
  { 
    path: '/portfolio-stephane-lieumont-developpeur', 
    name: 'dev',
    label: 'Portfolio Dev',
    Component: <PortfolioDev title='Portfolio Developpeur | Stéphane Lieumont' />, 
    headerTitle: "Web & mobile",
    menuIconLigth: false,
    params: {
      theme: Theme.ligth
    }
  },
  { 
    path: '/portfolio-stephane-lieumont-developpeur/projects/:id', 
    name: 'project',
    label: 'projet',
    Component: <Modal />,
    params: {
      theme: Theme.ligth,
      mainMenuEnabled: false
    }
  },
  { 
    path: '/portfolio-stephane-lieumont-cgi', 
    name: 'cgi',
    label: 'Portfolio CGI',
    Component: <PortfolioCGI title='Portfolio CGI | Stéphane Lieumont'/>,
    headerTitle: "graphiste 3D",
    menuIconLigth: false,
    params: {
      theme: Theme.dark
    }
  },
  { 
    path: '/contact-stephane-lieumont', 
    name: 'contact',
    label: 'Contact',
    headerTitle: "Contactez-moi",
    Component: <Contact title='Contactez-moi'/>,   
    params: {
      theme: Theme.ligth,
      mainMenuEnabled: false
    } 
  },
  { 
    path: '/cv-stephane-lieumont', 
    name: 'cv',
    label: 'Mon CV',
    headerTitle: "Mon Parcours",
    Component: <CV title='CV Stéphane Lieumont' />, 
    params: {
      theme: Theme.ligth,
      mainMenuEnabled: false
    }  
  },
  {
    path: '*', 
    name: 'error',
    Component: <Error title='Error404'/>,
    headerTitle: 'Page introuvable',
    menuIconLigth: true,
    params: {
      theme: Theme.ligth
    }
  }
]


const getRouteByName = (name: string):RouteAppObject | undefined => {
  return routeList.find(route => route.name === name)
}

const getRouteByPath = (path: string):RouteAppObject | undefined => {
  return routeList.find(route => route.path === path)
}


const RoutesApp = {
  routeList,
  getRouteByName,
  getRouteByPath
}

export default RoutesApp