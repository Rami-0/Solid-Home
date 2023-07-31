import React from 'react';
import { Link } from 'react-router-dom';
import { BuildingsCard } from '../../types/types';
import scss from './BuildingCard.module.scss';
import { useTranslation } from 'react-i18next';

const BuildingCard: React.FC<BuildingsCard> = ({
  logo,
  house,
  companyName,
  description,
  pathCompany
}) => {
  const { t } = useTranslation(['Building']);
  return (
    <div className={scss['card_container']}>
      <div className={scss['pic_card']}>
        <img className={scss['card_logo']} src={logo} alt="logotype" />
        <img className={scss['card_img']} src={house} alt="House img" />
      </div>
      <div className={scss['about_card']}>
        <h2>{companyName}</h2>
        <p>{description}</p>
        <Link to={pathCompany} className={scss['about_link']}>
          {t('Building.sait')}
        </Link>
      </div>
    </div>
  );
};

export default BuildingCard;
