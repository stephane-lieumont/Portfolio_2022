import { FunctionComponent, useEffect, useState } from 'react';
import SmoothScroll from '~/components/SmoothScroll';
import Footer from '~/layout/Footer';
import './style.scss'
import Background from '~/components/Background';
import { PageProps } from '~/interfaces/Component.intf';
import { useNavigate, useParams } from 'react-router';
import { ProjectDevData } from '~/interfaces/Data.intf';
import { ProjectsDevData } from '~/datas/dev.projects.data';

const ProjectWeb: FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  const params = useParams()  

  const [scrollYPosition, setScrollPosition] = useState<number>(0)
  const [contentLoaded, setContentLoaded] = useState<boolean>(false)
  const [dataProject, setDataProjet] = useState<ProjectDevData>()

  const navigate = useNavigate()

  useEffect(() => {
    const data = ProjectsDevData.find( item => item.hashName === params.params)
    !data ? navigate('/page-introuvable') : setDataProjet(data)

    document.title = title + ' ' + data?.title
    window.scrollTo(0,0)

    setTimeout(() => {
      setContentLoaded(true)
    }, 500);
  }, [title, params, navigate])

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
              <h2 className={`display1 reveal${ contentLoaded ? ' reveal--0' : '' }`}>{ dataProject?.title }</h2>
              <div className='project__pitch'>
                <img
                  className={`reveal${ contentLoaded ? ' reveal--1' : '' }`}
                  width="800" 
                  src={dataProject?.imgFileProject} 
                  alt={dataProject?.imgAlt}
                />
                <p className={`text--indent reveal${ contentLoaded ? ' reveal--2' : '' }`}>
                  Case Tes Potes veut casser les codes des sites de rencontre en mettant 
                  l'amitié au cœur de l'amour pour faciliter les rencontres et accompagner 
                  les célibataires de la recherche de profils à l'organisation de la première 
                  rencontre. Ces dernier·ères n'ont plus qu'à se laisser guider et faire confiance 
                  à leur meilleur·e ami·e "Caseur" / "Caseuse".
                </p>
              </div>
              <div className='project__release'>
                <h3 className={`reveal${ contentLoaded ? ' reveal--3' : '' }`}>Réalisations</h3>
                <div className='row'>
                  <div className={`project__release__content reveal${ contentLoaded ? ' reveal--4' : '' }`}>
                    <p>
                      Mon rôle en tant que co-fondateur et lead developpeur était de réaliser une application avec les fonctionnalités essentiels pour tester le produit sur le marché :                
                    </p>
                    <ul className='list-style'>
                      <li>Etude et définition des <strong>Users Stories</strong></li>
                      <li>Mise en place d'une <strong>Roadmap produit</strong></li>
                      <li>Réalisation d'un maquette interactive sous <strong>AdobeXD</strong></li>
                      <li><strong>Gestion du projet</strong> avec une équipe de deux developpeurs</li>
                      <li>Developpement d'une application avec <strong>Flutter</strong></li>
                    </ul>
                  </div>                
                  <ul className={`project__release__techno reveal${ contentLoaded ? ' reveal--4' : '' }`}>
                    <li>Flutter</li>
                    <li>AdobeXD</li>
                    <li>Illustrator</li>
                    <li>Git</li>
                    <li>Confluence</li>
                    <li>Jira</li>
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