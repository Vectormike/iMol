import React from 'react';
//import { Link } from 'react-router-dom';

import Styles from '../../styles/grid-items.module.scss';

const MenuItems = ({ title }) => (
  <div>
    <Link className={Styles.item}>
      <i className={Styles.icon}></i>
      {title}
    </Link>
  </div>
);

export default MenuItems;
