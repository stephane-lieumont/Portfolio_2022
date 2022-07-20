import React, { useEffect } from 'react';
import { PageProps } from '../../interfaces/Routes.intf';

import './style.scss'



const Home: React.FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  useEffect(() => {
    document.title = title
  })

  return (
    <section data-testid='page-home'>
    </section>
  );
}

export default Home;