import React, { Fragment, useState } from 'react';
import MenuItem from '../menu-item/menu-item';
import pages from '../../helpers/item-data';

const Menu = () => {
  return (
    <Fragment>
      <nav>
        {pages.map((item, i) => {
          return <MenuItem key={i} title={item.name} />;
        })}
      </nav>
    </Fragment>
  );
};

export default Menu;
