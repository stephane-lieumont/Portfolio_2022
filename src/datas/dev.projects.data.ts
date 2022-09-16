import { ProjectDevData, SpecialityData } from "~/interfaces/data.intf"

import CTPappMobileImg from '~/assets/medias/projects/case-tes-potes-mobile-2022.jpg'
import CTPappMobileImgProject from '~/assets/medias/projects/case-tes-potes-mobile-2022_project.jpg'
import CTPlandingPageImg from '~/assets/medias/projects/case-tes-potes-landingpage-2022.jpg'
import CTPlandingPageImgProject from '~/assets/medias/projects/case-tes-potes-landingpage-2022_project.jpg'
import CTPwebAppImg from '~/assets/medias/projects/case-tes-potes-webapp-2021.jpg'
import CTPwebAppImgProject from '~/assets/medias/projects/case-tes-potes-webapp-2021_project.jpg'
import KasaOcImg from '~/assets/medias/projects/oc-kasa-fromation-2021.jpg'
import KasaOcImgProject from '~/assets/medias/projects/oc-kasa-fromation-2021_project.jpg'
import Portfolio2018Img from '~/assets/medias/projects/portfolio-3d-2018.jpg'
import Portfolio2018ImgProject from '~/assets/medias/projects/portfolio-3d-2018_project.jpg'
import Pixmodels2015Img from '~/assets/medias/projects/pixmodels-2016-service-comminucation.jpg'
import Pixmodels2015ImgProject from '~/assets/medias/projects/pixmodels-2016-service-comminucation_project.jpg'


export const ProjectsDevData: ProjectDevData[] = [
  {
    id:'1',
    title: 'Case Tes Potes - Mobile',
    hashName: 'case-tes-potes-application-mobile-2022',
    description: `Case Tes Potes veut casser les codes des sites de rencontre en mettant 
    l'amitié au cœur de l'amour pour faciliter les rencontres et accompagner les célibataires, 
    de la recherche de profils à l'organisation de la première rencontre. Ces dernier·ères 
    n'ont plus qu'à se laisser guider et faire confiance à leur meilleur·e ami·e "Caseur" / "Caseuse".`,
    mission: `Mon rôle en tant que co-fondateur et lead developer était de réaliser une application avec les fonctionnalités essentiels pour tester le produit sur le marché`,
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
    imgAlt: 'case tes potes - appication mobile',
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
    title: 'Case Tes Potes - landing-page',
    hashName: 'case-tes-potes-landing-page-2022',
    description: `La landing page est une page web distincte, créée spécifiquement 
    pour les besoins de la campagne de marketing ou de publicité de l'application.
    C’est sur cette page que les utilisateurs peuvent se préinscrire pour la phase de test fermée. 
    Il est également possible de contacter l'équipe pour plus d'informations.`,
    mission: `La landing page communique avec une API de Sendinblue pour la campagne de communication.
    Les informations de contact sont enregistrées dans les listes de diffusion.<br /> 
    Elle enregistre également les données utilisateurs dans une base de données Mongo 
    à travers une Api développé avec Koa`,
    missionSteps: [
      'Définition du besoin',
      'Maquette avec <strong>Figma</strong>',
      'Développement de l\'application avec <strong>React.js</strong>',
      'Développement de l\'API avec <strong>Koa</strong> et communication avec l\'API de <strong>Sendinblue</strong>',
      'Tests unitaires et tests d\'intégration avec <strong>Jest</strong>',
      'Déploiement de l\'image <strong>Docker</strong> sur les serveur d\'AWS'
    ],
    technos:[
      'react',      
      'typescript',
      'html',
      'sass',
      'node',
      'mongo',
      'git',
      'gitlab',
      'docker',
      'confluence',
      'jira'
    ],
    imgFile: CTPlandingPageImg,
    imgFileProject: CTPlandingPageImgProject,
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
    title: 'Case Tes Potes - Web Application',
    hashName: 'case-tes-potes-webapp-pour-app-mobile-2021',
    description: `L'une des fonctionnalités de l'application Case tes potes nécessite  le témoignage de plusieurs ami·es pour compléter le profil du célibataire.
    C'est pourquoi une web App accessible via un lien d'invitation a été développé pour recueillir ces informations. 
    Cette fonctionnalité évite de télécharger l'application pour décrire son ami·e.`,
    mission: `Cette fonctionnalité a été conçu avec web pack et communique avec l'API de l'application mobile.<br />
    Elle vérifie l'invitation et l'identité de l'utilisateur pour lui permettre de faire une description de son ami·e`,
    missionSteps: [
      'Maquette de l\'application avec <strong>Adobe XD</strong> en accord l\'application mobile',
      'Développement de l\'application avec Webpack en <strong>Vanilla Javascript</strong>',
      'Tests Unitaires et tests d\'intégration avec <strong>Jest</strong>',
      'Déploiement de l\'image <strong>Docker</strong> sur les serveurs d\'AWS',
    ],
    technos:[
      'webpack',      
      'javascript',
      'html',
      'sass',
      'node',
      'git',
      'gitlab',
      'docker',
      'confluence',
      'jira'
    ],
    imgFile: CTPwebAppImg,
    imgFileProject: CTPwebAppImgProject,
    imgAlt: 'case tes potes - web application 2021',
    hashtags: [
      'Webpack',
      'Typescript',
      'Sass',
      'Nodejs'
    ],
    released: new Date('2021-11-17'),
    demoLink: '/tete'
  },
  {
    id:'4',
    title: 'Kasa - Openclassrooms',
    hashName: 'kasa-application-react-openclassrooms-2021',
    description: `Dans le cadre d'un des projet Openclassrooms, il était demandé d'intégrer le design d'une maquette figma avec la technologie React.js.
    Ce projet fut ma première application React.js avec l'utilisation de react-router et typescript.`,
    mission: `Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. 
    Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, 
    et React côté Front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, 
    qui est en freelance`,
    missionSteps: [
      'Développer l\'application <strong>React</strong> en accord avec la maquette',
      'Initiation et maitrise de <strong>TypeScript</strong>',
      'Utilisation de <strong>React-router</strong>',
      'Création d\'une image <strong>Docker</strong> pour le déploiement',
      'Déploiement de l\'application avec <strong>GitHub page</strong>'
    ],
    technos:[
      'react',      
      'typescript',
      'html',
      'sass',
      'git',
      'github',
      'docker'
    ],
    imgFile: KasaOcImg,
    imgFileProject: KasaOcImgProject,
    imgAlt: 'Kasa OpenClassrooms - landingpage 2021',
    hashtags: [
      'React',
      'Typescript',
      'Sass',
      'Nodejs'
    ],
    released: new Date('2021-12-10'),
    demoLink: '/tete'
  },
  {
    id:'5',
    title: 'Portfolio',
    hashName: 'portfolio-3d-stephane-lieumont-2018',
    description: `Etant impressionné par l'évolution des techniques 3D dans le cinéma et les jeux vidéo depuis les années 2000, 
    j'ai eu pour objectif de découvrir cette activité qui me fascine. Grâce à Youtube et divers supports de formations, 
    j'ai acquis les bases de la production 3D. Par la suite, j'ai laissé place à mon imagination et à ma créativité pour concrétiser mes projets.<br />`,
    mission: `Depuis 2008, Je souhaite présenter mes projets à travers ce portfolio en ligne. Vous pouvez retrouver mes réalisations dans la section <a href="/portfolio-stephane-lieumont-cgi">portfolio 3D</a>`,
    missionSteps: [
      'Présenter mes réalisations 3D en ligne',
      'Créer un site en <strong>jQuery HTML CSS</strong>',
      'Déployer le site sur un serveur mutualisé'
    ],
    technos:[
      'html',
      'jquery',
      'git'
    ],
    imgFile: Portfolio2018Img,
    imgFileProject: Portfolio2018ImgProject,
    imgAlt: 'portfolio 3d - 2018',
    hashtags: [
      'Javascript',
      'CSS',
    ],
    released: new Date('2018-09-17'),
    demoLink: '/tete'
  },
  {
    id:'6',
    title: 'Pixmodels',
    hashName: 'pixmodels-communication-ausiovisuelle-2015',
    description: `J’ai créé mon entreprise en 2015. Il était important pour moi d’avoir un support de communication 
    digitale pour présenter mes services. L’entreprise étant orienté audiovisuelle,  
    il était donc essentiel de présenter une bonne image de marque.`,
    mission: `Je souhaite proposer mes services et mes réalisations via un site internet. 
    Un formulaire de contact devait être mis en place pour être contacter par des clients potentiels. 
    L’objectif principal est de gagner en visibilité pour vendre mes prestations afin de construire une image de marque crédible`,
    missionSteps: [
      'Etude du besoin sur le marché',
      'Maquette du site avec <strong>Photoshop</strong>',
      'Création du site avec <strong>HTML, CSS, PHP, Javascript</strong>',
      'Déploiement du site sur un serveur mutualisé'
    ],
    technos:[
      'html',
      'javascript',
      'php',
      'photoshop'
    ],
    imgFile: Pixmodels2015Img,
    imgFileProject: Pixmodels2015ImgProject,
    imgAlt: 'pixmodels - agence de communication audiovisuel',
    hashtags: [
      'Javascript',
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