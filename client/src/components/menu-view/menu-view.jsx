import React from 'react';
import { Route } from 'react-router-dom';
import Products from '../products/products';
import Title from '../title/title';

import Styles from '../../styles/menu-view.module.scss';

const MenuView = () => {
  return (
    <div className={Styles.menuview}>
      <Products />
    </div>
  );
};

export default MenuView;
