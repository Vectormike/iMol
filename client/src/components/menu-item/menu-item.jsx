import React, { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import Products from '../products/products';

import Styles from '../../styles/menu-items.module.scss';

const MenuItem = ({ title, props }) => (
  <Fragment>
    {console.log(props)}
    <Link to='/products' className={Styles.item}>
      <i className={Styles.icon}></i>
      {title}
    </Link>
    <div>
      <Route exact path='/products' component={Products} />
    </div>
  </Fragment>
);

export default MenuItem;
