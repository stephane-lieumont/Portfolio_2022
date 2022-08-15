import React from 'react';
import './style.scss';

type ButtonProps = {
  label?: string
  outlined?: boolean
  white?:boolean
  className?:string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FunctionComponent<ButtonProps> = ({
    label = 'label',
    outlined,
    white,
    className,
    onClick = () => {}
  }) => {
  
  return (
    <button className={`button${ outlined ? ' button--outlined' : ''}${ white ? ' button--white' : ''} ${ className }`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
