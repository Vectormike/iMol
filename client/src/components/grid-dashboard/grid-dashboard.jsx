import React from 'react';
import Items from '../grid-items/grid-items';

const GridDashboard = () => {
  return (
    <section className='container-fluid'>
      <div className='row'>
        <div className='col-4'>
          <ul className>
            <li>Link 1</li>
            <li>Link 2</li>
          </ul>
        </div>
        <div className='col-8'>View</div>
      </div>
    </section>
  );
};
export default GridDashboard;
