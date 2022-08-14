import React, { Fragment, useEffect, useState } from 'react';
import Carousel from '../../components/Carousel';
import SmoothScroll from '../../components/SmoothScroll';
import { PageProps } from '../../interfaces/Routes.intf';
import Footer from '../../layout/Footer';
import { PortfolioImagesData, SliderImagesData } from '~/__mock__/data/3d.projects.data';

import './style.scss'
import Gallery from '~/components/Gallery';
import { PortfolioData } from '~/interfaces/Data.intf';
import ImageViewer from '~/components/ImageViewer';
import Background from '~/components/Background';

const PortfolioCGI: React.FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  const [scrollYPosition, setScrollYPosition] = useState<number>(0)
  const [imgViewerData, setImageViewerData] = useState<PortfolioData>()
  const [displayImageViewer, setDisplayImageViewer] = useState<boolean>(false)

  useEffect(() => {
    document.title = title
  })

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
          <Carousel slides={SliderImagesData} parralaxScrollY={scrollYPosition} /> 
          <div className='page portfolio-cgi' data-testid='page-portfolio-cgi'> 
            <Background
                darken
                triangle={false}
                pointsProperties = {{
                  top: `${10 + (scrollYPosition / 90)}%`,
                  left: '90%',
                  rotate: '145deg',
                  size: '300px',
                  delayAnimation:150
                }}
                circleProperties = {{
                  top: `${20 - (scrollYPosition / 70)}%`,
                  rigth: '90%',
                  size: '350px',
                  delayAnimation: 300
                }}
              /> 
              <section className='section portfolio-cgi__specialities'>          
                <div className='section__content'>            
                  <h2 className='display1'>Spécialités</h2>
                  <ul>
                    <li>
                      <img height={90} src={require('../../assets/icons/zbrush.png')} alt="Vue js framework javascript"/>
                      <p>Zbrush</p>
                    </li>
                    <li>
                      <img height={90} src={require('../../assets/icons/3dsmax.png')} alt="Vue js framework javascript"/>
                      <p>3DSmax</p>
                    </li>
                    <li>
                      <img height={90} src={require('../../assets/icons/vray.png')} alt="Vue js framework javascript"/>
                      <p>Vray</p>
                    </li>
                    <li>
                      <img height={90} src={require('../../assets/icons/substance-painter.png')} alt="Vue js framework javascript"/>
                      <p>Substance</p>
                    </li>
                    <li>
                      <img height={90} src={require('../../assets/icons/photoshop.png')} alt="Vue js framework javascript"/>
                      <p>Photoshop</p>
                    </li>
                    <li>
                      <img height={90} src={require('../../assets/icons/illustrator.png')} alt="Vue js framework javascript"/>
                      <p>Illustrator</p>
                    </li>         
                  </ul>
                </div>       
              </section>
              <section className='section portfolio-cgi__projects'>
                <div className='section__content--fullwidth'>
                  <h2 className='display1'>Réalisations</h2>
                  <Gallery portfolioData={ PortfolioImagesData } onClick={ (imageData) => handleGalleryImageOnClick(imageData) } />
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