import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SoftSkillsPicture from '~/assets/pictures/softskills-illustration.svg'
import { ProjectsDevData, SpecialitiesDevData } from '~/datas/dev.projects.data';
import useWindowSize from '~/hooks/useWindowsSize';
import useScrollPosition from '~/hooks/useScrollPosition';
import { useAppSelector } from '~/store/main.store';
import Footer from '~/layout/Footer';
import ProjectCard from '~/components/ProjectCard';
import Background from '~/components/Background';
import Specialities from '~/components/Specialities';
import { SpecialityData } from '~/interfaces/data.intf';
import { PageProps } from '~/interfaces/component.intf';

import './style.scss'

const Dev: FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  const specialities: SpecialityData[] = SpecialitiesDevData

  const [appearSectionProjects, setAppearSectionProjects] = useState<boolean>(false)
  const [appearSectionSoftSkills, setAppearSectionSoftSkills] = useState<boolean>()
  const [appearSectionSpecialities, setAppearSectionSpecialities] = useState<boolean>()
  const [contentLoaded, setContentLoaded] = useState<boolean>(false)
  const headerheigth = useAppSelector((state) => state.layoutSlice.headerHeigth)

  const sectionProject = useRef<HTMLDivElement>(null)
  const sectionSpecialities = useRef<HTMLDivElement>(null)
  const sectionSoftSkills = useRef<HTMLDivElement>(null)
  const windowSize = useWindowSize();
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    document.title = title

    setTimeout(() => {
      setContentLoaded(true)
      window.scrollTo(0,0)
    }, 500);
  }, [title])

  useEffect(() => {
    const offsetApear = windowSize.height * 0.3;
    const revealSectionSpecialities = scrollPosition >= sectionSpecialities.current!.offsetTop - windowSize.height + 300    
    const revealSectionSoftSkills = scrollPosition >= sectionSoftSkills.current!.offsetTop - windowSize.height + 300
    const revealSectionProjects = scrollPosition >= sectionProject.current!.offsetTop - windowSize.height + offsetApear

    if(!appearSectionSpecialities) setAppearSectionSpecialities(revealSectionSpecialities)
    if(!appearSectionSoftSkills) setAppearSectionSoftSkills(revealSectionSoftSkills)
    setAppearSectionProjects(revealSectionProjects)

  }, [scrollPosition, windowSize, appearSectionSpecialities, appearSectionSoftSkills])

  return (
      <div className='page portfolio-dev' style={{ paddingTop: headerheigth + 30 + 'px' }} data-testid='dev-page'>
        <div className='page__content'>
          <div className='section__group'>
            { contentLoaded ? (
              <Background 
                ligthen
                triangleProperties = {{
                  top: `${1 + (scrollPosition / 90)}%`,
                  rigth: '45%',
                  rotate: '260deg',
                  size: '120px',
                  delayAnimation: 0
                }}
                pointsProperties = {{
                  top: `${80 - (scrollPosition / 60)}%`,
                  left: '90%',
                  rotate: '145deg',
                  size: '300px',
                  delayAnimation:150
                }}
                circleProperties = {{
                  top: `${85 - (scrollPosition / 50)}%`,
                  rigth: '90%',
                  size: '350px',
                  delayAnimation: 300
                }}
              />  
            ) : null } 
            <section ref={sectionSpecialities} className='portfolio-dev__specialities'>           
              <h2 className={`display1 reveal${ appearSectionSpecialities && contentLoaded ? ' reveal--0' : '' }`}>Spécialités</h2>
              <Specialities specialities={specialities} contentLoaded={contentLoaded} />
            </section>
            <section ref={sectionSoftSkills} className='portfolio-dev__softskills'> 
              <h2 className={`display1 reveal${ appearSectionSoftSkills && contentLoaded ? ' reveal--0' : '' }`}>Compétences transverses</h2>
              <div className='portfolio-dev__softskills__container limit-width-content'>
                <div className={`portfolio-dev__softskills__container__content reveal${ appearSectionSoftSkills && contentLoaded ? ' reveal--1' : '' }`}>
                  <h3>Autonomie et curiosité</h3>
                  <p>
                    Mon expérience de 14 années dans le domaine de l'industrie aéronautique et les divers projets personnels que 
                    j’ai pu entreprendre mon apporter des compétences que j’utilisent au quotidien. La curiosité et 
                    la créativité sont les éléments fondamentaux qui m’animent, et me poussent à exploiter tout mon 
                    potentiel pour atteindre mes objectifs.
                  </p>
                </div>
                <div className={`reveal${ appearSectionSoftSkills && contentLoaded ? ' reveal--2' : '' }`}>
                  <img src={SoftSkillsPicture} width={500} alt="soft-skills stéphane lieumont" />
                </div>          
              </div>
            </section>
          </div>        
          <section ref={sectionProject} className='portfolio-dev__projects'>
            <h2 className={`display1 reveal${ appearSectionProjects && contentLoaded ? ' reveal--0' : '' }`}>Réalisations</h2>
            <ul className="portfolio-dev__projects__list">
              {ProjectsDevData.map( (project, index) => (
                <li className="portfolio-dev__projects__item" key={`${project.id}`}>
                  <Link   to={`${project.hashName}`} onClick={() => { window.scrollTo(0,0) }}>
                    <ProjectCard projectData={project} className={appearSectionProjects ? `project-card-container__reveal--${index}` : `project-card-container__hide--${index}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <Footer />
      </div>
  );
}

export default Dev;