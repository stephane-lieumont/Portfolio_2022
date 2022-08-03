import ImgSlideEscartWild from '~/assets/medias/escart-wild-2015.jpg'
import ImgSlideHouse from '~/assets/medias/maison-moderne-2014.jpg'
import ImgSlideAlien from '~/assets/medias/extraterrestre-2016.jpg'
import ImgSlideLego from '~/assets/medias/legos-minions-2015.jpg'
import { SliderImageData } from '~/interfaces/Data.intf'

export const SliderImagesData: SliderImageData[] = [
  {
    title: 'Concept Architecture',
    imgFile: ImgSlideHouse,
    imgAlt: 'Maison moderne photoréaliste',
    released: new Date('2014-01-01')
  },
  {
    title: 'Escart Wild',
    imgFile: ImgSlideEscartWild,
    imgAlt: 'Award 2015 TDT3D - Escargot cartoon ',
    released: new Date('2015-01-01')
  },
  {
    title: 'Extraterrestre',
    imgFile: ImgSlideAlien,
    imgAlt: 'Extraterrestre science fiction photoréaliste',
    released: new Date('2016-01-01')
  },
  {
    title: 'Légos minions',
    imgFile: ImgSlideLego,
    imgAlt: 'Concours TDT3D réalisation image légos',
    released: new Date('2015-01-01')
  }
]