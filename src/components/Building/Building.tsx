import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import path from './assets/path.svg';
import scss from './Building.module.scss';
import { building_cards_data } from '../../constants/BuildingCards';
import BuildingCard from '../BuildingCard/BuildingCard';
import { useTranslation } from 'react-i18next';

const Building: React.FC = () => {
  const { t } = useTranslation(['Building']);
  const renderBuldingCard = useMemo(
    () =>
      building_cards_data.map((building_cards, index) => (
        <BuildingCard key={index} {...building_cards} />
      )),
    [building_cards_data]
  );
  return (
    <div className={scss['building']}>
      <div className={scss['container']}>
        <div className={scss['header_building']}>
          <h1>{t('Building.company')}</h1>
          <Link className={scss['building_link']} to={'/Developers'}>
            {t('Building.more')} <img src={path} alt="blue arrow" />
          </Link>
        </div>
        <div className={scss['card']}>{renderBuldingCard}</div>
      </div>
    </div>
  );
};

export default Building;
