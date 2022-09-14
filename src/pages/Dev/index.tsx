import { FunctionComponent, useEffect, useRef, useState } from 'react';
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
import useScrollPosition from '~/hooks/useScrollPosition';
import { useAppSelector } from '~/store/main.store';

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
    const offsetApear = windowSize.height * 0.6;
    const revealSectionSpecialities = scrollPosition >= sectionSpecialities.current!.offsetTop - windowSize.height + 300    
    const revealSectionSoftSkills = scrollPosition >= sectionSoftSkills.current!.offsetTop - windowSize.height + 300
    const revealSectionProjects = scrollPosition >= sectionProject.current!.offsetTop - windowSize.height + offsetApear

    if(!appearSectionSpecialities) setAppearSectionSpecialities(revealSectionSpecialities)
    if(!appearSectionSoftSkills) setAppearSectionSoftSkills(revealSectionSoftSkills)
    setAppearSectionProjects(revealSectionProjects)

  }, [scrollPosition, windowSize, appearSectionSpecialities, appearSectionSoftSkills])

  return (
      <div className='page portfolio-dev' style={{ paddingTop: headerheigth + 'px' }} data-testid='page-portfolio-dev'>
        <section>
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
          <div ref={sectionSpecialities} className='portfolio-dev__specialities'>           
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
          <div ref={sectionSoftSkills} className='portfolio-dev__softskills'> 
            <h2 className={`display1 reveal${ appearSectionSoftSkills && contentLoaded ? ' reveal--0' : '' }`}>Compétences transverses</h2>
            <div className='portfolio-dev__softskills__container'>
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
          </div>
        </section>        
        <section ref={sectionProject} className='portfolio-dev__projects'>
          <h2 className={`display1 reveal${ appearSectionProjects && contentLoaded ? ' reveal--0' : '' }`}>Réalisations</h2>
          <ul className="portfolio-dev__projects__list">
            {ProjectsDevData.map( (project, index) => (
              <Link className="portfolio-dev__projects__item" key={`${project.id}`} to={`${project.hashName}`} onClick={() => { window.scrollTo(0,0) }}>
                <li><ProjectCard projectData={project} className={appearSectionProjects ? `project-card-container__reveal--${index}` : `project-card-container__hide--${index}`} /></li>
              </Link>
            ))}
          </ul>
        </section>
        <Footer />
      </div>
  );
}

export default Dev;