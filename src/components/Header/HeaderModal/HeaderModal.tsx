import React from 'react';
import scss from './HeaderModal.module.scss';
import Add from '../assets/Add.svg';
import mailbox from '../assets/mailbox.svg';
import heart from '../assets/heart-linear.svg';
import logout from '../assets/logout.svg';
import mdi_login from '../assets/mdi_login.svg';
import map from '../assets/map.svg';
import Button from './../../Button/Button';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useCookies } from 'react-cookie';

interface props {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalLoggedIn: React.FC<props> = ({ modal, setModal }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['refresh']);
  const { isAuthenticated, Logout } = useAuth();
  const handleLogout = () => {
    Logout();
    removeCookie('refresh');
  };
  return (
    <div className={scss['modal'] + ' ' + scss[`modal--${modal}`]}>
      <span className={scss['modal--buttonWrapper']}>
        <img src={Add} alt="Add icon" />
        <p className="titleFooter--1">Разместить объявление</p>
      </span>

      <span className={scss['modal--buttonWrapper']}>
        <img src={heart} alt="heart icon" />
        <p className="titleFooter--1">Избранное</p>
      </span>
      <span className={scss['modal--buttonWrapper']}>
        <img src={mailbox} alt="mailbox icon" />
        <p className="titleFooter--1">Сообщения</p>
      </span>
      <hr className="divider" />
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">Управление профилем</p>
      </span>
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">Личные данные</p>
      </span>
      <hr className="divider" />
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">Пожаловаться</p>
      </span>
      <span onClick={handleLogout} className={scss['modal--buttonWrapper']}>
        <img src={logout} alt="logout icon" />
        <p className="titleFooter--1">Выйти</p>
      </span>
    </div>
  );
};
export const Modal_mobil_LoggedIn: React.FC<props> = ({ modal, setModal }) => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['refresh']);
  const { isAuthenticated, Logout } = useAuth();
  const handleLogout = () => {
    Logout();
    removeCookie('refresh');
  };
  return (
    <div className={scss['modal'] + ' ' + scss[`modal--${modal}`]}>
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('Rent')}>
        <p className="titleFooter--1">Аренда</p>
      </span>
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('Purchase')}>
        <p className="titleFooter--1">Покупка</p>
      </span>
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('Sale')}>
        <p className="titleFooter--1">Продажа</p>
      </span>
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('Realtors')}>
        <p className="titleFooter--1">Риелторы</p>
      </span>
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('Developers')}>
        <p className="titleFooter--1">Застройщики</p>
      </span>
      <hr className="divider" />

      <span className={scss['modal--buttonWrapper']}>
        <img src={Add} alt="Add icon" />
        <p className="titleFooter--1">Разместить объявление</p>
      </span>

      <span className={scss['modal--buttonWrapper']}>
        <img src={heart} alt="heart icon" />
        <p className="titleFooter--1">Избранное</p>
      </span>
      <span className={scss['modal--buttonWrapper']}>
        <img src={mailbox} alt="mailbox icon" />
        <p className="titleFooter--1">Сообщения</p>
      </span>
      <hr className="divider" />
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">Управление профилем</p>
      </span>
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">Личные данные</p>
      </span>
      <hr className="divider" />
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">Пожаловаться</p>
      </span>
      <span className={scss['modal--buttonWrapper']} onClick={handleLogout}>
        <img src={logout} alt="logout icon" />
        <p className="titleFooter--1">Выйти</p>
      </span>
    </div>
  );
};

export const Modal_mobile: React.FC<props> = ({ modal, setModal }) => {
  const navigate = useNavigate();
  return (
    <div className={scss['modal'] + ' ' + scss[`modal--${modal}`]}>
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">Аренда</p>
      </span>
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">Покупка</p>
      </span>
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">Продажа</p>
      </span>
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">Риелторы</p>
      </span>
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">Застройщики</p>
      </span>
      <hr className="divider" />
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('/login')}>
        <img src={mdi_login} alt="icon" />
        <p className="titleFooter--1">Войти</p>
      </span>
      <span
        className={scss['modal_mobile--map']}
        style={{ background: `url(${map}) center/cover no-repeat` }}>
        <Button variant="secondary">
          <p>Найти по карте</p>
        </Button>
      </span>
    </div>
  );
};
