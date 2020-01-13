import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Styles from '../../styles/menu-items.module.scss';

const MenuItem = ({ title }) => (
  <Fragment>
    <Link className={Styles.item}>
      <i className={Styles.icon}></i>
      {title}
    </Link>
  </Fragment>
);

export default MenuItem;
