import React from 'react';
import { faCheckCircle, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonProps } from '~/interfaces/component.intf';

import './style.scss';

const Button: React.FunctionComponent<ButtonProps> = ({
    label = 'label',
    outlined,
    loading,
    valid,
    white,
    downloaded = false,
    downloadIcon = false,
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
        ${ downloaded ? ' button--downloaded' : ''} 
        ${ className ?? ''}`}
    >
      { valid && <i><FontAwesomeIcon icon={faCheckCircle} /></i> }
      { downloadIcon && <i><FontAwesomeIcon icon={faDownload} /></i> }
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
        ${ downloaded ? ' button--downloaded' : ''} 
        ${ className ?? ''}`} 
      onClick={onClick}
    >
      { valid && <i><FontAwesomeIcon icon={faCheckCircle} /></i> }
      { downloadIcon && <i><FontAwesomeIcon icon={faDownload} /></i> }
      {label}
    </button>
  );
}

export default Button;
