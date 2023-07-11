import React from 'react';
import scss from './Button.module.scss';

interface props {
  children: any;
  variant: 'primary' | 'secondary' | 'noBorder' | 'search';
  onClick?: undefined | any;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

// variants : primary - secondary - noBorder

const Button: React.FC<props> = ({ children, variant, onClick, style, type }) => {
  return (
    <button className={scss[`button--${variant}`]} onClick={onClick} style={style} type={type}>
      {children}
    </button>
  );
};

export default Button;
