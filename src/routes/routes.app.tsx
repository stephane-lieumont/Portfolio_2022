import Cgi from '~/pages/Cgi'
import Contact from '~/pages/Contact'
import Dev from '~/pages/Dev'
import DevProject from '~/pages/DevProject'
import Error from '~/pages/Error'
import { RouteAppObject } from '~/interfaces/routes.intf'
import { Theme } from '~/interfaces/theme.intf'
import HomePage from '~/pages/HomePage'

export const RouteList: RouteAppObject[] = [  
  { 
    path: '/', 
    name: 'home',
    label: 'Accueil',
    title: 'Portfolio | Stéphane Lieumont',
    Component: HomePage,    
    params: {
      menuIconLigth: true,
      theme: Theme.ligth
    }
  },
  { 
    path: '/portfolio-stephane-lieumont-developpeur', 
    name: 'dev',
    label: 'Développeur',
    title:'Web | Stéphane Lieumont',
    Component: Dev, 
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
    title:'Web | Projet',
    Component: DevProject,
    params: {
      theme: Theme.ligth,
      mainMenuEnabled: false
    }
  },  
  { 
    path: '/portfolio-stephane-lieumont-cgi', 
    name: 'cgi',
    label: 'Graphisme 3D',
    title: 'Graphiste 3D | Stéphane Lieumont',
    Component: Cgi,
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
    title:'Contact | Stéphane Lieumont',
    Component: Contact,   
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
    title: 'Error404 | Stéphane Lieumont',
    Component: Error,
    headerTitle: 'Page introuvable',    
    params: {
      menuIconLigth: true,
      theme: Theme.ligth
    }
  } 
]

export const getRouteByName = (name: string):RouteAppObject | undefined => {
  return RouteList.find(route => route.name === name)
}

export const getRouteByPath = (path: string):RouteAppObject | undefined => {
  // Keep dynamic pass level 1
  const dynamicPath : string = path.split('/').pop() ?? ''

  return RouteList.find((route) => { 
    // check route exactPath
    let routeMatch = route.path === path

    // check route dynamic path level 1
    if (!routeMatch) routeMatch = route.path === path.replace( dynamicPath, ':params')

    return routeMatch  
  })
}
