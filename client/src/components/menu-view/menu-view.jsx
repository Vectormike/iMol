import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Products from '../products/products';
import Title from '../title/title';

import Styles from '../../styles/menu-view.module.scss';

const MenuView = () => {
  return (
    <Fragment className={Styles.menuview}>
      <Title title='Hello' />
    </Fragment>
  );
};

export default MenuView;
