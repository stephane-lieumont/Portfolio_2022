import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Button';
import useWindowSize from '../../hooks/useWindowsSize';
import { PageProps } from '../../interfaces/Routes.intf';
import RoutesApp from '../../routes/Routes.app';

import './style.scss'



const Home: React.FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  const currentPage = useRef<HTMLDivElement>(null)
  const windowSize = useWindowSize()
  const navigate = useNavigate()

  const portfolioDevPath = RoutesApp.getRouteByName('dev')!.path
  const portfolioCgiPath = RoutesApp.getRouteByName('cgi')!.path

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    document.body.style.height = `${ currentPage.current?.getBoundingClientRect().height }px`
  }, [windowSize.height]);



  return (
    <div ref={currentPage} className='homepage' data-testid='page-home'>
      <div className='homepage__blockquote'>
        <blockquote>
          <p><FontAwesomeIcon size='xs' icon={faQuoteLeft} className="quote" /> La passion est un désir qui se mue en plaisir <FontAwesomeIcon size='xs'icon={faQuoteRight} className="quote" /></p>
          <small>Romain Guilleaumes</small>
        </blockquote>
      </div>   
      <div className='homepage__leftside'>
        <div className='homepage__leftside__content'>
          <h2 className='homepage__leftside__content__title'>Developpeur Frontend & <span>Graphiste 3D</span></h2>
          <p>Captivé par les nouvelles technologies depuis 2006, ma curiosité m’a amené à découvrir le développement informatique et le graphisme 3D.</p>
          <div className='homepage__leftside__content__nav'>
            <Button label='profil dev' onClick={() => navigate(portfolioDevPath)} />
            <Button label="profil 3D" outlined onClick={() => navigate(portfolioCgiPath)} />
          </div>
        </div>
      </div>
      <div className='homepage__rigthside'>
        <div className='homepage__rigthside__demo-real'></div>
        <img width={600} height={470} src={require('../../assets/profile/profil-stephane-lieumont.png')} alt='profil stéphane lieumont' />
      </div>
    </div>
  );
}

export default Home;