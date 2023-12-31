import React from 'react';
import scss from './Servise.module.scss';
import { Link } from 'react-router-dom';
import arenda from './assets/arenda.png';
import prodaja from './assets/prodaja.png';
import pokupka from './assets/pokupka.png';
import { useTranslation } from 'react-i18next';
import Button from './../Button/Button';

const Servise: React.FC = () => {
  const { t } = useTranslation(['Servise']);
  return (
    <div className={scss['servise']}>
      <div className="container">
        <h1>{t('Servise.servise')}</h1>
        <div className={scss['servise_content']}>
          <div className={scss['content']}>
            <img src={arenda} alt="" />
            <div className={scss['about_content']}>
              <h2>{t('Servise.Rent')}</h2>
              <p>{t('Servise.Description')}</p>
              <Button variant="secondary">
                <Link to={'/Rent'}>{t('Servise.Search')}</Link>
              </Button>
            </div>
          </div>
          <div className={scss['content']}>
            <img src={prodaja} alt="" />
            <div className={scss['about_content']}>
              <h2>{t('Servise.Sell')}</h2>
              <p>{t('Servise.Description')}</p>
              <Button variant="secondary">
                <Link to={'/Sale'}>{t('Servise.Place')}</Link>
              </Button>
            </div>
          </div>
          <div className={scss['content']}>
            <img src={pokupka} alt="" />
            <div className={scss['about_content']}>
              <h2>{t('Servise.Purchase')}</h2>
              <p>{t('Servise.Description')}</p>
              <Button variant="secondary">
                <Link to={'/Purchase'}>{t('Servise.View')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servise;
