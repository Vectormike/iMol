import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '26px',
    height: '20px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

const BurgerMenu = () => {
  return (
    <Menu isOpen={true} width={280} styles={styles}>
      <Link to='/home'>Home</Link>
    </Menu>
  );
};

export default BurgerMenu;
