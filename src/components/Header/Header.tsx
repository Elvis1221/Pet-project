// Header component with top right menu
import { FC } from 'react';

import NavMenu from '../NavMenu/NavMenu';

import css from './Header.module.css';

export const Header: FC = () => {
  return (
    <div className={css.headerWrapper}>
      <NavMenu />
    </div>
  );
};

export default Header;
