import React, { useEffect } from 'react';
import SmoothScroll from '../../components/SmoothScroll';
import { PageProps } from '../../interfaces/Routes.intf';
import Footer from '../../layout/Footer';

import './style.scss'

const PortfolioDev: React.FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  useEffect(() => {
    document.title = title
  })
  return (
    <SmoothScroll>
      <div className='page portfolio-dev' data-testid='page-portfolio-dev'>      
        <section className='section portfolio-dev__specialities'>
          <div className='section__content'>
            <h2 className='display1'>Spécialités</h2>
            <ul>
              <li>
                <img height={100} src={require('../../assets/icons/vue.png')} alt="Vue js framework javascript"/>
                <p>Vuejs</p>
              </li>
              <li>
                <img height={100} src={require('../../assets/icons/react.png')} alt="Vue js framework javascript"/>
                <p>React</p>
              </li>
              <li>
                <img height={100} src={require('../../assets/icons/webpack.png')} alt="Vue js framework javascript"/>
                <p>Webpack</p>
              </li>
              <li>
                <img height={100} src={require('../../assets/icons/flutter.png')} alt="Vue js framework javascript"/>
                <p>Flutter</p>
              </li>
              <li>
                <img height={100} src={require('../../assets/icons/sass.png')} alt="Vue js framework javascript"/>
                <p>Sass</p>
              </li>
              <li>
                <img height={100} src={require('../../assets/icons/node.png')} alt="Vue js framework javascript"/>
                <p>Node JS</p>
              </li>         
            </ul>
          </div>
        </section>
        <section className='section portfolio-dev__softskills'>
          <div className='section__content'>
            <h2 className='display1'>Compétences transverses</h2>
            <div className='row'>
              <div className='row--col1'>
                <h3>Autonomie et curiosité</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum laoreet metus. 
                  Nulla hendrerit malesuada velit, sit amet elementum eros dapibus nec. Aenean quis commodo mi, 
                  sed vestibulum sem. In lacinia molestie cursus. Nunc eleifend suscipit sollicitudin. 
                  Pellentesque sit amet tempor tellus. Integer at mi et nisl maximus pellentesque. 
                  Sed sodales lorem non elementum luctus.
                </p>
              </div>
              <div className='row--col1'>
                <div className='image-placeholder'></div>
              </div>          
            </div>
          </div>
        </section>
        <section className='section portfolio-dev__projects'>
          <div className='section__content'>
            <h2 className='display1'>Réalisations</h2>
            <ul>
              <li className='image-placeholder'></li>
              <li className='image-placeholder'></li>
              <li className='image-placeholder'></li>
              <li className='image-placeholder'></li>
              <li className='image-placeholder'></li>
              <li className='image-placeholder'></li>
            </ul>
          </div>
        </section>
        <Footer />      
      </div>
    </SmoothScroll>
  );
}

export default PortfolioDev;