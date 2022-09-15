import React from 'react';
import { ButtonProps } from '~/interfaces/Component.intf';
import './style.scss';


const Button: React.FunctionComponent<ButtonProps> = ({
    label = 'label',
    outlined,
    white,
    className,
    onClick = () => {}
  }) => {
  
  return (
    <button className={`button${ outlined ? ' button--outlined' : ''}${ white ? ' button--white' : ''} ${ className ?? '' }`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
