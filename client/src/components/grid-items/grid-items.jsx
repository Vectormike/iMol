import React from 'react';
import { Link } from 'react-router-dom';

import Styles from '../../styles/grid-items.module.scss';

const GridItems = () => (
  <div>
    <ul className={Styles.list}>
      <Link to='dashboard/:link1'>
        <li>Link 1</li>
      </Link>
      <Link to='/link2'>
        <li>Link 2</li>
      </Link>
    </ul>
  </div>
);

export default GridItems;
