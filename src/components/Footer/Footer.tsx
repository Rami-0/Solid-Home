import React from 'react';
import scss from './Footer.module.scss';
import logo__blue from '../../assets/Logo--blue.svg';
import app_store from './assets/app-store-badge.png';
import google_play from './assets/google-play-badge.png';
import { APPSTORE_LINK, PLAYSTORE_LINK } from '../../constants/App_Links';

const Footer: React.FC = () => {
  const rent_items = [
    'Комнаты',
    'Квартиры',
    'Дома',
    'Участка',
    'Коммерческая',
    'Посуточная аренда',
    'Все объявления об аренде'
  ];

  const buy_items = [
    'Квартиры',
    'Новостройки',
    'Дома',
    'Участка',
    'Коммерческая',
    'Купить от собственника',
    'Купить от риелтора',
    'Все объявления'
  ];

  const sell_items = ['Мои объявления', 'Руководство для продавцов', 'Найти риелтора'];

  return (
    <section className={scss['footer']}>
      <main className={scss['footer__main'] + ' container'}>
        <div className={scss['footer__main__wrapper--1']}>
          <span className={scss['footer__main__wrapper--1--description']}>
            <img src={logo__blue} alt="logo" />
            <p className="Subtitle--2--footer">
              Добро пожаловать на SolidHome - сайт по покупке, аренде и продаже недвижимости в
              Кыргызстане! Наша платформа предлагает широкий спектр возможностей для тех, кто
              заинтересован в покупке, аренде или продаже недвижимости в этой прекрасной стране.
              Если вы ищете уютную квартиру в центре Бишкека или просторную виллу в пригороде, у нас
              есть из чего выбрать.
            </p>
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
            {rent_items.map((item, index) => (
              <p
                key={index}
                className={scss['link'] + ' Subtitle--1--footer'}
                style={{ color: 'var(--blue)' }}>
                {item}
              </p>
            ))}
          </span>
        </div>

        <div className={scss['footer__main__wrapper--2']}>
          <span className={scss['footer__main__wrapper--2--title']}>
            <h6 className="titleFooter--1">Покупка</h6>
          </span>
          <hr className="divider" />
          <span className={scss['footer__main__wrapper--2--links']}>
            {buy_items.map((item, index) => (
              <p
                key={index}
                className={scss['link'] + ' Subtitle--1--footer'}
                style={{ color: 'var(--blue)' }}>
                {item}
              </p>
            ))}
          </span>
        </div>

        <div className={scss['footer__main__wrapper--2']}>
          <span className={scss['footer__main__wrapper--2--title']}>
            <h6 className="titleFooter--1">Продажа</h6>
          </span>
          <hr className="divider" />
          <span className={scss['footer__main__wrapper--2--links']}>
            {sell_items.map((item, index) => (
              <p
                key={index}
                className={scss['link'] + ' Subtitle--1--footer'}
                style={{ color: 'var(--blue)' }}>
                {item}
              </p>
            ))}
          </span>
        </div>
      </main>

      <div className={scss['footer__creds'] + ' container'}>
        <p className="Subtitle--3--footer">©2023 SolidHome. Все права защищены</p>
      </div>
    </section>
  );
};

export default Footer;
