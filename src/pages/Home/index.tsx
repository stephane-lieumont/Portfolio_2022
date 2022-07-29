import React, { useEffect } from 'react';
import Button from '../../components/Button';
import { PageProps } from '../../interfaces/Routes.intf';

import './style.scss'



const Home: React.FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  useEffect(() => {
    document.title = title
  })

  return (
    <section className='homepage' data-testid='page-home'>
      <div className='homepage__leftside'>
        <h2 className='homepage__leftside__title'>Developpeur Frontend & <span>Graphiste 3D</span></h2>
        <p>Captivé par les nouvelles technologies depuis 2006, ma curiosité m’a amené à découvrir le développement informatique et le graphisme 3D.</p>
        <div className='homepage__leftside__nav'>
          <Button label='profil dev' />
          <Button label="profil 3D" outlined />
        </div>
      </div>
      <div className='homepage__rigthside'></div>
    </section>
  );
}

export default Home;