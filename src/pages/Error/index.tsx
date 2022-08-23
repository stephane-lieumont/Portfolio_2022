import { FunctionComponent, useEffect, useState } from 'react';
import Background from '~/components/Background';
import { PageProps } from '~/interfaces/Component.intf';

import './style.scss'

const Error: FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false)

  useEffect(() => {
    document.title = title
    window.scrollTo(0,0)
  }, [title])

  return (
    <div className='error-page' data-testid='page-error'>
      <div className='error-page__leftside'>
        <Background
            ligthen
            triangleProperties = {{
              top: '20%',
              rigth: '20%',
              rotate: '260deg',
              size: '150px',
              delayAnimation: 0
            }}
            pointsProperties = {{
              top: '80%',
              left: '70%',
              rotate: '145deg',
              size: '400px',
              delayAnimation:150
            }}
            circleProperties = {{
              top: '85%',
              rigth: '80%',
              size: '350px',
              delayAnimation: 300
            }}
          />
        <img className={!imgLoaded ? 'loading' : '' } onLoad={() => setImgLoaded(true)} src={require('~/assets/gif/travolta-comfused.gif')} alt="travolta confusion page introuvable" />
      </div>
      <div className='error-page__rigthside'>
        <Background 
          triangleProperties = {{
            top: '80%',
            rigth: '60%',
            rotate: '260deg',
            size: '150px',
            delayAnimation: 0
          }}
          pointsProperties = {{
            top: '20%',
            left: '70%',
            rotate: '145deg',
            size: '400px',
            delayAnimation:150
          }}
          circleProperties = {{
            top: '5%',
            rigth: '88%',
            size: '250px',
            delayAnimation: 300
          }}  
        />
        <h2>
          <span className="not-found">404</span>
          <span>Where is the intercom ?</span>
        </h2>
      </div>
    </div>
  );
}

export default Error;