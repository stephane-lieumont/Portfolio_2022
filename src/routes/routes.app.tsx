
import { RouteAppObject } from '~/interfaces/routes.intf'
import { Theme } from '~/interfaces/theme.intf'
import Cgi from '~/pages/Cgi'
import Contact from '~/pages/Contact'
import Dev from '~/pages/Dev'
import DevProject from '~/pages/DevProject'
import Error from '~/pages/Error'
import Home from '~/pages/Home'

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
    Component: <Dev title='Web | Stéphane Lieumont' />, 
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
    Component: <DevProject title='Web | Projet' />,
    params: {
      theme: Theme.ligth,
      mainMenuEnabled: false
    }
  },
  
  { 
    path: '/portfolio-stephane-lieumont-cgi', 
    name: 'cgi',
    label: 'Portfolio CGI',
    Component: <Cgi title='CGI | Stéphane Lieumont'/>,
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
      socialTheme: Theme.dark,
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