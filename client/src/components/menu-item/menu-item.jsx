import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Styles from '../../styles/menu-items.module.scss';

const MenuItem = ({ title, props }) => (
  <Fragment>
    {console.log(props)}
    <Link to={`${props.match.url}/products`} className={Styles.item}>
      <i className={Styles.icon}></i>
      {title}
    </Link>
  </Fragment>
);

export default MenuItem;
