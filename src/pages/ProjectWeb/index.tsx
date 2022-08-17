import { FunctionComponent, useEffect, useState } from 'react';
import SmoothScroll from '~/components/SmoothScroll';
import Footer from '~/layout/Footer';
import './style.scss'
import Background from '~/components/Background';
import { PageProps } from '~/interfaces/Component.intf';

const ProjectWeb: FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  const [scrollYPosition, setScrollPosition] = useState<number>(0)
  const [contentLoaded, setContentLoaded] = useState<boolean>(false)

  useEffect(() => {
    document.title = title

    setTimeout(() => {
      setContentLoaded(true)
    }, 500);
  })

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
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}

export default ProjectWeb;