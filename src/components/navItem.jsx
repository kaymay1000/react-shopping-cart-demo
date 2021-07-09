import React from 'react';

class NavItem extends React.Component {
  render() {
    const tabNames = ['Home', 'About', 'Connect', 'Donate'];
    let tabs = tabNames.map((name) => {
      return <a key={name} href={'/' + name }>{name}</a>
    });
    return tabs;
  }
}

export default NavItem;