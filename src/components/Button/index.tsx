import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ButtonProps } from '~/interfaces/component.intf';
import './style.scss';


const Button: React.FunctionComponent<ButtonProps> = ({
    label = 'label',
    outlined,
    loading,
    valid,
    white,
    link = false,
    className,
    onClick = () => {}
  }) => {
  
  if(link) return (
    <div 
      className={
        `button
        ${ outlined ? ' button--outlined' : ''}
        ${ white ? ' button--white' : ''}
        ${ loading ? ' button--loading' : ''}
        ${ valid ? ' button--valid' : ''} 
        ${ className ?? ''}`}
    >
      { valid && <i><FontAwesomeIcon icon={faCheckCircle} /></i> }
      {label}
    </div>
  )

  return (
    <button 
      className={
        `button
        ${ outlined ? ' button--outlined' : ''}
        ${ white ? ' button--white' : ''}
        ${ loading ? ' button--loading' : ''}
        ${ valid ? ' button--valid' : ''} 
        ${ className ?? ''}`} 
      onClick={onClick}
    >
      { valid && <i><FontAwesomeIcon icon={faCheckCircle} /></i> }
      {label}
    </button>
  );
}

export default Button;
