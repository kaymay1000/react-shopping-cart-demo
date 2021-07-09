import React from 'react';
import CartNavItem from './CartNavItem';
import '../styles/navBar.css';

const NavBar = () => {
  return (
    <div className="navBarWrapper">
      <CartNavItem/>
    </div>
  )
}

export default NavBar;