import Error from '~/pages/Error'
import Home from '~/pages/Home'
import PortfolioCGI from '~/pages/PortfolioCGI'
import PortfolioDev from '~/pages/PortfolioDev'
import { RouteAppObject } from '~/interfaces/Routes.intf'
import { Theme } from '~/interfaces/Theme.intf'
import Contact from '~/pages/Contact'
import CV from '~/pages/CV'
import ProjectWeb from '~/pages/ProjectWeb'

const routeList: RouteAppObject[] = [
  { 
    path: '/', 
    name: 'home',
    label: 'Accueil',
    Component: <Home title='Portfolio | Stéphane Lieumont' />,    
    params: {
      menuIconLigth: true,
      theme: Theme.ligth
    }
  },
  { 
    path: '/portfolio-stephane-lieumont-developpeur', 
    name: 'dev',
    label: 'Portfolio Dev',
    Component: <PortfolioDev title='Web | Stéphane Lieumont' />, 
    headerTitle: "Web & mobile",    
    params: {
      menuIconLigth: false,
      theme: Theme.ligth
    }
  },
  { 
    path: '/portfolio-stephane-lieumont-developpeur/:params', 
    name: 'project-web',
    label: 'Projet Web',
    headerTitle: 'Projet web',
    Component: <ProjectWeb title='Web | Projet' />,
    params: {
      theme: Theme.ligth,
      mainMenuEnabled: false
    }
  },
  { 
    path: '/portfolio-stephane-lieumont-cgi', 
    name: 'cgi',
    label: 'Portfolio CGI',
    Component: <PortfolioCGI title='CGI | Stéphane Lieumont'/>,
    headerTitle: "graphiste 3D",    
    params: {
      menuIconLigth: false,
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
      mainMenuEnabled: false,
      headerButtonsEnabled: false
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
      mainMenuEnabled: false,
      headerButtonsEnabled: false
    }  
  },
  {
    path: '*', 
    name: 'error',
    Component: <Error title='Error404'/>,
    headerTitle: 'Page introuvable',    
    params: {
      menuIconLigth: true,
      theme: Theme.ligth
    }
  }
]

const getRouteByName = (name: string):RouteAppObject | undefined => {
  return routeList.find(route => route.name === name)
}

const getRouteByPath = (path: string):RouteAppObject | undefined => {
  // Keep dynamic pass level 1
  const dynamicPath : string = path.split('/').pop() ?? ''

  return routeList.find((route) => { 
    // check route exactPath
    let routeMatch = route.path === path

    // check route dynamic path level 1
    if (!routeMatch) routeMatch = route.path === path.replace( dynamicPath, ':params')

    return routeMatch  
  })
}


const RoutesApp = {
  routeList,
  getRouteByName,
  getRouteByPath
}

export default RoutesApp