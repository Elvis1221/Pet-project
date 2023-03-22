import React, { FC } from 'react';

import PageContainer from '../PageContainer/PageContainer';
import NavMenu from '../NavMenu/NavMenu';

import css from './PageWrapper.module.css';

interface IChildren {
  children: JSX.Element | JSX.Element[];
}

const PageWrapper: FC<IChildren> = ({ children }) => {
  return (
    <PageContainer>
      <div className={css.Container}>
        <NavMenu />
        <div className={css.ContentWrapper}>{children}</div>
      </div>
    </PageContainer>
  );
};

export default PageWrapper;
