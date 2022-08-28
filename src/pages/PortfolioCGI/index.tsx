import React, { Fragment, useEffect, useRef, useState } from 'react';
import Carousel from '~/components/Carousel';
import SmoothScroll from '~/components/SmoothScroll';
import Footer from '~/layout/Footer';
import { PortfolioImagesData, SliderImagesData, SpecialitiesCgiData } from '~/datas/3d.projects.data';

import './style.scss'
import Gallery from '~/components/Gallery';
import { PortfolioData, SpecialityData } from '~/interfaces/Data.intf';
import ImageViewer from '~/components/ImageViewer';
import Background from '~/components/Background';
import { firstLetterUpper } from '~/utils/formatString';
import useWindowSize from '~/hooks/useWindowsSize';
import { PageProps } from '~/interfaces/Component.intf';

const PortfolioCGI: React.FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  const specialities: SpecialityData[] = SpecialitiesCgiData

  const [scrollYPosition, setScrollYPosition] = useState<number>(0)
  const [imgViewerData, setImageViewerData] = useState<PortfolioData>()
  const [appearSectionSpecialities, setAppearSectionSpecialities] = useState<boolean>()
  const [appearSectionPortfolio, setAppearSectionPortfolio] = useState<boolean>()
  const [displayImageViewer, setDisplayImageViewer] = useState<boolean>(false)

  const sectionSpecialities = useRef<HTMLDivElement>(null)
  const sectionPortfolio = useRef<HTMLDivElement>(null)

  const windowSize = useWindowSize();  

  useEffect(() => {
    document.title = title
    window.scrollTo(0,0)
  }, [title])

  useEffect(() => {
    const offsetApear = windowSize.height * 0.6;

    const revealSectionSpecialities = scrollYPosition >= sectionSpecialities.current!.offsetTop - windowSize.height + 100
    const revealSectionPortfolio = scrollYPosition >= sectionPortfolio.current!.offsetTop - windowSize.height + offsetApear

    if(!appearSectionSpecialities) setAppearSectionSpecialities(revealSectionSpecialities)
    if(!appearSectionPortfolio) setAppearSectionPortfolio(revealSectionPortfolio)

  }, [appearSectionSpecialities, appearSectionPortfolio, scrollYPosition, windowSize])
 
  const handleImageViewerOnClose = () => {
    setDisplayImageViewer(false)
  }

  const handleGalleryImageOnClick = (imageData: PortfolioData) => {
    setDisplayImageViewer(true)
    setImageViewerData(imageData)
  }

  return (
    <Fragment >
      <SmoothScroll onChanged={(value) => setScrollYPosition(value)}>
        <Fragment>          
          <div className='page portfolio-cgi' data-testid='page-portfolio-cgi'> 
            <Carousel slides={SliderImagesData} parralaxScrollY={scrollYPosition} />
              <section ref={sectionSpecialities} className='section portfolio-cgi__specialities'>      
                <Background
                  darken
                  triangle={false}
                  pointsProperties = {{
                    top: `${50 - (scrollYPosition / 30)}%`,
                    left: '90%',
                    rotate: '145deg',
                    size: '300px',
                    delayAnimation:150
                  }}
                  circleProperties = {{
                    bottom: `${50 - (scrollYPosition / 20)}%`,
                    rigth: '90%',
                    size: '350px',
                    delayAnimation: 300
                  }}
                />    
                <div className='section__content'>            
                  <h2 className={`display1 reveal${ appearSectionSpecialities ? ' reveal--0' : '' }`}><span>Spécialités</span></h2>
                  <ul className='specialities'>
                    { specialities.map((speciality, index) => (
                     <li key={`speciality-${index}`} className={`specialities__item${ appearSectionSpecialities ? ` specialities__item__reveal--${index}` : ''}`}>
                        <img height={speciality.size} src={speciality.src} alt={speciality.alt} />
                        <p>{ firstLetterUpper(speciality.name) }</p>
                      </li>
                    ))}
                  </ul>
                </div>       
              </section>
              <section ref={sectionPortfolio} className='section portfolio-cgi__projects'>
                <div className='section__content section__content--fullwidth'>
                  <h2 className={`display1 reveal${ appearSectionPortfolio ? ' reveal--0' : '' }`}><span>Réalisations</span></h2>
                  <Gallery portfolioData={ PortfolioImagesData } onClick={ (imageData) => handleGalleryImageOnClick(imageData) } visible={appearSectionPortfolio} />          
                </div>          
              </section>
              <Footer />      
            </div>        
          </Fragment>      
        </SmoothScroll>
      <ImageViewer imageData={imgViewerData} displayOn={displayImageViewer} onClose={handleImageViewerOnClose} />
    </Fragment>
  );
}

export default PortfolioCGI;