import React from 'react';
import CartNavItem from './CartNavItem';
import '../styles/navBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navBarWrapper">
        <CartNavItem/>
      </div>
    )
  }
}

export default NavBar;