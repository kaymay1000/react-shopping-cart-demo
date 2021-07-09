import React from 'react';
import Product from './product';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <h1>Your Cart</h1>
        <Product/>
      </div>
    )
  }
}

export default Cart;