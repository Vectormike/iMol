import React from 'react';
//import { Route } from 'react-router-dom';

// import Items from '../grid-items/grid-items';
// import View from '../grid-view/grid-view';

import Styles from '../../styles/sidebar.module.scss';

const Sidebar = ({ children }) => {
  return (
    <section className={Styles.sidebar}>
      <div>{children}</div>
    </section>
  );
};
export default Sidebar;
