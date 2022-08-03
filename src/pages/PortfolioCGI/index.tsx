import React, { Fragment, useEffect, useState } from 'react';
import Carousel from '../../components/Carousel';
import SmoothScroll from '../../components/SmoothScroll';
import { PageProps } from '../../interfaces/Routes.intf';
import Footer from '../../layout/Footer';
import { SliderImagesData } from '~/__mock__/data/3d.projects.data';

import './style.scss'

const PortfolioCGI: React.FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  const [scrollY, setScrollY] = useState<number>()

  useEffect(() => {
    document.title = title
  })

  return (
    <SmoothScroll onChanged={(value) => setScrollY(value)}>
      <Fragment>
        <Carousel slides={SliderImagesData} parralaxScrollY={scrollY} /> 
        <div className='page portfolio-cgi' data-testid='page-portfolio-cgi'> 
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
            <div className='section__content'>
              <h2 className='display1'>Réalisations</h2>
            </div>          
          </section>
          <Footer />      
        </div>
      </Fragment>
    </SmoothScroll>
  );
}

export default PortfolioCGI;