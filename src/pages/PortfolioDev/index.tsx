import { FunctionComponent, useEffect, useRef, useState } from 'react';
import SmoothScroll from '~/components/SmoothScroll';
import Footer from '~/layout/Footer';
import SoftSkillsPicture from '~/assets/pictures/softskills-illustration.svg'
import { ProjectsDevData, SpecialitiesDevData } from '~/datas/dev.projects.data';
import './style.scss'
import ProjectCard from '~/components/ProjectCard';
import Background from '~/components/Background';
import useWindowSize from '~/hooks/useWindowsSize';
import { SpecialityData } from '~/interfaces/Data.intf';
import { firstLetterUpper } from '~/utils/formatString';
import { Link } from 'react-router-dom';
import { PageProps } from '~/interfaces/Component.intf';

const PortfolioDev: FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  const specialities: SpecialityData[] = SpecialitiesDevData

  const [scrollYPosition, setScrollPosition] = useState<number>(0)
  const [appearSectionProjects, setAppearSectionProjects] = useState<boolean>(false)
  const [appearSectionSoftSkills, setAppearSectionSoftSkills] = useState<boolean>()
  const [appearSectionSpecialities, setAppearSectionSpecialities] = useState<boolean>()
  const [contentLoaded, setContentLoaded] = useState<boolean>(false)

  const sectionProject = useRef<HTMLDivElement>(null)
  const sectionSpecialities = useRef<HTMLDivElement>(null)
  const sectionSoftSkills = useRef<HTMLDivElement>(null)
  const windowSize = useWindowSize();

  useEffect(() => {
    document.title = title
    window.scrollTo(0,0)

    setTimeout(() => {
      setContentLoaded(true)
    }, 500);
  }, [title])

  useEffect(() => {
    const offsetApear = windowSize.height * 0.6;

    const revealSectionSpecialities = scrollYPosition >= sectionSpecialities.current!.offsetTop - windowSize.height + 300    
    const revealSectionSoftSkills = scrollYPosition >= sectionSoftSkills.current!.offsetTop - windowSize.height + 300
    const revealSectionProjects = scrollYPosition >= sectionProject.current!.offsetTop - windowSize.height + offsetApear

    if(!appearSectionSpecialities) setAppearSectionSpecialities(revealSectionSpecialities)
    if(!appearSectionSoftSkills) setAppearSectionSoftSkills(revealSectionSoftSkills)
    setAppearSectionProjects(revealSectionProjects)

  }, [scrollYPosition, windowSize, appearSectionSpecialities, appearSectionSoftSkills])

  return (
    <SmoothScroll offset onChanged={(value) => setScrollPosition(value)}>
      <div className='page portfolio-dev' data-testid='page-portfolio-dev'>
        <div className="section__group">
          { contentLoaded ? (
            <Background 
              ligthen
              triangleProperties = {{
                top: `${1 + (scrollYPosition / 90)}%`,
                rigth: '45%',
                rotate: '260deg',
                size: '120px',
                delayAnimation: 0
              }}
              pointsProperties = {{
                top: `${80 - (scrollYPosition / 60)}%`,
                left: '90%',
                rotate: '145deg',
                size: '300px',
                delayAnimation:150
              }}
              circleProperties = {{
                top: `${85 - (scrollYPosition / 50)}%`,
                rigth: '90%',
                size: '350px',
                delayAnimation: 300
              }}
            />  
          ) : null } 
          <section ref={sectionSpecialities} className='section portfolio-dev__specialities'>          
            <div className='section__content'>            
              <h2 className={`display1 reveal${ appearSectionSpecialities && contentLoaded ? ' reveal--0' : '' }`}>Spécialités</h2>
              <ul className='specialities'>
                { specialities.map((speciality, index) => (
                  <li key={`speciality-${index}`} className={`specialities__item${ appearSectionSpecialities  && contentLoaded  ? ` specialities__item__reveal--${index}` : ''}`}>
                    <img height={speciality.size} src={speciality.src} alt={speciality.alt} />
                    <p>{ firstLetterUpper(speciality.name) }</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section ref={sectionSoftSkills} className='section portfolio-dev__softskills'>
            <div className='section__content'>
              <h2 className={`display1 reveal${ appearSectionSoftSkills && contentLoaded ? ' reveal--0' : '' }`}>Compétences transverses</h2>
              <div className='row'>
                <div className={`row--col1 reveal${ appearSectionSoftSkills && contentLoaded ? ' reveal--1' : '' }`}>
                  <h3>Autonomie et curiosité</h3>
                  <p className="text--indent">
                    Mon expérience de 14 années dans le domaine de l'industrie aéronautique et les divers projets personnels que 
                    j’ai pu entreprendre mon apporter des compétences que j’utilisent au quotidien. La curiosité et 
                    la créativité sont les éléments fondamentaux qui m’animent, et me poussent à exploiter tout mon 
                    potentiel pour atteindre mes objectifs.
                  </p>
                </div>
                <div className={`row--col1 grow0 reveal${ appearSectionSoftSkills && contentLoaded ? ' reveal--2' : '' }`}>
                  <img src={SoftSkillsPicture} width={500} alt="soft-skills stéphane lieumont" />
                </div>          
              </div>
            </div>
          </section>
        </div>        
        <section ref={sectionProject} className='section portfolio-dev__projects'>
          <div className='section__content'>
            <h2 className={`display1 reveal${ appearSectionProjects && contentLoaded ? ' reveal--0' : '' }`}>Réalisations</h2>
            <ul className="portfolio-dev__projects__list">
              {ProjectsDevData.map( (project, index) => (
                <Link className="portfolio-dev__projects__item" key={`${project.id}`} to={`${project.hashName}`}>
                  <li><ProjectCard projectData={project} className={appearSectionProjects ? `project-card-container__reveal--${index}` : `project-card-container__hide--${index}`} /></li>
                </Link>
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