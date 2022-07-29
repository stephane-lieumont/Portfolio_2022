import React from 'react';
import './index.scss';

type ButtonProps = {
  label?: string,
  outlined?: boolean,
  white?:boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FunctionComponent<ButtonProps> = ({
    label = 'label',
    outlined,
    white,
    onClick = () => {}
  }) => {
  
  return (
    <button className={`button${ outlined ? ' button--outlined' : ''}${ white ? ' button--white' : ''}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
