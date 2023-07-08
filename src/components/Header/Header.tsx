import React, { useEffect, useState } from 'react';
import scss from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import Logo from './assets/Logo.svg';
import Button from './../Button/Button';

const Header: React.FC = () => {
  const { t } = useTranslation(['Header']);
  const translationPath = 'Header.';
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

  useEffect(() => {
    if (pathname === '/') {
      setCurrentPage('Rent');
    } else {
      setCurrentPage(pathname.split('/')[1]);
    }
  }, [pathname]);
  return (
    <header className={scss['header']}>
      <span className={scss['header__logo']}>
        <img src={Logo} alt="Logo" />
      </span>
      <hr />
      <nav className={scss['header__nav']}>
        {nav_links.map(({ path, title }, index) => (
          <Link
            className={
              path === currnetPage ? scss['header__nav__item--active'] : scss['header__nav__item']
            }
            to={path}
            key={index}>
            <p className="Headline">{title}</p>
          </Link>
        ))}
      </nav>
      <Button variant={'primary'} style={{ marginLeft: 'auto' }}>
        <p>{t(`${translationPath}login`)}</p>
      </Button>
    </header>
  );
};

export default Header;
