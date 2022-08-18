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
        </div>
        <section>

        </section>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default ProjectWeb;