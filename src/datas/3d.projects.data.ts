import ImgSlideEscartWild from '~/assets/medias/slider/escart-wild-2015.jpg'
import ImgSlideHouse from '~/assets/medias/slider/maison-moderne-2014.jpg'
import ImgSlideAlien from '~/assets/medias/slider/extraterrestre-2016.jpg'
import ImgSlideLego from '~/assets/medias/slider/legos-minions-2015.jpg'

import ImgPortfolio001 from '~/assets/medias/portfolio/1-1-escart-wild-2015.jpg'
import ImgPortfolio002 from '~/assets/medias/portfolio/2-1-bibopp-2015.jpg'
import ImgPortfolio003 from '~/assets/medias/portfolio/4-1-gorgotte-2015.jpg'
import ImgPortfolio004 from '~/assets/medias/portfolio/5-1-auto-portrait-pixmodels-2014.jpg'
import ImgPortfolio005 from '~/assets/medias/portfolio/6-1-immeuble-2015.jpg'
import ImgPortfolio006 from '~/assets/medias/portfolio/7-1-maison-moderne-2014.jpg'
import ImgPortfolio007 from '~/assets/medias/portfolio/9-2-salon-decoration1-nuit-2015.jpg'
import ImgPortfolio008 from '~/assets/medias/portfolio/10-2-chambre-decoration-jour-2015.jpg'
import ImgPortfolio009 from '~/assets/medias/portfolio/12-3-salon-decoration1-jour-2015.jpg'
import ImgPortfolio010 from '~/assets/medias/portfolio/13-1-ampoule-2014.jpg'
import ImgPortfolio011 from '~/assets/medias/portfolio/14-1-canette-de-soda-2014.jpg'
import ImgPortfolio012 from '~/assets/medias/portfolio/17-1-Interieur-blanc-2014.jpg'
import ImgPortfolio013 from '~/assets/medias/portfolio/18-1-herbe-realiste-2014.jpg'
import ImgPortfolio014 from '~/assets/medias/portfolio/19-1-tomates-2014.jpg'
import ImgPortfolio015 from '~/assets/medias/portfolio/21-Lego-Minions-2016.jpg'
import ImgPortfolio016 from '~/assets/medias/portfolio/22-1-Extraterrestre-2016.jpg'


import { SliderImageData, PortfolioData, StackType, SpecialityData } from '~/interfaces/Data.intf'
import { getStack } from '~/utils/stackUtils'

export const SliderImagesData: SliderImageData[] = [
  {
    id:'001',
    title: 'Concept Architecture',
    imgFile: ImgSlideHouse,
    imgAlt: 'Maison moderne photoréaliste',
    released: new Date('2014-01-01')
  },
  {
    id:'002',
    title: 'Escart Wild',
    imgFile: ImgSlideEscartWild,
    imgAlt: 'Award 2015 TDT3D - Escargot cartoon ',
    released: new Date('2015-01-01')
  },
  {
    id:'003',
    title: 'Extraterrestre',
    imgFile: ImgSlideAlien,
    imgAlt: 'Extraterrestre science fiction photoréaliste',
    released: new Date('2016-01-01')
  },
  {
    id:'004',
    title: 'Légos minions',
    imgFile: ImgSlideLego,
    imgAlt: 'Concours TDT3D réalisation image légos',
    released: new Date('2015-01-01')
  }
]

export const PortfolioImagesData: PortfolioData[] = [
  {
    id: '001',
    title: 'escart wild',
    imgFile: ImgPortfolio001,
    imgFileThumb: ImgPortfolio001,
    imgAlt: 'escargot cartoon photo-réaliste',
    released: new Date('2014-01-01'),
    stack: [
      getStack(StackType.max)!,
      getStack(StackType.vray)!,
      getStack(StackType.zbrush)!,
      getStack(StackType.photoshop)!,
    ]
  },
  {
    id: '002',
    title: 'beebop',
    imgFile: ImgPortfolio002,
    imgFileThumb: ImgPortfolio002,
    imgAlt: 'robot Beebop',
    released: new Date('2014-01-01'),
    stack: [
      getStack(StackType.max)!,
      getStack(StackType.substance)!,
      getStack(StackType.zbrush)!,
      getStack(StackType.photoshop)!,
    ]
  },
  {
    id: '003',
    title: 'gorgotte',
    imgFile: ImgPortfolio003,
    imgFileThumb: ImgPortfolio003,
    imgAlt: 'monstre 3d',
    released: new Date('2015-01-01'),
    stack: [
      getStack(StackType.max)!,
      getStack(StackType.zbrush)!,
      getStack(StackType.photoshop)!,
    ]
  },
  {
    id: '004',
    title: 'caricature',
    imgFile: ImgPortfolio004,
    imgFileThumb: ImgPortfolio004,
    imgAlt: 'caricature stéphane lieumont',
    released: new Date('2015-01-01'),
    stack: [
      getStack(StackType.max)!,
      getStack(StackType.vray)!,
      getStack(StackType.zbrush)!,
      getStack(StackType.photoshop)!,
    ]
  },
  {
    id: '005',
    title: 'immeuble',
    imgFile: ImgPortfolio005,
    imgFileThumb: ImgPortfolio005,
    imgAlt: 'imeuble photo-réaliste',
    released: new Date('2014-01-01'),
    stack: [
      getStack(StackType.max)!,
      getStack(StackType.vray)!,
    ]
  },
  {
    id: '006',
    title: 'maison moderne',
    imgFile: ImgPortfolio006,
    imgFileThumb: ImgPortfolio006,
    imgAlt: 'maison moderne',
    released: new Date('2015-01-01'),
    stack: [
      getStack(StackType.max)!,
      getStack(StackType.vray)!,
    ]
  },
  {
    id: '007',
    title: 'architecture d\'intérieur salon',
    imgFile: ImgPortfolio007,
    imgFileThumb: ImgPortfolio007,
    imgAlt: 'architecture d\'intérieur salon',
    released: new Date('2014-01-01'),
    stack: [
      getStack(StackType.max)!,
      getStack(StackType.vray)!,
    ]
  },
  {
    id: '008',
    title: 'architecture d\'intérieur chambre',
    imgFile: ImgPortfolio008,
    imgFileThumb: ImgPortfolio008,
    imgAlt: 'architecture d\'intérieur chambre',
    released: new Date('2014-01-01'),
    stack: [
      getStack(StackType.max)!,
      getStack(StackType.vray)!,
    ]
  },
  {
    id: '009',
    title: 'architecture d\'intérieur salon',
    imgFile: ImgPortfolio009,
    imgFileThumb: ImgPortfolio009,
    imgAlt: 'architecture d\'intérieur salon',
    released: new Date('2014-01-01'),
    stack: [
      getStack(StackType.max)!,
      getStack(StackType.vray)!,
    ]
  },
  {
    id: '010',
    title: 'ampoule',
    imgFile: ImgPortfolio010,
    imgFileThumb: ImgPortfolio010,
    imgAlt: 'ampoule photo-réaliste',
    released: new Date('2014-01-01'),
    stack: [
      getStack(StackType.max)!,
      getStack(StackType.vray)!,
    ]
  },
  {
    id: '011',
    title: 'support marketing',
    imgFile: ImgPortfolio011,
    imgFileThumb: ImgPortfolio011,
    imgAlt: 'canette pixmodels',
    released: new Date('2015-01-01'),
    stack: [
      getStack(StackType.max)!,
      getStack(StackType.vray)!,
      getStack(StackType.photoshop)!,
    ]
  },
  {
    id: '012',
    title: 'architecture d\'intérieur entrée',
    imgFile: ImgPortfolio012,
    imgFileThumb: ImgPortfolio012,
    imgAlt: 'architecture d\'intérieur entrée',
    released: new Date('2014-01-01'),
    stack: [
      getStack(StackType.max)!,
      getStack(StackType.vray)!,
    ]
  },
  {
    id: '013',
    title: 'exterieur',
    imgFile: ImgPortfolio013,
    imgFileThumb: ImgPortfolio013,
    imgAlt: 'exterieur photo-réalise',
    released: new Date('2015-01-01'),
    stack: [
      getStack(StackType.max)!,
      getStack(StackType.vray)!,
      getStack(StackType.photoshop)!,
    ]
  },
  {
    id: '014',
    title: 'tomates',
    imgFile: ImgPortfolio014,
    imgFileThumb: ImgPortfolio014,
    imgAlt: 'tomates photo-réaliste',
    released: new Date('2014-01-01'),
    stack: [
      getStack(StackType.max)!,
      getStack(StackType.vray)!,
      getStack(StackType.photoshop)!,
    ]
  },
  {
    id: '015',
    title: 'légos : les minions',
    imgFile: ImgPortfolio015,
    imgFileThumb: ImgPortfolio015,
    imgAlt: 'légos : les minions',
    released: new Date('2015-01-01'),
    stack: [
      getStack(StackType.max)!,
      getStack(StackType.vray)!,
      getStack(StackType.photoshop)!,
      getStack(StackType.illustrator)!,
    ]
  },
  {
    id: '016',
    title: 'extraterrestre',
    imgFile: ImgPortfolio016,
    imgFileThumb: ImgPortfolio016,
    imgAlt: 'extraterrestre CGI',
    released: new Date('2016-01-01'),
    stack: [
      getStack(StackType.max)!,
      getStack(StackType.vray)!,
      getStack(StackType.photoshop)!,
      getStack(StackType.substance)!,
    ]
  }
]

export const SpecialitiesCgiData: SpecialityData[] = [
  {
    name: 'zbrush',
    src: require('~/assets/icons/zbrush.png'),
    alt: 'zbrush, modélisation organique sculpture 3d',
    size: 90,
  },
  {
    name: '3dsmax',
    src: require('~/assets/icons/3dsmax.png'),
    alt: '3dsmax, logiciel de production 3d',
    size: 90,
  },
  {
    name: 'vray',
    src: require('~/assets/icons/vray.png'),
    alt: 'moteur de rendu 3d',
    size: 90,
  },
  {
    name: 'substance',
    src: require('~/assets/icons/substance-painter.png'),
    alt: 'substance, outil de création de shaders 3d',
    size: 90,
  },
  {
    name: 'photoshop',
    src: require('~/assets/icons/photoshop.png'),
    alt: 'photoshop, outil de retouches photos',
    size: 90,
  },
  {
    name: 'illustrator',
    src: require('~/assets/icons/illustrator.png'),
    alt: 'illustrator, outil de créations 2d vectorielles',
    size: 90,
  }
]

