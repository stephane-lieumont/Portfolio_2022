import ImgSlideEscartWild from '~/assets/medias/slider/escart-wild-2015.jpg'
import ImgSlideHouse from '~/assets/medias/slider/maison-moderne-2014.jpg'
import ImgSlideAlien from '~/assets/medias/slider/extraterrestre-2016.jpg'
import ImgSlideLego from '~/assets/medias/slider/legos-minions-2015.jpg'

import ImgPortfolio001 from '~/assets/medias/portfolio/1-1-escart-wild-2015.jpg'
import ImgPortfolio002 from '~/assets/medias/portfolio/2-1-bibopp-2015.jpg'
import ImgPortfolio003 from '~/assets/medias/portfolio/3-1-pelluche-2015.jpg'
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


import { SliderImageData, PortfolioData, Stack } from '~/interfaces/Data.intf'

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
    title: 'TitleImage',
    imgFile: ImgPortfolio001,
    imgFileThumb: ImgPortfolio001,
    imgAlt: 'alt text',
    released: new Date('2014-01-01'),
    stack: [
      Stack.max,
      Stack.vray
    ]
  },
  {
    id: '002',
    title: 'TitleImage',
    imgFile: ImgPortfolio002,
    imgFileThumb: ImgPortfolio002,
    imgAlt: 'alt text',
    released: new Date('2014-01-01'),
    stack: [
      Stack.max,
      Stack.vray
    ]
  },
  {
    id: '003',
    title: 'TitleImage',
    imgFile: ImgPortfolio003,
    imgFileThumb: ImgPortfolio003,
    imgAlt: 'alt text',
    released: new Date('2014-01-01'),
    stack: [
      Stack.max,
      Stack.vray
    ]
  },
  {
    id: '004',
    title: 'TitleImage',
    imgFile: ImgPortfolio004,
    imgFileThumb: ImgPortfolio004,
    imgAlt: 'alt text',
    released: new Date('2014-01-01'),
    stack: [
      Stack.max,
      Stack.vray
    ]
  },
  {
    id: '005',
    title: 'TitleImage',
    imgFile: ImgPortfolio005,
    imgFileThumb: ImgPortfolio005,
    imgAlt: 'alt text',
    released: new Date('2014-01-01'),
    stack: [
      Stack.max,
      Stack.vray
    ]
  },
  {
    id: '006',
    title: 'TitleImage',
    imgFile: ImgPortfolio006,
    imgFileThumb: ImgPortfolio006,
    imgAlt: 'alt text',
    released: new Date('2014-01-01'),
    stack: [
      Stack.max,
      Stack.vray
    ]
  },
  {
    id: '007',
    title: 'TitleImage',
    imgFile: ImgPortfolio007,
    imgFileThumb: ImgPortfolio007,
    imgAlt: 'alt text',
    released: new Date('2014-01-01'),
    stack: [
      Stack.max,
      Stack.vray
    ]
  },
  {
    id: '008',
    title: 'TitleImage',
    imgFile: ImgPortfolio008,
    imgFileThumb: ImgPortfolio008,
    imgAlt: 'alt text',
    released: new Date('2014-01-01'),
    stack: [
      Stack.max,
      Stack.vray
    ]
  },
  {
    id: '009',
    title: 'TitleImage',
    imgFile: ImgPortfolio009,
    imgFileThumb: ImgPortfolio009,
    imgAlt: 'alt text',
    released: new Date('2014-01-01'),
    stack: [
      Stack.max,
      Stack.vray
    ]
  },
  {
    id: '010',
    title: 'TitleImage',
    imgFile: ImgPortfolio010,
    imgFileThumb: ImgPortfolio010,
    imgAlt: 'alt text',
    released: new Date('2014-01-01'),
    stack: [
      Stack.max,
      Stack.vray
    ]
  },
  {
    id: '011',
    title: 'TitleImage',
    imgFile: ImgPortfolio011,
    imgFileThumb: ImgPortfolio011,
    imgAlt: 'alt text',
    released: new Date('2014-01-01'),
    stack: [
      Stack.max,
      Stack.vray
    ]
  },
  {
    id: '012',
    title: 'TitleImage',
    imgFile: ImgPortfolio012,
    imgFileThumb: ImgPortfolio012,
    imgAlt: 'alt text',
    released: new Date('2014-01-01'),
    stack: [
      Stack.max,
      Stack.vray
    ]
  },
  {
    id: '013',
    title: 'TitleImage',
    imgFile: ImgPortfolio013,
    imgFileThumb: ImgPortfolio013,
    imgAlt: 'alt text',
    released: new Date('2014-01-01'),
    stack: [
      Stack.max,
      Stack.vray
    ]
  },
  {
    id: '014',
    title: 'TitleImage',
    imgFile: ImgPortfolio014,
    imgFileThumb: ImgPortfolio014,
    imgAlt: 'alt text',
    released: new Date('2014-01-01'),
    stack: [
      Stack.max,
      Stack.vray
    ]
  },
  {
    id: '015',
    title: 'TitleImage',
    imgFile: ImgPortfolio015,
    imgFileThumb: ImgPortfolio015,
    imgAlt: 'alt text',
    released: new Date('2014-01-01'),
    stack: [
      Stack.max,
      Stack.vray
    ]
  },
  {
    id: '016',
    title: 'TitleImage',
    imgFile: ImgPortfolio016,
    imgFileThumb: ImgPortfolio016,
    imgAlt: 'alt text',
    released: new Date('2014-01-01'),
    stack: [
      Stack.max,
      Stack.vray
    ]
  }
]