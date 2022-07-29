import React, { useEffect } from 'react';
import Button from '../../components/Button';
import { PageProps } from '../../interfaces/Routes.intf';

import './style.scss'



const Home: React.FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  useEffect(() => {
    document.title = title
  })

  return (
    <div className='homepage' data-testid='page-home'>
      <div className='homepage__leftside'>
        <div className='homepage__leftside__content'>
          <h2 className='homepage__leftside__content__title'>Developpeur Frontend & <span>Graphiste 3D</span></h2>
          <p>Captivé par les nouvelles technologies depuis 2006, ma curiosité m’a amené à découvrir le développement informatique et le graphisme 3D.</p>
          <div className='homepage__leftside__content__nav'>
            <Button label='profil dev' />
            <Button label="profil 3D" outlined />
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