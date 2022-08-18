import { ProjectDevData, SpecialityData } from "~/interfaces/Data.intf"

import CTPappMobileImg from '~/assets/medias/projects/case-tes-potes-mobile-2022.jpg'
import CTPappMobileImgProject from '~/assets/medias/projects/case-tes-potes-mobile-2022_project.jpg'
import CTPlandingPageImg from '~/assets/medias/projects/case-tes-potes-landingpage-2022.jpg'
import CTPwebAppImg from '~/assets/medias/projects/case-tes-potes-webapp-2021.jpg'
import KasaOcImg from '~/assets/medias/projects/oc-kasa-fromation-2021.jpg'
import Portfolio2018Img from '~/assets/medias/projects/portfolio-3d-2018.jpg'
import Pixmodels2015Img from '~/assets/medias/projects/pixmodels-2016-service-comminucation.jpg'


export const ProjectsDevData: ProjectDevData[] = [
  {
    id:'1',
    title: 'Case Tes Potes - Mobile',
    hashName: 'case-tes-potes-application-mobile-2022',
    description: `Case Tes Potes veut casser les codes des sites de rencontre en mettant 
    l'amitié au cœur de l'amour pour faciliter les rencontres et accompagner les célibataires, 
    de la recherche de profils à l'organisation de la première rencontre. Ces dernier·ères 
    n'ont plus qu'à se laisser guider et faire confiance à leur meilleur·e ami·e "Caseur" / "Caseuse".`,
    mission: `Mon rôle en tant que co-fondateur et lead developpeur était de réaliser une application avec les fonctionnalités essentiels pour tester le produit sur le marché`,
    missionSteps: [
      'Etude et définition des <strong>Users Stories</strong>',
      'Mise en place d\'une <strong>Roadmap produit</strong>',
      'Réalisation d\'une maquette interactive sous <strong>AdobeXD</strong>',
      '<strong>Gestion du projet</strong> avec une équipe de deux developpeurs',
      'Developpement d\'une application avec <strong>Flutter</strong>'
    ],
    technos:[
      'flutter',
      'dart',
      'xd',
      'illustrator',
      'git',
      'gitlab',
      'confluence',
      'jira'
    ],
    imgFile: CTPappMobileImg,
    imgFileProject: CTPappMobileImgProject,
    imgAlt: 'case tes potes - mobile',
    hashtags: [
      'flutter',
      'dart',
      'Android',
      'IOS'
    ],
    released: new Date('2022-08-30'),
  },
  {
    id:'2',
    title: 'Case Tes Potes - LP',
    hashName: 'case-tes-potes-landing-page-2022',
    description: `Case Tes Potes veut casser les codes des sites de rencontre en mettant 
    l'amitié au cœur de l'amour pour faciliter les rencontres et accompagner les célibataires, 
    de la recherche de profils à l'organisation de la première rencontre. Ces dernier·ères 
    n'ont plus qu'à se laisser guider et faire confiance à leur meilleur·e ami·e "Caseur" / "Caseuse".`,
    mission: `Mon rôle en tant que co-fondateur et lead developpeur était de réaliser une application avec les fonctionnalités essentiels pour tester le produit sur le marché`,
    missionSteps: [
      'Etude et définition des Users Stories',
      'Mise en place d\'une Roadmap produit',
      'Réalisation d\'une maquette interactive sous AdobeXD',
      'Gestion du projet avec une équipe de deux developpeurs',
      'Developpement d\'une application avec Flutter'
    ],
    technos:[
      'flutter',
      'dart',
      'xd',
      'illustrator',
      'git',
      'gitlab',
      'confluence',
      'jira'
    ],
    imgFile: CTPlandingPageImg,
    imgFileProject: CTPappMobileImgProject,
    imgAlt: 'case tes potes - landingpage 2022',
    hashtags: [
      'react',
      'typescript',
      'sass',
      'nodejs'
    ],
    released: new Date('2022-03-15'),
    demoLink: '/tertenpion'
  },
  {
    id:'3',
    title: 'Case Tes Potes - WebApp',
    hashName: 'case-tes-potes-webapp-pour-app-mobile-2021',
    description: `Case Tes Potes veut casser les codes des sites de rencontre en mettant 
    l'amitié au cœur de l'amour pour faciliter les rencontres et accompagner les célibataires, 
    de la recherche de profils à l'organisation de la première rencontre. Ces dernier·ères 
    n'ont plus qu'à se laisser guider et faire confiance à leur meilleur·e ami·e "Caseur" / "Caseuse".`,
    mission: `Mon rôle en tant que co-fondateur et lead developpeur était de réaliser une application avec les fonctionnalités essentiels pour tester le produit sur le marché`,
    missionSteps: [
      'Etude et définition des Users Stories',
      'Mise en place d\'une Roadmap produit',
      'Réalisation d\'une maquette interactive sous AdobeXD',
      'Gestion du projet avec une équipe de deux developpeurs',
      'Developpement d\'une application avec Flutter'
    ],
    technos:[
      'flutter',
      'dart',
      'xd',
      'illustrator',
      'git',
      'gitlab',
      'confluence',
      'jira'
    ],
    imgFile: CTPwebAppImg,
    imgFileProject: CTPappMobileImgProject,
    imgAlt: 'case tes potes - web application 2021',
    hashtags: [
      'webpack',
      'typescript',
      'sass',
      'nodejs'
    ],
    released: new Date('2021-11-17'),
    demoLink: '/tete'
  },
  {
    id:'4',
    title: 'Kasa - Openclassrooms',
    hashName: 'kasa-application-react-openclassrooms-2021',
    description: `Case Tes Potes veut casser les codes des sites de rencontre en mettant 
    l'amitié au cœur de l'amour pour faciliter les rencontres et accompagner les célibataires, 
    de la recherche de profils à l'organisation de la première rencontre. Ces dernier·ères 
    n'ont plus qu'à se laisser guider et faire confiance à leur meilleur·e ami·e "Caseur" / "Caseuse".`,
    mission: `Mon rôle en tant que co-fondateur et lead developpeur était de réaliser une application avec les fonctionnalités essentiels pour tester le produit sur le marché`,
    missionSteps: [
      'Etude et définition des Users Stories',
      'Mise en place d\'une Roadmap produit',
      'Réalisation d\'une maquette interactive sous AdobeXD',
      'Gestion du projet avec une équipe de deux developpeurs',
      'Developpement d\'une application avec Flutter'
    ],
    technos:[
      'flutter',
      'dart',
      'xd',
      'illustrator',
      'git',
      'gitlab',
      'confluence',
      'jira'
    ],
    imgFile: KasaOcImg,
    imgFileProject: CTPappMobileImgProject,
    imgAlt: 'case tes potes - landingpage 2021',
    hashtags: [
      'react',
      'typescript',
      'sass',
      'nodejs'
    ],
    released: new Date('2021-12-10'),
    demoLink: '/tete'
  },
  {
    id:'5',
    title: 'Portfolio',
    hashName: 'portfolio-3d-stephane-lieumont-2018',
    description: `Case Tes Potes veut casser les codes des sites de rencontre en mettant 
    l'amitié au cœur de l'amour pour faciliter les rencontres et accompagner les célibataires, 
    de la recherche de profils à l'organisation de la première rencontre. Ces dernier·ères 
    n'ont plus qu'à se laisser guider et faire confiance à leur meilleur·e ami·e "Caseur" / "Caseuse".`,
    mission: `Mon rôle en tant que co-fondateur et lead developpeur était de réaliser une application avec les fonctionnalités essentiels pour tester le produit sur le marché`,
    missionSteps: [
      'Etude et définition des Users Stories',
      'Mise en place d\'une Roadmap produit',
      'Réalisation d\'une maquette interactive sous AdobeXD',
      'Gestion du projet avec une équipe de deux developpeurs',
      'Developpement d\'une application avec Flutter'
    ],
    technos:[
      'flutter',
      'dart',
      'xd',
      'illustrator',
      'git',
      'gitlab',
      'confluence',
      'jira'
    ],
    imgFile: Portfolio2018Img,
    imgFileProject: CTPappMobileImgProject,
    imgAlt: 'portfolio 3d - 2018',
    hashtags: [
      'javascript',
      'CSS',
    ],
    released: new Date('2018-09-17'),
    demoLink: '/tete'
  },
  {
    id:'6',
    title: 'Pixmodels',
    hashName: 'pixmodels-communication-ausiovisuelle-2015',
    description: `Case Tes Potes veut casser les codes des sites de rencontre en mettant 
    l'amitié au cœur de l'amour pour faciliter les rencontres et accompagner les célibataires, 
    de la recherche de profils à l'organisation de la première rencontre. Ces dernier·ères 
    n'ont plus qu'à se laisser guider et faire confiance à leur meilleur·e ami·e "Caseur" / "Caseuse".`,
    mission: `Mon rôle en tant que co-fondateur et lead developpeur était de réaliser une application avec les fonctionnalités essentiels pour tester le produit sur le marché`,
    missionSteps: [
      'Etude et définition des Users Stories',
      'Mise en place d\'une Roadmap produit',
      'Réalisation d\'une maquette interactive sous AdobeXD',
      'Gestion du projet avec une équipe de deux developpeurs',
      'Developpement d\'une application avec Flutter'
    ],
    technos:[
      'flutter',
      'dart',
      'xd',
      'illustrator',
      'git',
      'gitlab',
      'confluence',
      'jira'
    ],
    imgFile: Pixmodels2015Img,
    imgFileProject: CTPappMobileImgProject,
    imgAlt: 'pixmodels - agence de communication audiovisuel',
    hashtags: [
      'javascript',
      'PHP',
      'CSS',
    ],
    released: new Date('2015-06-02')
  }
]

export const SpecialitiesDevData: SpecialityData[] = [
  {
    name: 'vue.js',
    src: require('~/assets/icons/vue.png'),
    alt: 'vue js framework javascript',
    size: 100,
  },
  {
    name: 'react.js',
    src: require('~/assets/icons/react.png'),
    alt: 'react js framework javascript',
    size: 100,
  },
  {
    name: 'flutter',
    src: require('~/assets/icons/flutter.png'),
    alt: 'flutter application mobiles',
    size: 100,
  },
  {
    name: 'webpack',
    src: require('~/assets/icons/webpack.png'),
    alt: 'webpack framework javascript',
    size: 100,
  },
  {
    name: 'sass',
    src: require('~/assets/icons/sass.png'),
    alt: 'sass framework css',
    size: 100,
  },
  {
    name: 'node.js',
    src: require('~/assets/icons/node.png'),
    alt: 'node plateforme logicielle libre javascript',
    size: 100,
  },
]