import React from 'react';
import scss from './Button.module.scss';

interface props {
  children: any;
  variant: 'primary' | 'secondary' | 'noBorder';
  onClick?: undefined | any;
  style?: React.CSSProperties;
}

// variants : primary - secondary - noBorder

const Button: React.FC<props> = ({ children, variant, onClick, style }) => {
  return (
    <button className={scss[`button--${variant}`]} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
