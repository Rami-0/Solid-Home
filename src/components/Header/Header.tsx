import React, { useEffect, useState } from 'react';
import scss from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import Logo from './assets/Logo.svg';
import Button from './../Button/Button';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { ModalLoggedIn, Modal_mobil_LoggedIn, Modal_mobile } from './HeaderModal/HeaderModal';

import search from './assets/search.svg';
import hamburger from './assets/hamburger.svg';
import bell from './assets/bell.svg';
import heart from './assets/heart-linear.svg';
import mailbox from './assets/mailbox.svg';
import translation from './assets/translation.png';
import DefPfp from './assets/DefPfp.png';
import useScreenWidth from '../../hooks/useScreenWidth';

interface Iprops {
  AuthHeader?: boolean;
  style?: React.CSSProperties | undefined;
}

const Header: React.FC<Iprops> = ({ AuthHeader, style }) => {
  const { t, i18n } = useTranslation(['Header']);
  const translationPath = 'Header.';
  const [modal, setModal] = useState(false);
  const screenWidth = useScreenWidth();
  const { pathname } = useLocation();
  const nav_links = [
    {
      path: 'Rent',
      title: t(`${translationPath}Rent`)
    },
    {
      path: 'Purchase',
      title: t(`${translationPath}Purchase`)
    },
    {
      path: 'Sale',
      title: t(`${translationPath}Sale`)
    },
    {
      path: 'Realtors',
      title: t(`${translationPath}Realtors`)
    },
    {
      path: 'Developers',
      title: t(`${translationPath}Developers`)
    }
  ];
  const [currnetPage, setCurrentPage] = useState<string>();
  const navigate = useNavigate();
  const { isAuthenticated, auth } = useAuth();

  useEffect(() => {
    if (pathname === '/') {
      setCurrentPage('Rent');
    } else {
      setCurrentPage(pathname.split('/')[1]);
    }
  }, [pathname]);

  const handleChangingLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('ru');
    } else {
      i18n.changeLanguage('en');
    }
  };

  const renderRightSide = () => {
    if (screenWidth > 1000) {
      if (isAuthenticated) {
        return (
          <aside className={scss['header__controller']} style={{ marginLeft: 'auto' }}>
            <div className={scss['header__controller--icons']}>
              <Button variant={'noBorder'} onClick={handleChangingLanguage}>
                <img src={translation} width={25} height={25} alt="" />
              </Button>
              <Button variant={'noBorder'}>
                <img src={heart} width={25} height={25} alt="" />
              </Button>
              <Button variant={'noBorder'}>
                <img src={mailbox} width={25} height={25} alt="" />
              </Button>
              <Button variant={'noBorder'}>
                <img src={bell} width={25} height={25} alt="" />
              </Button>
            </div>
            <Button variant={'primary'} style={{ marginLeft: 'auto' }}>
              <p>{t(`${translationPath}PlaceAnAd`)}</p>
            </Button>
            <span style={{ position: 'relative' }}>
              <Button
                variant={'noBorder'}
                style={{ marginLeft: 'auto' }}
                onClick={() => setModal((prev) => !prev)}>
                <img src={DefPfp} width="40" height="40" style={{ borderRadius: 20 }} alt="" />
              </Button>
              <ModalLoggedIn modal={modal} setModal={setModal} />
            </span>
          </aside>
        );
      } else {
        return (
          <Button
            variant={'primary'}
            style={{ marginLeft: 'auto' }}
            onClick={() => navigate('/login')}>
            <p>{t(`${translationPath}login`)}</p>
          </Button>
        );
      }
    }
  };

  const renderRightSideMobile = () => {
    if (screenWidth < 1000) {
      return (
        <aside className={scss['header__controller']} style={{ marginLeft: 'auto' }}>
          <div className={scss['header__controller--icons']}>
            <Button variant={'noBorder'} onClick={handleChangingLanguage}>
              <img src={translation} width={25} height={25} alt="" />
            </Button>
            <Button variant={'noBorder'}>
              <img src={search} width={25} height={25} alt="" />
            </Button>
          </div>
          <span style={{ position: 'relative' }}>
            <Button
              variant={'noBorder'}
              style={{ marginLeft: 'auto' }}
              onClick={() => setModal((prev) => !prev)}>
              <img src={hamburger} width="40" height="40" style={{ borderRadius: 20 }} alt="" />
            </Button>
            {!isAuthenticated ? (
              <Modal_mobil_LoggedIn modal={modal} setModal={setModal} />
            ) : (
              <Modal_mobile modal={modal} setModal={setModal} />
            )}
          </span>
        </aside>
      );
    }
  };

  const renderNav = () => {
    if (screenWidth > 1000) {
      return (
        <>
          <hr />
          <nav className={scss['header__nav']}>
            {nav_links.map(({ path, title }, index) => (
              <Link
                className={
                  path === currnetPage
                    ? scss['header__nav__item--active']
                    : scss['header__nav__item']
                }
                to={path}
                key={index}>
                <p className="Headline">{title}</p>
              </Link>
            ))}
          </nav>
        </>
      );
    }
  };

  return (
    <header className={scss['header']} style={style}>
      <span className={scss['header__logo']}>
        <img src={Logo} alt="Logo" />
      </span>
      {!AuthHeader ? (
        <>
          {renderNav()}
          {renderRightSide()}
          {renderRightSideMobile()}
        </>
      ) : (
        ''
      )}
    </header>
  );
};

export default Header;
