import React, { useEffect } from 'react';
import SmoothScroll from '../../components/SmoothScroll';
import { PageProps } from '../../interfaces/Routes.intf';
import Footer from '../../layout/Footer';

import './style.scss'

const PortfolioCGI: React.FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  useEffect(() => {
    document.title = title
  })

  return (
    <SmoothScroll>
      <div className='page portfolio-cgi' data-testid='page-portfolio-cgi'>      
        <section className='section'>
          <div className='section__content'>
            <h2 className='display1'>Spécialités</h2>
            <ul>
              <li>
                <img src={require('../../assets/icons/vue.png')} alt="Vue js framework javascript"/>
                <p>Zbrush</p>
              </li>
              <li>3Dsmax</li>
              <li>Vray</li>
              <li>Substance</li>
              <li>Photoshop</li>
              <li>Illustrator</li>          
            </ul>
          </div>          
        </section>
        <section className='section'>
          <div className='section__content'>
            <h2 className='display1'>Réalisations</h2>
          </div>          
        </section>
        <Footer />      
      </div>
    </SmoothScroll>
  );
}

export default PortfolioCGI;