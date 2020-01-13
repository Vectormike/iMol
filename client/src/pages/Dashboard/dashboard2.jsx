import React from 'react';
//import Navbar from '../../components/Navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import Menu from '../../components/menu/menu';
import MenuView from '../../components/menu-view/menu-view';

const Dashboard = props => {
  console.log(props);

  return (
    <div>
      <Sidebar>
        <Menu />
      </Sidebar>
      <MenuView />
    </div>
  );
};

export default Dashboard;
