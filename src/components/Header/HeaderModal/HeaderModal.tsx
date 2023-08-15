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
import { useTranslation } from 'react-i18next';

interface props {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalLoggedIn: React.FC<props> = ({ modal, setModal }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['refresh']);
  const { t } = useTranslation(['Header']);
  const translationPath = 'Modal.';
  const { isAuthenticated, Logout } = useAuth();
  const handleLogout = () => {
    Logout();
    removeCookie('refresh');
  };
  return (
    <div className={scss['modal'] + ' ' + scss[`modal--${modal}`]}>
      <span className={scss['modal--buttonWrapper']}>
        <img src={Add} alt="Add icon" />
        <p className="titleFooter--1">{t(`${translationPath}place_ad`)}</p>
      </span>

      <span className={scss['modal--buttonWrapper']}>
        <img src={heart} alt="heart icon" />
        <p className="titleFooter--1">{t(`${translationPath}favs`)}</p>
      </span>
      <span className={scss['modal--buttonWrapper']}>
        <img src={mailbox} alt="mailbox icon" />
        <p className="titleFooter--1">{t(`${translationPath}message`)}</p>
      </span>
      <hr className="divider" />
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">{t(`${translationPath}profile_control`)}</p>
      </span>
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">{t(`${translationPath}profile`)}</p>
      </span>
      <hr className="divider" />
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">{t(`${translationPath}complain`)}</p>
      </span>
      <span onClick={handleLogout} className={scss['modal--buttonWrapper']}>
        <img src={logout} alt="logout icon" />
        <p className="titleFooter--1">{t(`${translationPath}logout`)}</p>
      </span>
    </div>
  );
};
export const Modal_mobil_LoggedIn: React.FC<props> = ({ modal, setModal }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(['Header']);
  const translationPath = 'Modal.';
  const [cookies, setCookie, removeCookie] = useCookies(['refresh']);
  const { isAuthenticated, Logout } = useAuth();
  const handleLogout = () => {
    Logout();
    removeCookie('refresh');
  };
  return (
    <div className={scss['modal'] + ' ' + scss[`modal--${modal}`]}>
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('Rent')}>
        <p className="titleFooter--1">{t(`${translationPath}Rent`)}</p>
      </span>
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('Purchase')}>
        <p className="titleFooter--1">{t(`${translationPath}Purchase`)}</p>
      </span>
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('Sale')}>
        <p className="titleFooter--1">{t(`${translationPath}Sale`)}</p>
      </span>
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('Realtors')}>
        <p className="titleFooter--1">{t(`${translationPath}Realtors`)}</p>
      </span>
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('Developers')}>
        <p className="titleFooter--1">{t(`${translationPath}Developers`)}</p>
      </span>
      <hr className="divider" />

      <span className={scss['modal--buttonWrapper']}>
        <img src={Add} alt="Add icon" />
        <p className="titleFooter--1">{t(`${translationPath}place_ad`)}</p>
      </span>

      <span className={scss['modal--buttonWrapper']}>
        <img src={heart} alt="heart icon" />
        <p className="titleFooter--1">{t(`${translationPath}favs`)}</p>
      </span>
      <span className={scss['modal--buttonWrapper']}>
        <img src={mailbox} alt="mailbox icon" />
        <p className="titleFooter--1">{t(`${translationPath}message`)}</p>
      </span>
      <hr className="divider" />
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">{t(`${translationPath}profile_control`)}</p>
      </span>
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">{t(`${translationPath}profile`)}</p>
      </span>
      <hr className="divider" />
      <span className={scss['modal--buttonWrapper']}>
        <p className="titleFooter--1">{t(`${translationPath}complain`)}</p>
      </span>
      <span className={scss['modal--buttonWrapper']} onClick={handleLogout}>
        <img src={logout} alt="logout icon" />
        <p className="titleFooter--1">{t(`${translationPath}logout`)}</p>
      </span>
    </div>
  );
};

export const Modal_mobile: React.FC<props> = ({ modal, setModal }) => {
  const { t } = useTranslation(['Header']);
  const translationPath = 'Modal.';
  const navigate = useNavigate();
  return (
    <div className={scss['modal'] + ' ' + scss[`modal--${modal}`]}>
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('Rent')}>
        <p className="titleFooter--1">{t(`${translationPath}Rent`)}</p>
      </span>
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('Purchase')}>
        <p className="titleFooter--1">{t(`${translationPath}Purchase`)}</p>
      </span>
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('Sale')}>
        <p className="titleFooter--1">{t(`${translationPath}Sale`)}</p>
      </span>
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('Realtors')}>
        <p className="titleFooter--1">{t(`${translationPath}Realtors`)}</p>
      </span>
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('Developers')}>
        <p className="titleFooter--1">{t(`${translationPath}Developers`)}</p>
      </span>
      <hr className="divider" />
      <span className={scss['modal--buttonWrapper']} onClick={() => navigate('/login')}>
        <img src={mdi_login} alt="icon" />
        <p className="titleFooter--1">{t(`${translationPath}login`)}</p>
      </span>
      <span
        className={scss['modal_mobile--map']}
        style={{ background: `url(${map}) center/cover no-repeat` }}>
        <Button variant="secondary">
          <p>{t(`${translationPath}map`)}</p>
        </Button>
      </span>
    </div>
  );
};

interface NavModalProps {
  left: number;
  top: number;
  onMouseLeave: () => void;
  path: string;
  activePath: string;
}

export const NavModal: React.FC<NavModalProps> = ({
  activePath,
  path,
  left,
  top,
  onMouseLeave
}) => {
  const renderContent = () => {
    switch (activePath) {
      case 'Rent':
        return (
          <>
            <div className={scss['NavModal']}>
              <span className={scss['NavModal__sections']}>
                <h4>Длительная аренда</h4>
                <a href="" className="titleFooter--1">
                  Квартиры
                </a>
                <a href="" className="titleFooter--1">
                  Комнаты
                </a>
                <a href="" className="titleFooter--1">
                  Дома
                </a>
                <a href="" className="titleFooter--1">
                  Таунхаусы и коттеджы
                </a>
              </span>
              <span className={scss['NavModal__sections']}>
                <h4>Посуточная аренда</h4>
                <a href="" className="titleFooter--1">
                  Квартиры
                </a>
                <a href="" className="titleFooter--1">
                  Комнаты
                </a>
                <a href="" className="titleFooter--1">
                  Дома
                </a>
                <a href="" className="titleFooter--1">
                  Таунхаусы и коттеджы
                </a>
              </span>
            </div>
          </>
        );
      case 'Purchase':
        return (
          <>
            <div className={scss['NavModal']}>
              <span className={scss['NavModal__sections']}>
                <h4>Квартиры</h4>
                <a href="" className="titleFooter--1">
                  Квартиры в новостройках
                </a>
                <a href="" className="titleFooter--1">
                  Квартиры во вторичках
                </a>
                <a href="" className="titleFooter--1">
                  Комнаты и доли
                </a>
              </span>
              <span className={scss['NavModal__sections']}>
                <h4>Дома</h4>
                <a href="" className="titleFooter--1">
                  Таунхаусы и коттеджы
                </a>
                <a href="" className="titleFooter--1">
                  Дачи
                </a>
                <a href="" className="titleFooter--1">
                  Участки
                </a>
              </span>
            </div>
          </>
        );
      case 'Sale':
        return (
          <>
            <div className={scss['NavModal']}>
              <span className={scss['NavModal__sections']}>
                <h4>Квартиры</h4>
                <a href="" className="titleFooter--1">
                  Квартиры в новостройках
                </a>
                <a href="" className="titleFooter--1">
                  Квартиры во вторичках
                </a>
                <a href="" className="titleFooter--1">
                  Комнаты и доли
                </a>
              </span>
              <span className={scss['NavModal__sections']}>
                <h4>Дома</h4>
                <a href="" className="titleFooter--1">
                  Таунхаусы и коттеджы
                </a>
                <a href="" className="titleFooter--1">
                  Дачи
                </a>
                <a href="" className="titleFooter--1">
                  Участки
                </a>
              </span>
            </div>
          </>
        );

      default:
        return null; // Default case when no matching path is found
    }
  };
  const res = renderContent();
  return (
    <>
      {res != null && (
        <div
          style={{
            position: 'absolute',
            left: `${left}px`,
            top: `${top}px`,
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            backgroundColor: 'var(--bg-pr)',
            padding: '20px 22px',
            zIndex: 1000,
            borderRadius: '3px',
            transition: 'all 3s',
            animation: `${activePath === path ? 'fadeIn' : 'fadeOut'} 0.4s ease-in-out`,
            boxShadow: '2px 2px 6px 0px rgba(0, 0, 0, 0.1), -2px -2px 6px 0px rgba(0, 0, 0, 0.1)'
          }}
          onMouseLeave={() => {
            onMouseLeave();
          }}>
          <>{res}</>
          <p
            className="Subtitle--1"
            style={{ color: 'var(--blue)', cursor: 'pointer', display: 'flex', gap: 8 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none">
              <g clipPath="url(#clip0_796_16929)">
                <path
                  d="M16.219 1.94302C16.872 2.45502 17.322 3.28202 17.506 4.14802C17.5283 4.15508 17.55 4.16377 17.571 4.17402L19.616 5.12002C19.7303 5.17251 19.8272 5.25662 19.8952 5.3624C19.9633 5.46819 19.9996 5.59124 20 5.71702V18.084C19.9993 18.1868 19.9747 18.2879 19.9284 18.3796C19.882 18.4712 19.815 18.5509 19.7326 18.6123C19.6503 18.6738 19.5548 18.7153 19.4537 18.7336C19.3526 18.7519 19.2487 18.7466 19.15 18.718L13.481 17.118L6.741 18.976C6.61939 19.0094 6.49086 19.008 6.37 18.972L0.474 17.217C0.337721 17.177 0.21799 17.0941 0.132595 16.9806C0.047201 16.8671 0.00069966 16.7291 0 16.587L0 3.99802C0 3.55802 0.428 3.24202 0.855 3.36602L6.557 5.02702L9.455 4.14002C9.49488 4.12825 9.5357 4.11989 9.577 4.11502C9.689 3.45902 10.002 2.82902 10.527 2.21502C11.15 1.48502 12.243 1.05702 13.308 1.00602C14.413 0.953024 15.257 1.18902 16.218 1.94202L16.219 1.94302ZM1.333 4.88102V16.096L6.203 17.545V6.29802L1.333 4.88102ZM9.542 5.49502L7.536 6.10802V17.387L12.601 15.993V12.698C12.601 12.334 12.9 12.039 13.268 12.039C13.636 12.039 13.934 12.334 13.934 12.699V15.876L18.667 17.211V6.13602L17.547 5.61602C17.528 5.72602 17.504 5.83402 17.474 5.93902C17.2565 6.70578 16.8917 7.42281 16.4 8.05002L13.923 11.143C13.8578 11.2243 13.7745 11.2893 13.6797 11.3328C13.585 11.3763 13.4814 11.3971 13.3772 11.3935C13.273 11.3899 13.1711 11.362 13.0796 11.3121C12.9881 11.2622 12.9095 11.1916 12.85 11.106L10.535 7.75302C10.153 7.21902 9.885 6.74302 9.734 6.31702C9.63922 6.05114 9.57481 5.77539 9.542 5.49502ZM13.372 2.32402C12.646 2.35902 11.9 2.65102 11.545 3.06602C11.118 3.56602 10.908 4.03402 10.866 4.50802C10.816 5.07902 10.85 5.48202 10.992 5.88102C11.097 6.17602 11.306 6.55002 11.629 7.00102L13.44 9.62302L15.35 7.23802C15.7353 6.74558 16.021 6.18275 16.191 5.58102C16.431 4.74102 16.069 3.50702 15.391 2.97702C14.696 2.43202 14.171 2.28502 13.373 2.32402H13.372ZM13.51 3.02102C14.614 3.02102 15.51 3.90602 15.51 4.99802C15.5086 5.25918 15.4557 5.51749 15.3544 5.7582C15.2531 5.99891 15.1053 6.2173 14.9196 6.4009C14.7339 6.58449 14.5138 6.72969 14.2719 6.8282C14.0301 6.92671 13.7712 6.9766 13.51 6.97502C12.406 6.97502 11.51 6.09002 11.51 4.99802C11.51 3.90602 12.406 3.02102 13.51 3.02102ZM13.51 4.33902C13.4229 4.3385 13.3366 4.35512 13.256 4.38796C13.1753 4.42079 13.102 4.46919 13.04 4.53038C12.9781 4.59157 12.9288 4.66437 12.895 4.74461C12.8612 4.82485 12.8435 4.91096 12.843 4.99802C12.843 5.36202 13.142 5.65702 13.51 5.65702C13.5971 5.65742 13.6834 5.64066 13.7639 5.60771C13.8445 5.57475 13.9178 5.52625 13.9797 5.46496C14.0415 5.40367 14.0907 5.3308 14.1244 5.25052C14.1581 5.17023 14.1756 5.08409 14.176 4.99702C14.1747 4.82153 14.1038 4.65372 13.979 4.53038C13.8541 4.40704 13.6855 4.33823 13.51 4.33902Z"
                  fill="#407BFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_796_16929">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Поиск по карте
          </p>
          <hr />
          <h4 style={{ color: 'var(--blue)', cursor: 'pointer' }}>Разместить объявление</h4>
        </div>
      )}
    </>
  );
};
