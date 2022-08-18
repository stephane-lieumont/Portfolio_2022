import { FunctionComponent, MouseEvent, useEffect, useState } from 'react';
import SmoothScroll from '~/components/SmoothScroll';
import Footer from '~/layout/Footer';
import './style.scss'
import Background from '~/components/Background';
import { PageProps } from '~/interfaces/Component.intf';
import { useNavigate, useParams } from 'react-router';
import { ProjectDevData } from '~/interfaces/Data.intf';
import { ProjectsDevData } from '~/datas/dev.projects.data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser'
import { firstLetterUpper } from '~/utils/formatString';

const ProjectWeb: FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  const params = useParams()

  const [scrollYPosition, setScrollPosition] = useState<number>(0)
  const [contentLoaded, setContentLoaded] = useState<boolean>(false)
  const [dataProject, setDataProject] = useState<ProjectDevData>()

  const navigate = useNavigate()

  useEffect(() => {
    const data = ProjectsDevData.find( item => item.hashName === params.params)
    if(!data) navigate('/page-introuvable') 
    
    setDataProject(data)

    document.title = title + ' ' + data?.title
    window.scrollTo(0,0)

    setTimeout(() => {
      setContentLoaded(true)
    }, 500);
  }, [title, params, navigate])

  const handleReturn = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <SmoothScroll offset onChanged={(value) => setScrollPosition(value)}>
      <div className='page project-web' data-testid='page-project-web'>
        <div className="section__group">
          { contentLoaded ? (
            <Background 
              ligthen
              triangleProperties = {{
                top: `${1 + (scrollYPosition / 90)}%`,
                rigth: '15%',
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
          <section className='section'>
            <div className='project section__content'>
              <div className={`project__title reveal${ contentLoaded ? ' reveal--0' : '' }`}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} className='fa-return-btn' onClick={handleReturn} />
                <h2 className={`display1`}>{ dataProject?.title }</h2>
              </div>
              <div className='project__pitch'>
                <img
                  className={`reveal${ contentLoaded ? ' reveal--1' : '' }`}
                  width="800" 
                  src={dataProject?.imgFileProject} 
                  alt={dataProject?.imgAlt}
                />
                <p className={`text--indent reveal${ contentLoaded ? ' reveal--2' : '' }`}>
                  { parse(dataProject?.description ?? '') }
                </p>
              </div>
              <div className='project__release'>
                <h3 className={`reveal${ contentLoaded ? ' reveal--3' : '' }`}>Réalisations</h3>
                <div className='row'>
                  <div className={`project__release__content reveal${ contentLoaded ? ' reveal--4' : '' }`}>
                    <p>{ parse(dataProject?.mission ?? '') } :</p>
                    <ul className='list-style'>
                      { dataProject?.missionSteps.map((item, index) => (
                        <li key={`mision-${index}`}>{ parse(item) }</li>
                      ))}
                    </ul>
                  </div>
                  <ul className={`icon-custom__list reveal${ contentLoaded ? ' reveal--4' : '' }`}>
                    { dataProject?.technos.map((item, index) => (
                      <li key={`techno-${index}`} className="icon-custom"><i className={`icon-custom__container icon-custom--${ item } }`}></i><span>{firstLetterUpper(item)}</span></li>
                    ))}
                  </ul>
                </div>
              </div>              
            </div>
          </section>
        </div>        
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default ProjectWeb;