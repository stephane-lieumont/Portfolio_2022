import React, { useEffect } from 'react';
import { PageProps } from '../../interfaces/Routes.intf';

import './style.scss'

const PortfolioCGI: React.FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  useEffect(() => {
    document.title = title
  })

  return (
    <section data-testid='page-portfolio-cgi'>
    </section>
  );
}

export default PortfolioCGI;