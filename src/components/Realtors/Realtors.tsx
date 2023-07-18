import React, { useMemo } from 'react';
import scss from './Realtors.module.scss';
import { Link } from 'react-router-dom';
import path from '../Building/assets/path.svg';
import { RealtorsCards } from '../../constants/Realtors';
import RealtorCard from '../RealtorCard/RealtorCard';
import { useTranslation } from 'react-i18next';

const Realtors: React.FC = () => {
  const { t } = useTranslation(['Realtors']);
  const renderRealtor = useMemo(
    () => RealtorsCards.map((realtor, index) => <RealtorCard key={index} {...realtor} />),
    [RealtorsCards]
  );
  return (
    <div className={scss['realtors']}>
      <div className={scss['container']}>
        <div className={scss['header_realtors']}>
          <h1>{t('Realtors.realtor')}</h1>
          <Link className={scss['realtors_link']} to={'/Realtors'}>
            {t('Realtors.more')} <img src={path} alt="blue arrow" />
          </Link>
        </div>
        <div className={scss['realtor']}>{renderRealtor}</div>
      </div>
    </div>
  );
};

export default Realtors;
