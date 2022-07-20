import React, { useEffect } from 'react';
import { PageProps } from '../../interfaces/Routes.intf';

import './style.scss'

const Error: React.FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  useEffect(() => {
    document.title = title
  })

  return (
    <section data-testid='page-error'>
    </section>
  );
}

export default Error;