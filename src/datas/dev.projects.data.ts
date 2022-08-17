import { ProjectDevData, SpecialityData } from "~/interfaces/Data.intf"

import CTPappMobileImg from '~/assets/medias/projects/case-tes-potes-mobile-2022.jpg'
import CTPlandingPageImg from '~/assets/medias/projects/case-tes-potes-landingpage-2022.jpg'
import CTPwebAppImg from '~/assets/medias/projects/case-tes-potes-webapp-2021.jpg'
import KasaOcImg from '~/assets/medias/projects/oc-kasa-fromation-2021.jpg'
import Portfolio2018Img from '~/assets/medias/projects/portfolio-3d-2018.jpg'
import Pixmodels2015Img from '~/assets/medias/projects/pixmodels-2016-service-comminucation.jpg'


export const ProjectsDevData: ProjectDevData[] = [
  {
    id:'1',
    title: 'Case Tes Potes - Mobile',
    description: 'Application mobile android & IOS Case tes potes',
    imgFile: CTPappMobileImg,
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
    imgFile: CTPlandingPageImg,
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
    imgFile: CTPwebAppImg,
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
    imgFile: KasaOcImg,
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
    imgFile: Portfolio2018Img,
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
    imgFile: Pixmodels2015Img,
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