import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Background from '~/components/Background';
import Button from '~/components/Button';
import useWindowSize from '~/hooks/useWindowsSize';
import { PageProps } from '~/interfaces/Component.intf';
import RoutesApp from '~/routes/Routes.app';

import './style.scss'


const Home: FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  const currentPage = useRef<HTMLDivElement>(null)
  const windowSize = useWindowSize()
  const navigate = useNavigate()

  const portfolioDevPath = RoutesApp.getRouteByName('dev')!.path
  const portfolioCgiPath = RoutesApp.getRouteByName('cgi')!.path

  const [contentLoaded, setContentLoaded] = useState<boolean>(false)

  useEffect(() => {
    document.title = title
    window.scrollTo(0,0)

    setTimeout(() => {
      setContentLoaded(true)
    }, 500);
  }, [title])



  useEffect(() => {
    document.body.style.height = `${ currentPage.current?.getBoundingClientRect().height }px`
  }, [windowSize.height]);

  return (
    <div ref={currentPage} className={`homepage${ !contentLoaded ? ' homepage--loading' : ''}`} data-testid='page-home'>      
      <div className='homepage__blockquote'>
        <blockquote>
          <p><FontAwesomeIcon size='xs' icon={faQuoteLeft} className="quote" /> La passion est un désir qui se mue en plaisir <FontAwesomeIcon size='xs'icon={faQuoteRight} className="quote" /></p>
          <small>Romain Guilleaumes</small>
        </blockquote>
      </div>   
      <div className='homepage__leftside'>
        { contentLoaded ? (
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
        ) : null}
        <div className='homepage__leftside__content'>
          <h2 className={`homepage__leftside__content__title reveal${ contentLoaded ? ' reveal--3' : ''}`}>Developpeur Frontend & <span>Graphiste 3D</span></h2>
          <p className={`reveal${ contentLoaded ? ' reveal--4' : ''}`}>Captivé par les nouvelles technologies depuis 2006, ma curiosité m’a amené à découvrir le développement informatique et le graphisme 3D.</p>
          <div className='homepage__leftside__content__nav'>
            <div className={`reveal${ contentLoaded ? ' reveal--5' : ''}`}>
              <Button label='profil dev' onClick={() => navigate(portfolioDevPath)} />
            </div>
            <div className={`reveal${ contentLoaded ? ' reveal--6' : ''}`}>
              <Button label="profil 3D" outlined onClick={() => navigate(portfolioCgiPath)} />
            </div>
          </div>
        </div>
      </div>
      <div className='homepage__rigthside'>
        { contentLoaded ? (
          <Background 
            triangle={false} 
            points={false}
            circleProperties = {{
              top: '85%',
              left: '88%',
              size: '250px',
              delayAnimation: 300
            }}        
          />
        ) : null}
        <div className='homepage__rigthside__demo-real'></div>
        <img width={600} height={470} src={require('~/assets/profile/profil-stephane-lieumont.png')} alt='profil stéphane lieumont' />
      </div>
    </div>
  );
}

export default Home;