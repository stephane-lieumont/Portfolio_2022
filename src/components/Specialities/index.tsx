import React from 'react';
import { SpecialityData } from '~/interfaces/data.intf';
import { firstLetterUpper } from '~/utils/formatString';
import './style.scss';


type SpecialitiesProps = {
  specialities?: SpecialityData[],
  contentLoaded?: boolean
}


const Specialities: React.FunctionComponent<SpecialitiesProps> = ({ specialities = [], contentLoaded = false }) => {
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
