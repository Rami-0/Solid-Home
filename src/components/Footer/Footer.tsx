import React from 'react';
import scss from './Footer.module.scss';
import logo__blue from '../../assets/Logo--blue.svg';
import app_store from './assets/app-store-badge.png';
import google_play from './assets/google-play-badge.png';
import { APPSTORE_LINK, PLAYSTORE_LINK } from '../../constants/App_Links';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('Footer');
  const rent_items = [
    { translate: '1', link: '/' },
    { translate: '2', link: '/' },
    { translate: '3', link: '/' },
    { translate: '4', link: '/' },
    { translate: '5', link: '/' },
    { translate: '6', link: '/' },
    { translate: '7', link: '/' }
  ];
  const buy_items = [
    { translate: '1', link: '/' },
    { translate: '2', link: '/' },
    { translate: '3', link: '/' },
    { translate: '4', link: '/' },
    { translate: '5', link: '/' },
    { translate: '6', link: '/' },
    { translate: '7', link: '/' },
    { translate: '8', link: '/' }
  ];
  const sell_items = [
    { translate: '1', link: '/' },
    { translate: '2', link: '/' },
    { translate: '3', link: '/' }
  ];

  return (
    <section className={scss['footer']}>
      <main className={scss['footer__main'] + ' container'}>
        <div className={scss['footer__main__wrapper--1']}>
          <span className={scss['footer__main__wrapper--1--description']}>
            <img src={logo__blue} alt="logo" />
            <p className="Subtitle--2--footer">{t('info')}</p>
          </span>
          <span className={scss['footer__main__wrapper--1--storeBadgets']}>
            <a href={APPSTORE_LINK} rel="noreferrer" target="_blank">
              <img src={app_store} alt="app_store_badeg" />
            </a>
            <a href={PLAYSTORE_LINK} rel="noreferrer" target="_blank">
              <img src={google_play} alt="google_store_badeg" />
            </a>
          </span>
        </div>

        <div className={scss['footer__main__wrapper--2']}>
          <span className={scss['footer__main__wrapper--2--title']}>
            <h6 className="titleFooter--1">Аренда</h6>
          </span>
          <hr className="divider" />
          <span className={scss['footer__main__wrapper--2--links']}>
            {rent_items.map(({ translate, link }, index) => (
              <a
                key={index}
                className={scss['link'] + ' Subtitle--1--footer'}
                style={{ color: 'var(--blue)' }}>
                {t(`rent_items.${translate}`)}
              </a>
            ))}
          </span>
        </div>

        <div className={scss['footer__main__wrapper--2']}>
          <span className={scss['footer__main__wrapper--2--title']}>
            <h6 className="titleFooter--1">Покупка</h6>
          </span>
          <hr className="divider" />
          <span className={scss['footer__main__wrapper--2--links']}>
            {buy_items.map(({ translate, link }, index) => (
              <a
                key={index}
                className={scss['link'] + ' Subtitle--1--footer'}
                style={{ color: 'var(--blue)' }}>
                {t(`buy_items.${translate}`)}
              </a>
            ))}
          </span>
        </div>

        <div className={scss['footer__main__wrapper--2']}>
          <span className={scss['footer__main__wrapper--2--title']}>
            <h6 className="titleFooter--1">Продажа</h6>
          </span>
          <hr className="divider" />
          <span className={scss['footer__main__wrapper--2--links']}>
            {sell_items.map(({ translate, link }, index) => (
              <a
                key={index}
                className={scss['link'] + ' Subtitle--1--footer'}
                style={{ color: 'var(--blue)' }}>
                {t(`sell_items.${translate}`)}
              </a>
            ))}
          </span>
        </div>
      </main>

      <div className={scss['footer__creds'] + ' container'}>
        <p className="Subtitle--3--footer">©2023 SolidHome. {t('rights')}</p>
      </div>
    </section>
  );
};

export default Footer;
