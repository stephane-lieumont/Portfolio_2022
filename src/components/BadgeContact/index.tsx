import { FunctionComponent } from 'react';
import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BadgeContactProps } from '~/interfaces/component.intf';

import './style.scss';

const BadgeContact: FunctionComponent<BadgeContactProps> = ({ className = '' }) => {  
  return (
    <ul className={`badge-contact ${ className }`} data-testid='badge-contact'>
      <li><FontAwesomeIcon icon={faPhone} className={'fa-icon'}/> 06.37.35.35.79</li>
      <li><FontAwesomeIcon icon={faLocation} className={'fa-icon'}/> 31470 Fontenilles, FRANCE</li>
    </ul>
  );
}

export default BadgeContact;
