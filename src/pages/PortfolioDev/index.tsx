import { FunctionComponent, useEffect, useRef, useState } from 'react';
import SmoothScroll from '../../components/SmoothScroll';
import { PageProps } from '../../interfaces/Routes.intf';
import Footer from '../../layout/Footer';
import SoftSkillsPicture from '../../assets/pictures/softskills-illustration.svg'
import { ProjectsDevData } from '../../__mock__/data/dev.projects.data';
import './style.scss'
import ProjectCard from '../../components/ProjectCard';
import Background from '~/components/Background';
import useWindowSize from '~/hooks/useWindowsSize';

const PortfolioDev: FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  const [scrollYPosition, setScrollPosition] = useState<number>(0)
  const [appearSectionProjects, setAppearSectionProjects] = useState(false)
  const sectionProject = useRef<HTMLDivElement>(null)
  const windowSize = useWindowSize();

  useEffect(() => {
    document.title = title
  })

  useEffect(() => {
    const offsetApear = windowSize.height * 0.6;
    const appearSection = scrollYPosition >= sectionProject.current!.offsetTop - windowSize.height + offsetApear
    setAppearSectionProjects(appearSection)
  }, [scrollYPosition, windowSize])

  return (
    <SmoothScroll offset onChanged={(value) => setScrollPosition(value)}>
      <div className='page portfolio-dev' data-testid='page-portfolio-dev'>
        <div className="section__group">
          <Background 
            ligthen
            triangleProperties = {{
              top: '00%',
              rigth: '45%',
              rotate: '260deg',
              size: '150px',
              delayAnimation: 0
            }}
            pointsProperties = {{
              top: '80%',
              left: '90%',
              rotate: '145deg',
              size: '300px',
              delayAnimation:150
            }}
            circleProperties = {{
              top: '85%',
              rigth: '90%',
              size: '350px',
              delayAnimation: 300
            }}
          />   
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
        <section ref={sectionProject} className='section portfolio-dev__projects'>
          <div className='section__content'>
            <h2 className='display1'>Réalisations</h2>
            <ul className="portfolio-dev__projects__list">
              {ProjectsDevData.map( (project, index) => (
                <li key={`project${project.id}`} className="portfolio-dev__projects__item">
                  <ProjectCard projectData={project} className={appearSectionProjects ? `project-card-container__reveal--${index}` : `project-card-container__hide--${index}`} />
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