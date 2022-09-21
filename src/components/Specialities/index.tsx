import { FunctionComponent } from 'react';
import { SpecialitiesProps } from '~/interfaces/component.intf';
import { firstLetterUpper } from '~/utils/formatString';

import './style.scss';

const Specialities: FunctionComponent<SpecialitiesProps> = ({ specialities = [], contentLoaded = false }) => {
  return (
    <ul className='specialities'>
      { specialities.map((speciality, index) => (
        <li key={`speciality-${index}`} className={`specialities__item${ contentLoaded  ? ` specialities__item__reveal--${index}` : ''}`}>
          <div className='specialities__item__picture'>
            <img height={speciality.size} src={speciality.src} alt={speciality.alt} />
          </div>          
          <p>{ firstLetterUpper(speciality.name) }</p>
        </li>
      ))}
    </ul>
  );
}

export default Specialities;
