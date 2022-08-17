import { FunctionComponent, useEffect } from 'react';
import { PageProps } from '../../interfaces/Routes.intf';

import './style.scss'

const Error: FunctionComponent<PageProps> = ({title = 'titre de la page'}) => {
  useEffect(() => {
    document.title = title
  })

  return (
    <div className='error-page' data-testid='page-error'>
      <div className='error-page__leftside'>
        <img src={require('../../assets/gif/travolta-comfused.gif')} alt="travolta confusion page introuvable" />
      </div>
      <div className='error-page__rigthside'>
        <h2>
          <span className="not-found">404</span>
          <span>Where is the intercom ?</span>
        </h2>
      </div>
    </div>
  );
}

export default Error;