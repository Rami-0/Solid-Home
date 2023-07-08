import React from 'react';
import scss from './DiscountCard.module.scss';
import { Cards } from '../types/types';

const DiscountCard: React.FC<Cards> = ({ company, info, date, title, logo, cash }) => {
  return (
    <div className={scss['card']}>
      <div className={scss['about_block']}>
        <p>{company}</p>
        <h4>{info}</h4>
        <h5>{date}</h5>
        <p>{title}</p>
      </div>
      <div className={scss['logo_block']}>
        <div>
          <img src={logo} alt="avangard logo" />
        </div>
        <p>{cash}</p>
      </div>
    </div>
  );
};

export default DiscountCard;
