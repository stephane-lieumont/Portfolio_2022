import { ProjectDevData } from "../../interfaces/Data.intf";

export const ProjectsDevData: ProjectDevData[] = [
  {
    id:'1',
    title: 'Case Tes Potes - Mobile',
    description: 'Application mobile android & IOS Case tes potes',
    imgFileName: 'case-tes-potes-mobile-2022.jpg',
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
    description: 'Développement de la landing page et de l’application mobile de Case tes potes.',
    imgFileName: 'case-tes-potes-landingpage-2022.jpg',
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
    description: 'Formulaire web responsive pour publier des stories sur l\'application mobile',
    imgFileName: 'case-tes-potes-webapp-2021.jpg',
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
    description: 'Application React dans le cadre de la formation Developpeur FrontEnd',
    imgFileName: 'oc-kasa-fromation-2021.jpg',
    imgAlt: 'case tes potes - landingpage 2022',
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
    description: 'Portfolio 3d sur mes réalisation 2014-2016',
    imgFileName: 'portfolio-3d-2018.jpg',
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
    description: 'Projets d\'auto-entrepreneur en 2015. Je proposais divers services marqueting',
    imgFileName: 'pixmodels-2016-service-comminucation.jpg',
    imgAlt: 'pixmodels - agence de communication audiovisuel',
    hashtags: [
      'javascript',
      'PHP',
      'CSS',
    ],
    released: new Date('2015-06-02')
  }
]

