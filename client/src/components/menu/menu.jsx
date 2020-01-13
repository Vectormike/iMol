import React, { Fragment, useState } from 'react';
import MenuItem from '../menu-item/menu-item';
import pages from '../../helpers/item-data';

const Menu = ({ props }) => {
  return (
    <Fragment>
      <nav>
        {pages.map((item, i) => {
          return <MenuItem key={i} props={props} title={item.name} />;
        })}
      </nav>
    </Fragment>
  );
};

export default Menu;
