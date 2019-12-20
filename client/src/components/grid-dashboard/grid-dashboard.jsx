import React from 'react';
import { Route } from 'react-router-dom';

import Items from '../grid-items/grid-items';
import View from '../grid-view/grid-view';

const GridDashboard = () => {
  return (
    <section className='container-fluid'>
      <div className='row'>
        <div className='col-4'>
          <Items />
        </div>
        <div className='col-8'>
          <Route exact path='/dashboard/:link1' component={View} />
        </div>
      </div>
    </section>
  );
};
export default GridDashboard;
