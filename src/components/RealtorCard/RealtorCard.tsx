import React from 'react';
import scss from './RealtorCard.module.scss';
import { RealtorsData } from '../../types/types';

const RealtorCard: React.FC<RealtorsData> = ({ avatar, fullName, experience }) => {
  return (
    <div className={scss['realtor_container']}>
      <img src={avatar} alt="avatar" />
      <div className={scss['data_realtor']}>
        <h4>{fullName}</h4>
        <p>{experience}</p>
      </div>
    </div>
  );
};

export default RealtorCard;
