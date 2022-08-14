import React, { useEffect } from 'react';
import SmoothScroll from '../../components/SmoothScroll';
import { PageProps } from '../../interfaces/Routes.intf';
import Footer from '../../layout/Footer';
import SoftSkillsPicture from '../../assets/pictures/softskills-illustration.svg'
import { ProjectsDevData } from '../../__mock__/data/dev.projects.data';
import './style.scss'
import ProjectCard from '../../components/ProjectCard';
import Background from '~/components/Background';

const PortfolioDev: React.FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
 
  useEffect(() => {
    document.title = title
  })

  return (
    <SmoothScroll offset>
      <div className='page portfolio-dev' data-testid='page-portfolio-dev'>
        <div className="section__group">
          <Background />   
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
                  <img height={100} src={require('../../assets/icons/flutter.png')} alt="Vue js framework javascript"/>
                  <p>Flutter</p>
                </li>
                <li>
                  <img height={100} src={require('../../assets/icons/webpack.png')} alt="Vue js framework javascript"/>
                  <p>Webpack</p>
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
                  <p className="text--indent">
                    Mon expérience de 14 années dans le domaine de l'industrie aéronautique et les divers projets personnels que 
                    j’ai pu entreprendre mon apporter des compétences que j’utilisent au quotidien. La curiosité et 
                    la créativité sont les éléments fondamentaux qui m’animent, et me poussent à exploiter tout mon 
                    potentiel pour atteindre mes objectifs.
                  </p>
                </div>
                <div className='row--col1 grow0'>
                  <img src={SoftSkillsPicture} width={500} alt="soft-skills stéphane lieumont" />
                </div>          
              </div>
            </div>
          </section>
        </div>        
        <section className='section portfolio-dev__projects'>
          <div className='section__content'>
            <h2 className='display1'>Réalisations</h2>
            <ul className="portfolio-dev__projects__list">
              {ProjectsDevData.map( (project) => (
                <li key={`project${project.id}`} className="portfolio-dev__projects__item">
                  <ProjectCard projectData={project} />
                </li>
              ))}
             </ul>
          </div>
        </section>
        <Footer />      
      </div>
    </SmoothScroll>
  );
}

export default PortfolioDev;